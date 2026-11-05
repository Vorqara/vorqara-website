import Image from "next/image";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Fingerprint,
  Network,
  Radar,
  ShieldCheck,
  ShieldEllipsis,
  Workflow,
  Layers3,
  CheckCircle2,
} from "lucide-react";
import MobileMenu from "@/components/mobile-menu";

const solutions = [
  {
    number: "01",
    title: "Endpoint Security",
    status: "Available in Beta",
    statusType: "live",
    description:
      "Gain visibility and control over the devices connected to your organisation. Vorqara Endpoint brings endpoint inventory, device health, security posture, telemetry and response capabilities into one management experience.",
    capabilities: [
      "Endpoint registration and inventory",
      "Device health and system telemetry",
      "Security posture visibility",
      "Policy management and security events",
      "Remote endpoint response actions",
    ],
    icon: ShieldCheck,
    href: "/endpoint",
    linkText: "Explore Vorqara Endpoint",
  },
  {
    number: "02",
    title: "Identity & Access Security",
    status: "In Development",
    statusType: "development",
    description:
      "Identity is central to modern security. We are developing capabilities focused on helping organisations strengthen identity governance, manage access and improve visibility into how users interact with critical systems.",
    capabilities: [
      "Identity and access visibility",
      "Access governance concepts",
      "User and role management",
      "Privileged access security direction",
    ],
    icon: Fingerprint,
  },
  {
    number: "03",
    title: "Cloud Security",
    status: "Planned",
    statusType: "planned",
    description:
      "Cloud environments need consistent visibility and security oversight. Our cloud security direction focuses on helping organisations understand their cloud environments, strengthen configurations and improve security posture.",
    capabilities: [
      "Cloud security posture direction",
      "Configuration and exposure visibility",
      "Infrastructure security principles",
      "Cloud environment protection",
    ],
    icon: Cloud,
  },
  {
    number: "04",
    title: "Threat Detection & Security Operations",
    status: "Planned",
    statusType: "planned",
    description:
      "Effective security requires more than collecting alerts. We are exploring capabilities that can help organisations improve security visibility, understand suspicious activity and strengthen their response processes.",
    capabilities: [
      "Security event visibility",
      "Threat detection direction",
      "Alert and incident workflows",
      "Security operations intelligence",
    ],
    icon: Radar,
  },
  {
    number: "05",
    title: "Application Security",
    status: "Planned",
    statusType: "planned",
    description:
      "Applications are a critical part of the digital environment. Our application security focus is centred on helping development teams identify weaknesses and build security into the software lifecycle.",
    capabilities: [
      "Application security assessment direction",
      "Secure development practices",
      "Software security visibility",
      "Security testing integration concepts",
    ],
    icon: Code2,
  },
  {
    number: "06",
    title: "Infrastructure Security",
    status: "Solution Focus",
    statusType: "focus",
    description:
      "Organisations depend on interconnected infrastructure. We focus on security-minded technology solutions that help strengthen the systems, platforms and environments that support digital operations.",
    capabilities: [
      "Infrastructure security architecture",
      "Secure technology integration",
      "System and environment hardening",
      "Security-focused infrastructure design",
    ],
    icon: Network,
  },
  {
    number: "07",
    title: "Security Intelligence",
    status: "Long-term Direction",
    statusType: "planned",
    description:
      "We believe security becomes more effective when information is connected. Security intelligence represents our longer-term direction towards bringing relevant signals, context and insights together across digital environments.",
    capabilities: [
      "Connected security visibility",
      "Contextual security insights",
      "Cross-environment intelligence",
      "Decision-support capabilities",
    ],
    icon: ShieldEllipsis,
  },
];

function Header() {
  return (
    <header className="solutions-header">
      <div className="solutions-container solutions-header-inner">
        <Link href="/" className="solutions-brand" aria-label="Vorqara Technologies home">
          <Image
            src="/brand/vorqara-logo-horizontal-dark.svg"
            alt="Vorqara Technologies"
            className="vorqara-logo-image"
            width={470} height={108}
          />
        </Link>

        <nav className="solutions-desktop-nav">
          <Link href="/about">About</Link>
          <Link href="/ecosystem">Ecosystem</Link>
          <Link href="/solutions" className="active">Solutions</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="solutions-header-cta">
          Talk to us <ArrowUpRight size={15} />
        </Link>

        <MobileMenu />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="solutions-footer">
      <div className="solutions-container">
        <div className="solutions-footer-top">
          <div>
            <Link href="/" className="solutions-brand" aria-label="Vorqara Technologies home">
          <Image
            src="/brand/vorqara-logo-horizontal-dark.svg"
            alt="Vorqara Technologies"
            className="vorqara-logo-image"
            width={470} height={108}
          />
        </Link>
            <p>
              Engineering a more secure digital future through connected
              cybersecurity technologies.
            </p>
          </div>

          <div className="solutions-footer-links">
            <div>
              <span className="solutions-footer-label">Explore</span>
              <Link href="/about">About us</Link>
              <Link href="/ecosystem">Our ecosystem</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/endpoint">Vorqara Endpoint</Link>
            </div>
            <div>
              <span className="solutions-footer-label">Connect</span>
              <a href="mailto:info@vorqara.com">General enquiries</a>
              <a href="mailto:partnerships@vorqara.com">Partnerships</a>
              <a href="mailto:support@vorqara.com">Product support</a>
            </div>
          </div>
        </div>

        <div className="solutions-footer-bottom">
          <span>© 2026 Vorqara Technologies. All rights reserved.</span>
          <span>Security and infrastructure, connected.</span>
        </div>
      </div>
    </footer>
  );
}

export default function SolutionsPage() {
  return (
    <main className="solutions-page">
      <Header />

      <section className="solutions-hero">
        <div className="solutions-container">
          <div className="solutions-eyebrow">
            <span className="solutions-eyebrow-line" />
            WHAT WE DO
          </div>

          <h1>
            Security challenges.
            <br />
            <span>Connected solutions.</span>
          </h1>

          <p className="solutions-hero-description">
            From endpoint protection to cloud and infrastructure security,
            Vorqara is building technology to help organisations protect,
            manage and strengthen their digital environments.
          </p>

          <div className="solutions-hero-actions">
            <Link href="/endpoint" className="solutions-primary-button">
              Explore our first product <ArrowUpRight size={17} />
            </Link>
            <Link href="/ecosystem" className="solutions-secondary-button">
              Discover Vorqara One <ArrowRight size={16} />
            </Link>
          </div>

          <div className="solutions-hero-note">
            <span className="solutions-note-dot" />
            African-founded. Building with a global outlook.
          </div>
        </div>

        <div className="solutions-hero-decoration">
          <div className="solutions-orbit solutions-orbit-one" />
          <div className="solutions-orbit solutions-orbit-two" />
          <div className="solutions-orbit-core">
            <ShieldCheck size={48} strokeWidth={1.2} />
          </div>
          <div className="solutions-orbit-node node-one" />
          <div className="solutions-orbit-node node-two" />
          <div className="solutions-orbit-node node-three" />
        </div>
      </section>

      <section className="solutions-intro">
        <div className="solutions-container solutions-intro-grid">
          <div>
            <span className="solutions-section-label">OUR APPROACH</span>
            <h2>
              Different layers of security.
              <br />
              <span>One connected direction.</span>
            </h2>
          </div>
          <div className="solutions-intro-copy">
            <p>
              Digital environments do not operate in isolation. Devices,
              identities, applications, cloud platforms and infrastructure
              all contribute to an organisation&apos;s security posture.
            </p>
            <p>
              Our approach is to develop focused technologies and solutions
              that address these areas while working towards a more connected
              security ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="solutions-list-section">
        <div className="solutions-container">
          <div className="solutions-section-heading">
            <div>
              <span className="solutions-section-label">SOLUTION AREAS</span>
              <h2>Where we are focused.</h2>
            </div>
            <p>
              Our work spans current product capabilities, developing
              initiatives and longer-term areas of technology development.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article className="solutions-card" key={solution.number}>
                  <div className="solutions-card-top">
                    <span className="solutions-card-number">
                      {solution.number}
                    </span>
                    <span className={`solutions-status ${solution.statusType}`}>
                      <span />
                      {solution.status}
                    </span>
                  </div>

                  <div className="solutions-card-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <h3>{solution.title}</h3>
                  <p className="solutions-card-description">
                    {solution.description}
                  </p>

                  <div className="solutions-capabilities">
                    {solution.capabilities.map((capability) => (
                      <div key={capability}>
                        <CheckCircle2 size={15} />
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>

                  {solution.href && (
                    <Link href={solution.href} className="solutions-card-link">
                      {solution.linkText} <ArrowUpRight size={16} />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="solutions-model-section">
        <div className="solutions-container">
          <div className="solutions-model-card">
            <div className="solutions-model-content">
              <span className="solutions-section-label">THE BIGGER PICTURE</span>
              <h2>
                Introducing <span>Vorqara One.</span>
              </h2>
              <p>
                Vorqara One represents our broader vision for a connected
                cybersecurity and infrastructure technology ecosystem.
                It is the direction guiding how our products and capabilities
                can work together over time.
              </p>
              <Link href="/ecosystem" className="solutions-primary-button">
                Explore the ecosystem <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="solutions-model-visual">
              <div className="solutions-model-center">
                <Layers3 size={32} />
                <span>VORQARA ONE</span>
              </div>
              <div className="solutions-model-ring ring-one" />
              <div className="solutions-model-ring ring-two" />
              <div className="solutions-model-label model-label-one">
                <ShieldCheck size={16} /> Endpoint
              </div>
              <div className="solutions-model-label model-label-two">
                <Fingerprint size={16} /> Identity
              </div>
              <div className="solutions-model-label model-label-three">
                <Cloud size={16} /> Cloud
              </div>
              <div className="solutions-model-label model-label-four">
                <Radar size={16} /> Intelligence
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-availability">
        <div className="solutions-container">
          <span className="solutions-section-label">A NOTE ON AVAILABILITY</span>
          <div className="solutions-availability-content">
            <Workflow size={27} />
            <div>
              <h3>Building with clarity and purpose.</h3>
              <p>
                Vorqara Endpoint is our first product and is currently in beta.
                Other areas on this page represent initiatives in development,
                planned capabilities or broader solution focus areas. They
                should not be interpreted as independently launched products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-cta-section">
        <div className="solutions-container">
          <div className="solutions-cta">
            <span className="solutions-section-label">LET&apos;S BUILD WHAT&apos;S NEXT</span>
            <h2>
              Have a security challenge
              <br />
              <span>worth solving?</span>
            </h2>
            <p>
              Talk to our team about Vorqara, our technology direction
              or potential opportunities to work together.
            </p>
            <div className="solutions-hero-actions">
              <a href="mailto:info@vorqara.com" className="solutions-primary-button">
                Get in touch <ArrowUpRight size={17} />
              </a>
              <a
                href="mailto:partnerships@vorqara.com"
                className="solutions-secondary-button"
              >
                Explore partnerships <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
