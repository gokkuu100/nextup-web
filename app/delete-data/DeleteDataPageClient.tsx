"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/features/landing/Header";
import { Footer } from "@/components/features/landing/Footer";
import { submitDataDeletionRequest } from "@/app/actions/contact";
import { LEGAL } from "@/lib/legal/site";

export function DeleteDataPageClient() {
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    try {
      const formData = new FormData(e.currentTarget);
      const result = await submitDataDeletionRequest(formData);
      if (result.success) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        alert(result.error ?? "Something went wrong. Please try again.");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="bg-background text-foreground min-h-screen pt-24 font-dmsans">
      <Header />

      <section className="py-16 px-6 md:px-12 border-b border-foreground/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-4">
            Account & data · {LEGAL.appName}
          </p>
          <h1 className="font-bebas text-5xl md:text-6xl tracking-tight uppercase text-foreground mb-4">
            Request to delete data
          </h1>
          <p className="text-sm text-foreground/60 leading-relaxed">
            You can delete your {LEGAL.appName} account and personal data directly in the app, or
            submit a request below if you no longer have access to your account.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8 text-sm text-foreground/75 leading-relaxed">
            <div>
              <h2 className="font-bebas text-xl tracking-wide uppercase text-foreground mb-3">
                Delete in the app (recommended)
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Open the {LEGAL.appName} app and sign in</li>
                <li>Go to your Profile tab</li>
                <li>Tap Edit profile</li>
                <li>Scroll to the Danger zone section</li>
                <li>Tap Delete my account and confirm</li>
              </ol>
              <p className="mt-4 text-foreground/50 text-xs">
                This applies to both client and trainer accounts. Deletion is permanent and removes
                personal identifiers such as your name, email, phone, and profile photo from our
                systems.
              </p>
            </div>

            <div>
              <h2 className="font-bebas text-xl tracking-wide uppercase text-foreground mb-3">
                What we delete
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Account profile and contact information</li>
                <li>Profile photos and uploaded trainer certificates</li>
                <li>Push notification tokens tied to your account</li>
                <li>Personal identifiers linked to your user ID</li>
              </ul>
              <p className="mt-4 text-foreground/50 text-xs">
                Some anonymized or legally required records (e.g., completed payment logs) may be
                retained as described in our{" "}
                <Link href="/privacy" className="text-primary underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-bebas text-xl tracking-wide uppercase text-foreground mb-3">
                Processing time
              </h2>
              <p>
                In-app deletion is processed immediately. Web requests are typically handled within
                30 days. We may contact you at the email provided to verify identity before deleting
                data.
              </p>
            </div>

            <p className="text-xs text-foreground/40">
              App identifiers: iOS {LEGAL.iosBundleId} · Android {LEGAL.androidPackage}
            </p>
          </div>

          <div className="bg-foreground/[0.02] p-8 md:p-10 border border-foreground/10">
            {submitted ? (
              <div className="space-y-4">
                <h2 className="font-bebas text-2xl tracking-wide uppercase text-foreground">
                  Request received
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Thank you. We received your data deletion request and will process it within 30
                  days. You may receive a confirmation email at the address you provided.
                </p>
                <p className="text-xs text-foreground/50">
                  Questions? Email{" "}
                  <a
                    href={`mailto:${LEGAL.privacyEmail}`}
                    className="text-primary underline underline-offset-2"
                  >
                    {LEGAL.privacyEmail}
                  </a>
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-bebas text-2xl tracking-wide uppercase text-foreground mb-2">
                  Web deletion request
                </h2>
                <p className="text-xs text-foreground/50 mb-8">
                  Use this form if you cannot access the app. We will verify your identity using the
                  email associated with your account.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">
                      Full name
                    </label>
                    <input
                      name="fullName"
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-primary transition-colors outline-none text-foreground"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">
                      Account email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-primary transition-colors outline-none text-foreground"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">
                      Account type
                    </label>
                    <select
                      name="accountType"
                      required
                      className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-primary transition-colors outline-none text-foreground appearance-none"
                    >
                      <option value="Client" className="bg-background">
                        Client
                      </option>
                      <option value="Trainer" className="bg-background">
                        Trainer
                      </option>
                      <option value="Unknown" className="bg-background">
                        Not sure
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">
                      Additional details (optional)
                    </label>
                    <textarea
                      name="details"
                      rows={3}
                      className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-primary transition-colors outline-none text-foreground resize-none"
                      placeholder="Reason for request or info to help us locate your account"
                    />
                  </div>

                  <label className="flex items-start gap-3 text-xs text-foreground/60 leading-relaxed cursor-pointer">
                    <input
                      name="confirm"
                      type="checkbox"
                      required
                      className="mt-1 accent-primary"
                    />
                    <span>
                      I understand that account deletion is permanent and that I am requesting
                      deletion of my personal data associated with {LEGAL.appName}.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={pending}
                    className="w-full bg-primary text-black font-bold text-[10px] tracking-widest uppercase py-5 rounded-sm hover:bg-white transition-all disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {pending ? "Submitting…" : "Submit deletion request"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
