"use server";

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { getSql } from "@/lib/db";

function isUniqueViolation(error: unknown): boolean {
  const code =
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as { code: unknown }).code === "string"
      ? (error as { code: string }).code
      : undefined;
  return code === "23505";
}

function isConnectionFailure(error: unknown): boolean {
  const msg =
    error instanceof Error ? error.message : String(error ?? "");
  const combined = msg.toLowerCase();

  if (
    combined.includes("fetch failed") ||
    combined.includes("etimedout") ||
    combined.includes("econnrefused") ||
    combined.includes("connection timed out") ||
    combined.includes("connect etimedout") ||
    (combined.includes("neon") && combined.includes("connect"))
  ) {
    return true;
  }

  const errnoErrors =
    error instanceof AggregateError ? error.errors : undefined;
  if (errnoErrors?.length) {
    for (const e of errnoErrors) {
      const code = (e as NodeJS.ErrnoException)?.code;
      if (code === "ETIMEDOUT" || code === "ECONNREFUSED") return true;
      const nestedMsg =
        e instanceof Error ? e.message.toLowerCase() : "";
      if (
        nestedMsg.includes("etimedout") ||
        nestedMsg.includes("timed out")
      ) {
        return true;
      }
    }
  }

  const cause = error instanceof Error ? error.cause : undefined;
  if (cause instanceof Error) {
    return isConnectionFailure(cause);
  }

  return false;
}

function userFacingSubmitError(error: unknown): string {
  if (isConnectionFailure(error)) {
    return "We cannot reach our database right now. Please check your connection or try again in a few minutes.";
  }
  if (isUniqueViolation(error)) {
    return "This email is already on file.";
  }
  return "Unable to save your message. Please try again later.";
}

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  console.log("Submitting form:", {
    firstName,
    lastName,
    email,
    subject,
    message,
  });

  try {
    const sql = getSql();
    await sql`
      INSERT INTO "Contact" ("id", "firstName", "lastName", "email", "subject", "message")
      VALUES (${randomUUID()}, ${firstName}, ${lastName}, ${email}, ${subject}, ${message})
    `;

    revalidatePath("/contact");
    return { success: true as const };
  } catch (error) {
    const connectionIssue = isConnectionFailure(error);

    if (connectionIssue) {
      console.error("[contact] Database connection error:", error);
      if (error instanceof Error && error.cause) {
        console.error("[contact] Cause:", error.cause);
      }
    } else {
      console.error("[contact] Database error:", error);
    }

    return {
      success: false as const,
      error: userFacingSubmitError(error),
    };
  }
}

export async function submitDataDeletionRequest(formData: FormData) {
  const fullName = (formData.get("fullName") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const accountType = (formData.get("accountType") as string)?.trim();
  const details = ((formData.get("details") as string) ?? "").trim();

  const nameParts = fullName.split(/\s+/);
  const firstName = nameParts[0] ?? fullName;
  const lastName = nameParts.slice(1).join(" ") || "—";

  const message = [
    "Data deletion request submitted via website.",
    `Account type: ${accountType}`,
    details ? `Additional details: ${details}` : null,
    "Please verify identity and process account deletion per Privacy Policy.",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const sql = getSql();
    await sql`
      INSERT INTO "Contact" ("id", "firstName", "lastName", "email", "subject", "message")
      VALUES (
        ${randomUUID()},
        ${firstName},
        ${lastName},
        ${email},
        ${"Data Deletion Request"},
        ${message}
      )
    `;

    revalidatePath("/delete-data");
    return { success: true as const };
  } catch (error) {
    if (isConnectionFailure(error)) {
      console.error("[delete-data] Database connection error:", error);
    } else {
      console.error("[delete-data] Database error:", error);
    }

    return {
      success: false as const,
      error: userFacingSubmitError(error),
    };
  }
}

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  try {
    const sql = getSql();
    await sql`
      INSERT INTO "Newsletter" ("id", "email")
      VALUES (${randomUUID()}, ${email})
    `;

    revalidatePath("/");
    return { success: true as const };
  } catch (error) {
    if (isConnectionFailure(error)) {
      console.error("[newsletter] Database connection error:", error);
    } else {
      console.error("[newsletter] Newsletter error:", error);
    }

    const message = isUniqueViolation(error)
      ? "This email is already subscribed."
      : userFacingSubmitError(error);

    return { success: false as const, error: message };
  }
}
