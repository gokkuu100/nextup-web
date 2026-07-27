import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPageShell, LegalSection } from "@/components/legal/LegalPageShell";
import { LEGAL } from "@/lib/legal/site";

export const metadata: Metadata = {
  title: "Terms of Service — NextUpFit",
  description:
    "Terms governing use of the NextUpFit mobile app and website for clients and trainers.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageShell
      title="Terms of Service"
      subtitle={`These Terms of Service ("Terms") govern your access to and use of the ${LEGAL.appName} mobile application, website, and related services operated by ${LEGAL.companyName}. By creating an account or using the Service, you agree to these Terms.`}
    >
      <LegalSection id="agreement" title="1. Agreement">
        <p>
          If you do not agree to these Terms and our{" "}
          <Link href="/privacy" className="text-primary underline underline-offset-2">
            Privacy Policy
          </Link>
          , do not use the Service.
        </p>
      </LegalSection>

      <LegalSection id="service" title="2. The Service">
        <p>
          {LEGAL.appName} is a marketplace platform that helps clients discover, request, and book
          training sessions with independent fitness trainers. We provide technology, discovery,
          booking tools, subscriptions, and related features. We are not a gym, employer of trainers,
          or provider of medical advice.
        </p>
        <p>
          Trainers are independent contractors, not employees or agents of {LEGAL.companyName}.
          Any training session is a direct arrangement between the client and trainer.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" title="3. Eligibility">
        <LegalList
          items={[
            "You must be at least 18 years old (or the age of majority in your jurisdiction) to create an account",
            "You must provide accurate registration information and keep it updated",
            "You may not use the Service if you are barred under applicable law",
          ]}
        />
      </LegalSection>

      <LegalSection id="accounts" title="4. Accounts and roles">
        <p>
          <strong>Clients</strong> may browse trainers, send session requests, book activities, rate
          sessions, and manage profile preferences.
        </p>
        <p>
          <strong>Trainers</strong> may create a public profile, set availability and pricing, accept
          or decline requests, upload certifications, subscribe to trainer plans, and deliver
          sessions.
        </p>
        <p>
          You are responsible for safeguarding your login credentials and for all activity under your
          account. Notify us immediately at {LEGAL.supportEmail} if you suspect unauthorized access.
        </p>
      </LegalSection>

      <LegalSection id="bookings" title="5. Bookings and sessions">
        <LegalList
          items={[
            "Session requests are subject to trainer acceptance",
            "Pricing, duration, and activity details are shown before you confirm a request",
            "Clients may share location with trainers for session coordination when booking",
            "Trainers and clients must communicate honestly and show up for confirmed sessions",
            "Cancellations, no-shows, and rescheduling should follow in-app status and any policies shown at booking time",
          ]}
        />
        <p>
          {LEGAL.companyName} does not guarantee trainer availability, session outcomes, or fitness
          results. You participate in physical activity at your own risk.
        </p>
      </LegalSection>

      <LegalSection id="health" title="6. Health and safety disclaimer">
        <p>
          The Service and any training content (including AI-generated plans) are for general fitness
          and informational purposes only. They are not medical advice, diagnosis, or treatment.
          Consult a physician before starting any exercise program. Stop exercising and seek medical
          help if you experience pain, injury, or distress.
        </p>
      </LegalSection>

      <LegalSection id="payments" title="7. Subscriptions and payments">
        <p>
          Certain trainer features require a paid subscription processed through Stripe or applicable
          app store billing. Prices, billing intervals, and renewal terms are displayed before
          purchase.
        </p>
        <LegalList
          items={[
            "Subscriptions renew automatically unless canceled before the renewal date",
            "Refunds are handled according to applicable app store policies and our support review",
            "We may change pricing with notice where required by law or platform rules",
            "Taxes may apply depending on your location",
          ]}
        />
        <p>
          For billing questions, contact {LEGAL.supportEmail}. App store purchases may also be
          managed through your Apple or Google account settings.
        </p>
      </LegalSection>

      <LegalSection id="content" title="8. User content and conduct">
        <p>You retain ownership of content you upload (photos, certificates, reviews). You grant us a license to host, display, and process that content to operate the Service.</p>
        <p>You agree not to:</p>
        <LegalList
          items={[
            "Violate laws or others' rights",
            "Upload false credentials, misleading profiles, or harmful content",
            "Harass, threaten, or discriminate against other users",
            "Attempt to scrape, reverse engineer, or disrupt the Service",
            "Use the Service for unauthorized commercial solicitation",
          ]}
        />
        <p>
          We may remove content or suspend accounts that violate these Terms or create safety risks.
        </p>
      </LegalSection>

      <LegalSection id="privacy" title="9. Privacy">
        <p>
          Our collection and use of personal data is described in our{" "}
          <Link href="/privacy" className="text-primary underline underline-offset-2">
            Privacy Policy
          </Link>
          . You can delete your account and personal data in the app or via our{" "}
          <Link href="/delete-data" className="text-primary underline underline-offset-2">
            data deletion request page
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="ip" title="10. Intellectual property">
        <p>
          The Service, including software, branding, and design, is owned by {LEGAL.companyName} or
          its licensors. You receive a limited, non-exclusive, revocable license to use the app for
          personal or authorized trainer business purposes under these Terms.
        </p>
      </LegalSection>

      <LegalSection id="third-party" title="11. Third-party services">
        <p>
          The Service integrates third-party services such as Stripe, Google Maps, Google Sign-In,
          Firebase, and cloud infrastructure. Your use of those services may be subject to their
          separate terms and privacy policies.
        </p>
      </LegalSection>

      <LegalSection id="disclaimer" title="12. Disclaimers">
        <p>
          THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS
          OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT,
          TO THE MAXIMUM EXTENT PERMITTED BY LAW.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="13. Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, {LEGAL.companyName.toUpperCase()} AND ITS
          AFFILIATES WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
          DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE.
        </p>
        <p>
          Our total liability for any claim relating to the Service will not exceed the greater of
          (a) amounts you paid us in the twelve (12) months before the claim or (b) one hundred
          U.S. dollars (USD $100), except where prohibited by law.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" title="14. Indemnification">
        <p>
          You agree to indemnify and hold harmless {LEGAL.companyName} from claims arising out of
          your use of the Service, your content, your interactions with other users, or your violation
          of these Terms.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="15. Termination">
        <p>
          You may stop using the Service and delete your account at any time from{" "}
          <em>Edit Profile → Delete my account</em> in the app, or by submitting a request at{" "}
          <Link href="/delete-data" className="text-primary underline underline-offset-2">
            /delete-data
          </Link>
          .
        </p>
        <p>
          We may suspend or terminate access if you breach these Terms, create risk for other users,
          or where required by law. Sections that by nature should survive termination will survive.
        </p>
      </LegalSection>

      <LegalSection id="disputes" title="16. Governing law and disputes">
        <p>
          These Terms are governed by the laws of the State of Minnesota, United States, without
          regard to conflict-of-law rules, except where mandatory consumer protection laws in your
          country of residence apply.
        </p>
        <p>
          Before filing a claim, contact us at {LEGAL.supportEmail} so we can try to resolve the
          issue informally.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="17. Changes to Terms">
        <p>
          We may modify these Terms from time to time. Material changes will be posted on this page
          with an updated effective date. Your continued use after changes become effective
          constitutes acceptance where permitted by law.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="18. Contact">
        <p>
          {LEGAL.companyName}
          <br />
          {LEGAL.address}
          <br />
          Email:{" "}
          <a href={`mailto:${LEGAL.supportEmail}`} className="text-primary underline underline-offset-2">
            {LEGAL.supportEmail}
          </a>
          <br />
          Phone: {LEGAL.phone}
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
