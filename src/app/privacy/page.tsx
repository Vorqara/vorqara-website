import { pageMetadata } from "@/lib/metadata";
import { PageFrame, PageIntro } from "@/components/site-shell";

export const metadata = pageMetadata(
  "Privacy Notice",
  "Learn how Vorqara Technologies handles information submitted through its website and Vorqara Endpoint beta application.",
  "/privacy"
);

export default function PrivacyPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="Legal · Privacy"
        title={<>Your information. <em>Handled with care.</em></>}
        description="This notice explains how Vorqara Technologies collects, uses, stores and shares personal information when you visit our website, contact us or apply to participate in the Vorqara Endpoint beta programme."
      />
      <section className="vq-section">
        <div className="vq-container" style={{ maxWidth: 850 }}>
          <p className="vq-note">Last reviewed: 24 November 2026</p>
          <div className="vq-card" style={{ marginTop: 20 }}>
            <h3>1. Who is responsible for your information?</h3>
            <p>Vorqara Technologies, based in Lagos, Nigeria, is responsible for the personal information described in this notice. For privacy questions or requests, contact <a href="mailto:admin@vorqara.com" style={{ color: "#93c5fd" }}>admin@vorqara.com</a>.</p>

            <h3 style={{ marginTop: 28 }}>2. Information we collect</h3>
            <p><strong>Website enquiries:</strong> If you contact us through the website, we may receive your name, email address, organisation, enquiry category and the message you submit.</p>
            <p><strong>Endpoint beta applications:</strong> If you apply through our beta application form, we may collect your name, email address, country or location, role, organisation (if supplied), Windows operating system and device information, device ownership or authorisation details, technical experience, testing interests, availability, preferred feedback method and the acknowledgements or consent choices you submit.</p>
            <p><strong>Website technical information:</strong> Our hosting and security services may process technical information such as IP address, browser details, device information and server logs to deliver, protect and troubleshoot the website.</p>
            <p>Please do not submit passwords, authentication secrets, confidential business information or sensitive security telemetry through a public form.</p>

            <h3 style={{ marginTop: 28 }}>3. How we use information</h3>
            <p>We use submitted information to respond to enquiries, assess beta applications, contact applicants about programme status, plan and administer testing, provide relevant programme communications, protect the safety and integrity of the programme, maintain business records and meet applicable legal obligations.</p>
            <p>Submitting an application does not guarantee selection or access to the software. The beta application form is an expression of interest; it does not install software or collect endpoint telemetry.</p>

            <h3 style={{ marginTop: 28 }}>4. Our service providers</h3>
            <p>Our website is hosted and delivered using Vercel. The Endpoint beta application form is hosted by Tally, which processes information submitted through that form and may provide application notifications to our designated administrators. Website contact-form email delivery may use Resend. These providers process information on our behalf or in accordance with their own service terms and privacy documentation.</p>
            <p>Our service providers may process information in countries other than Nigeria. Where cross-border processing occurs, we take steps intended to use appropriate safeguards as required by applicable data protection law. Please also review the privacy information published by the relevant provider.</p>

            <h3 style={{ marginTop: 28 }}>5. Legal grounds for processing</h3>
            <p>Depending on the activity and applicable law, we process information on the basis of your consent, steps taken at your request in connection with a potential beta participation, our legitimate interests in operating and securing the website and programme, or compliance with legal obligations. Where we rely on consent, you may withdraw it; withdrawal does not affect processing already carried out lawfully.</p>

            <h3 style={{ marginTop: 28 }}>6. Sharing and disclosure</h3>
            <p>We limit access to personal information to people who need it to respond to you or administer the programme. We may share relevant information with the service providers described above, professional advisers where necessary, or public authorities where disclosure is required by law. We do not make beta applicant information publicly available.</p>

            <h3 style={{ marginTop: 28 }}>7. Retention and security</h3>
            <p>We retain personal information only for as long as reasonably necessary for the purposes described in this notice, including programme administration, resolving issues, maintaining appropriate records and meeting legal requirements. Retention periods may vary depending on the type of information and whether an application progresses to testing.</p>
            <p>We use reasonable technical and organisational measures designed to protect information against unauthorised access, loss, misuse or disclosure. No website or transmission method can be guaranteed to be completely secure.</p>

            <h3 style={{ marginTop: 28 }}>8. Your privacy rights</h3>
            <p>Subject to applicable law, you may be able to request access to, correction of or deletion of your personal information, object to or request restriction of certain processing, withdraw consent, or raise a complaint with the relevant data protection authority. To make a request, email <a href="mailto:admin@vorqara.com" style={{ color: "#93c5fd" }}>admin@vorqara.com</a>. We may need to verify your identity before responding.</p>

            <h3 style={{ marginTop: 28 }}>9. Children</h3>
            <p>The Endpoint beta programme is intended for adults. We do not knowingly invite children to participate in the programme or intentionally collect their personal information through the beta application form.</p>

            <h3 style={{ marginTop: 28 }}>10. Changes to this notice</h3>
            <p>We may update this notice when our website, services or data practices change. The latest version and review date will be published on this page.</p>
          </div>
          <p className="vq-note" style={{ marginTop: 18 }}>If you are invited to install a Vorqara Endpoint beta agent, we will provide the applicable product and telemetry information before installation. This website notice does not replace any separate notice or terms presented for the beta software.</p>
        </div>
      </section>
    </PageFrame>
  );
}
