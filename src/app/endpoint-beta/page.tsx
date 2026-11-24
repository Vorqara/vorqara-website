import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Laptop, Users, Clock3, Globe2, LockKeyhole } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { PageFrame, PageIntro } from "@/components/site-shell";

const applicationUrl = "https://tally.so/r/EqxMqX";

export const metadata = pageMetadata(
  "Endpoint Beta Programme",
  "Apply to be considered for the free Vorqara Endpoint beta programme. Help us validate a Windows endpoint security product with a diverse group of testers.",
  "/endpoint-beta"
);

const benefits = [
  { icon: ShieldCheck, title: "Free beta participation", description: "There is no fee to apply or participate in the initial beta programme." },
  { icon: Users, title: "Direct founder engagement", description: "Share feedback directly with the team building Vorqara Endpoint." },
  { icon: CheckCircle2, title: "Extended early access", description: "Selected testers may receive extended early access as the product develops." },
];

const expectations = [
  "Use a Windows device that you own or are explicitly authorised to test.",
  "Follow the test instructions and report issues clearly, including steps to reproduce where possible.",
  "Share honest feedback about setup, usability, reliability and the endpoint experience.",
  "Do not install beta software on an employer-managed or third-party device without written permission.",
];

export default function EndpointBetaPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="Vorqara Endpoint · Beta programme"
        title={<>Help us build a more <em>useful endpoint experience.</em></>}
        description="We are inviting Windows users, IT administrators and cybersecurity professionals to express interest in testing the first Vorqara Endpoint release. Applications are open for review; software access will follow only after release-readiness checks."
      />

      <section className="vq-section">
        <div className="vq-container">
          <div className="vq-callout">
            <div>
              <span className="vq-status vq-status-build">Applications open · software not yet released</span>
              <h2 style={{ marginTop: 15 }}>Join the early tester community.</h2>
              <p>Apply to be considered for the free beta. We will review applications and contact selected participants with next steps when the test build is ready.</p>
            </div>
            <a className="vq-button-primary" href={applicationUrl} target="_blank" rel="noreferrer">
              Apply for the beta <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="vq-section vq-section-alt">
        <div className="vq-container">
          <div className="vq-section-head">
            <span className="vq-kicker">Why participate</span>
            <h2>Help shape the product before wider release.</h2>
            <p>We want practical feedback from people who use Windows devices in real working environments. Participation is free and selection is based on programme needs, device suitability and testing readiness.</p>
          </div>
          <div className="vq-grid-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return <article className="vq-card" key={item.title}>
                <div className="vq-card-icon"><Icon size={21} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="vq-section">
        <div className="vq-container vq-feature-row">
          <div>
            <span className="vq-kicker">Who should apply</span>
            <h2>Different Windows users. One shared goal.</h2>
            <p className="vq-lead">We are interested in a balanced group of testers from Nigeria and other countries, including:</p>
            <ul className="vq-list">
              <li><Laptop size={17} /> Windows users willing to test on an authorised personal or lab device.</li>
              <li><LockKeyhole size={17} /> Cybersecurity professionals interested in endpoint visibility and security workflows.</li>
              <li><Users size={17} /> IT administrators and support professionals who manage Windows environments.</li>
              <li><Globe2 size={17} /> Participants based in Nigeria and international markets.</li>
            </ul>
          </div>
          <div className="vq-feature-panel">
            <div className="vq-eyebrow"><span />What the programme is exploring</div>
            <div className="vq-panel-item"><span>Windows endpoint registration and inventory</span><span>01</span></div>
            <div className="vq-panel-item"><span>Agent health and connectivity</span><span>02</span></div>
            <div className="vq-panel-item"><span>Endpoint posture and risk visibility</span><span>03</span></div>
            <div className="vq-panel-item"><span>Feedback on setup and usability</span><span>04</span></div>
            <p className="vq-note" style={{ marginTop: 18 }}>These are programme focus areas, not a guarantee that every capability is available in the first test build.</p>
          </div>
        </div>
      </section>

      <section className="vq-section vq-section-alt">
        <div className="vq-container">
          <div className="vq-section-head">
            <span className="vq-kicker">What we ask of testers</span>
            <h2>Safe, authorised and constructive testing.</h2>
            <p>Endpoint software operates close to the operating system. We take testing authorisation and clear communication seriously.</p>
          </div>
          <div className="vq-grid-2">
            <article className="vq-card">
              <div className="vq-card-icon"><ShieldCheck size={21} /></div>
              <h3>Testing expectations</h3>
              <ul className="vq-list">
                {expectations.map((item) => <li key={item}><CheckCircle2 size={17} /> {item}</li>)}
              </ul>
            </article>
            <article className="vq-card">
              <div className="vq-card-icon"><Clock3 size={21} /></div>
              <h3>How selection works</h3>
              <p>Complete the application form with accurate details. We will review applications against cohort needs, contact shortlisted applicants and provide onboarding information separately. Applying does not guarantee selection or immediate access.</p>
              <p style={{ marginTop: 14 }}>Please do not download or install unofficial builds. We will share test software and instructions directly with selected testers when the build is approved for distribution.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="vq-section">
        <div className="vq-container">
          <div className="vq-callout">
            <div>
              <h2>Ready to express interest?</h2>
              <p>The application takes a few minutes. We will use the details you submit to assess and administer the beta programme. Read our <Link href="/privacy" style={{ color: "#93c5fd", textDecoration: "underline" }}>Privacy Notice</Link> before applying.</p>
            </div>
            <a className="vq-button-primary" href={applicationUrl} target="_blank" rel="noreferrer">
              Open application form <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="vq-section vq-section-alt">
        <div className="vq-container" style={{ maxWidth: 850 }}>
          <div className="vq-section-head">
            <span className="vq-kicker">Questions</span>
            <h2>Before you apply.</h2>
          </div>
          <div className="vq-card">
            <h3>Is the beta software available immediately?</h3>
            <p>No. This form collects expressions of interest. Selected applicants will be contacted when a validated test build and onboarding instructions are ready.</p>
            <h3 style={{ marginTop: 24 }}>Does it cost anything?</h3>
            <p>No. The initial beta programme is free for selected participants.</p>
            <h3 style={{ marginTop: 24 }}>Can I test on my work laptop?</h3>
            <p>Only if you have explicit permission from the device owner or your organisation. We recommend a dedicated test device or virtual machine where practical.</p>
            <h3 style={{ marginTop: 24 }}>What information does the application collect?</h3>
            <p>The form asks for contact, location, role, Windows device and testing information. See the <Link href="/privacy" style={{ color: "#93c5fd", textDecoration: "underline" }}>Privacy Notice</Link> for details.</p>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
