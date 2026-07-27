import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPageShell, LegalSection } from "@/components/legal/LegalPageShell";
import { LEGAL } from "@/lib/legal/site";

export const metadata: Metadata = {
  title: "Privacy Policy — NextUpFit",
  description:
    "How NextUpFit collects, uses, shares, and protects personal data for clients and trainers using the mobile app.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      subtitle={`This Privacy Policy describes how ${LEGAL.companyName} ("we", "us", "our") collects, uses, discloses, and protects information when you use the ${LEGAL.appName} mobile application, website, and related services (collectively, the "Service").`}
    >
      <LegalSection id="controller" title="1. Who we are">
        <p>
          <strong>{LEGAL.companyName}</strong> operates the {LEGAL.appName} platform, which connects
          fitness clients with independent trainers for on-demand and scheduled training sessions.
        </p>
        <p>
          Contact: {LEGAL.supportEmail} · {LEGAL.phone}
          <br />
          Address: {LEGAL.address}
        </p>
      </LegalSection>

      <LegalSection id="scope" title="2. Scope">
        <p>This policy applies to:</p>
        <LegalList
          items={[
            "The NextUpFit mobile app (iOS and Android)",
            "Our website and contact forms",
            "Trainer and client accounts created through the Service",
          ]}
        />
        <p>
          Trainers are independent service providers. Information you share with a trainer during
          booking or a session is also visible to that trainer as part of delivering the service.
        </p>
      </LegalSection>

      <LegalSection id="collect" title="3. Information we collect">
        <p>
          <strong>Account and profile information:</strong> name, email address, phone number (if
          provided), password or authentication tokens, role (client or trainer), profile photo,
          bio, fitness preferences, body stats (optional), trainer specialties, rates, certifications,
          working radius, and availability status.
        </p>
        <p>
          <strong>Location data:</strong> when you grant permission, we collect approximate or
          precise device location to show nearby trainers, display client location on session
          requests (for trainers), and improve discoverability. Location is sent when booking or
          requesting sessions and may be stored with the request record.
        </p>
        <p>
          <strong>Session and booking data:</strong> activity type, session duration, pricing,
          request/accept/decline status, session timestamps, notes, ratings, reviews, and
          cancellation reasons.
        </p>
        <p>
          <strong>Payment and subscription data:</strong> subscription plan, billing period, and
          payment status. Payment card details are processed by Stripe; we do not store full card
          numbers on our servers.
        </p>
        <p>
          <strong>Content and uploads:</strong> profile photos, trainer certification documents
          (PDF/images), and training content you access or purchase in the app.
        </p>
        <p>
          <strong>Device and usage data:</strong> device type, operating system, app version,
          push notification token (FCM), IP address, and diagnostic logs needed to operate and
          secure the Service.
        </p>
        <p>
          <strong>Communications:</strong> messages you send through contact forms, support
          requests, data deletion requests, and in-app notifications.
        </p>
        <p>
          <strong>Third-party sign-in:</strong> if you use Google Sign-In, we receive basic profile
          information permitted by your Google account settings (such as name and email).
        </p>
      </LegalSection>

      <LegalSection id="use" title="4. How we use information">
        <LegalList
          items={[
            "Create and manage your account",
            "Match clients with trainers and process session requests",
            "Show maps and location context for bookings",
            "Process subscriptions and in-app purchases through Stripe",
            "Send push notifications about session requests, reminders, and account activity",
            "Provide training content, AI-generated plans, and progress features where enabled",
            "Verify trainer credentials and maintain platform safety",
            "Improve the Service, troubleshoot errors, and prevent fraud or abuse",
            "Comply with legal obligations and enforce our Terms of Service",
          ]}
        />
      </LegalSection>

      <LegalSection id="legal-bases" title="5. Legal bases (EEA/UK users)">
        <p>Where applicable, we process personal data based on:</p>
        <LegalList
          items={[
            "Performance of a contract (providing the Service you signed up for)",
            "Legitimate interests (security, product improvement, fraud prevention)",
            "Consent (location, push notifications, marketing where required)",
            "Legal obligation (tax, regulatory, or law enforcement requests)",
          ]}
        />
      </LegalSection>

      <LegalSection id="share" title="6. How we share information">
        <p>We may share information with:</p>
        <LegalList
          items={[
            "Other users — e.g., trainers see client name, photo, and request location; clients see trainer profiles, ratings, and offerings",
            "Stripe — payment processing and subscription management",
            "Google — Maps display (location/map features) and optional Google Sign-In",
            "Firebase Cloud Messaging (Google) — delivery of push notifications",
            "OpenAI — processing prompts for AI training plans and content features (where used)",
            "Cloud hosting and storage providers — application servers, databases, and file storage (e.g., profile photos and certificates)",
            "Legal and safety — when required by law or to protect users and the platform",
          ]}
        />
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection id="retention" title="7. Data retention">
        <p>
          We keep personal data while your account is active and as needed to provide the Service.
          When you delete your account, we deactivate the account and anonymize or delete personal
          identifiers such as name, email, phone, and profile photo.
        </p>
        <p>
          Some records (for example, completed session history, payment records, or anonymized
          analytics) may be retained longer where required for legal, accounting, fraud prevention,
          or dispute resolution purposes.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="8. Your rights and choices">
        <p>Depending on your location, you may have the right to:</p>
        <LegalList
          items={[
            "Access, correct, or update your personal information in the app profile settings",
            "Delete your account and associated personal data",
            "Withdraw consent for optional processing (e.g., location or notifications via device settings)",
            "Object to or restrict certain processing",
            "Request a copy of your data (data portability, where applicable)",
            "Lodge a complaint with your local data protection authority",
          ]}
        />
        <p>
          <strong>Account deletion in the app:</strong> Client and trainer accounts can be deleted
          from <em>Edit Profile → Delete my account</em> (Danger zone). This permanently deletes
          personal data tied to your account.
        </p>
        <p>
          <strong>Web deletion request:</strong> You may also submit a request at{" "}
          <Link href="/delete-data" className="text-primary underline underline-offset-2">
            {LEGAL.website}/delete-data
          </Link>
          .
        </p>
        <p>
          Contact us at{" "}
          <a href={`mailto:${LEGAL.privacyEmail}`} className="text-primary underline underline-offset-2">
            {LEGAL.privacyEmail}
          </a>{" "}
          for privacy-related questions.
        </p>
      </LegalSection>

      <LegalSection id="children" title="9. Children">
        <p>
          The Service is not directed to children under 13 (or under 16 in the EEA/UK without
          parental consent). We do not knowingly collect personal information from children. If you
          believe a child has provided us data, contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection id="security" title="10. Security">
        <p>
          We use administrative, technical, and organizational measures appropriate to the nature of
          the data we process, including encrypted connections (HTTPS), access controls, and secure
          credential storage. No method of transmission or storage is 100% secure.
        </p>
      </LegalSection>

      <LegalSection id="international" title="11. International transfers">
        <p>
          Your information may be processed in countries other than your own, including the United
          States, where our servers or service providers may operate. We take steps designed to
          protect your data consistent with this policy and applicable law.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="12. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the updated version on
          this page and update the effective date. Continued use of the Service after changes
          constitutes acceptance of the updated policy where permitted by law.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="13. Contact us">
        <p>
          {LEGAL.companyName}
          <br />
          {LEGAL.address}
          <br />
          Email:{" "}
          <a href={`mailto:${LEGAL.privacyEmail}`} className="text-primary underline underline-offset-2">
            {LEGAL.privacyEmail}
          </a>
          <br />
          Phone: {LEGAL.phone}
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
