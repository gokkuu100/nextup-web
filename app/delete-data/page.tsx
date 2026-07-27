import type { Metadata } from "next";
import { DeleteDataPageClient } from "./DeleteDataPageClient";

export const metadata: Metadata = {
  title: "Delete My Data — NextUpFit",
  description:
    "Request deletion of your NextUpFit account and personal data, or delete your account in the app.",
};

export default function DeleteDataPage() {
  return <DeleteDataPageClient />;
}
