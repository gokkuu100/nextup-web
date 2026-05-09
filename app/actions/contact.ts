"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  console.log("Submitting form:", { firstName, lastName, email, subject });

  try {
    await prisma.contact.create({
      data: {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
    });
    
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.error("Database error:", error);
    return { success: false, error: "Failed to submit form" };
  }
}

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  try {
    await prisma.newsletter.create({
      data: {
        email,
      },
    });
    
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Newsletter error:", error);
    return { success: false, error: "Failed to subscribe" };
  }
}
