"use client";

import { useState } from "react";
import { subscribeNewsletter } from "@/app/actions/contact";

export function NewsletterForm() {
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    try {
      const formData = new FormData(e.currentTarget);
      const result = await subscribeNewsletter(formData);
      if (result.success) {
        alert("Subscribed successfully!");
        e.currentTarget.reset();
      } else {
        alert(result.error ?? "Something went wrong.");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex border-b border-foreground/20 pb-2">
      <input
        name="email"
        type="email"
        required
        disabled={pending}
        placeholder="YOUR EMAIL"
        className="bg-transparent text-[10px] tracking-widest outline-none flex-1 font-dmsans disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={pending}
        className="text-primary hover:text-white transition-colors disabled:opacity-60"
      >
        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
      </button>
    </form>
  );
}
