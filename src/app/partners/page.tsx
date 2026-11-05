import Image from "next/image";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Code2,
  Handshake,
  Network,
  Rocket,
  ShieldCheck,
  Workflow,
  Globe2,
  Lightbulb,
  Users,
  CheckCircle2,
  Mail,
} from "lucide-react";
import MobileMenu from "@/components/mobile-menu";

const partnerTypes = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Technology Partners",
    description:
      "We welcome relationships with cybersecurity vendors, technology providers and infrastructure companies whose expertise and products complement our direction.",
    opportunities: [
      "Technology collaboration",
      "Product and platform alignment",
      "Security technology innovation",
      "Complementary solutions",
    ],
  },
  {
    number: "02",
    icon: Building2,
    title: "Channel & Reseller Partners",
    description:
      "Work with us to introduce Vorqara technologies to organisations and markets that can benefit from stronger cybersecurity and infrastructure capabilities.",
    opportunities: [
      "Solution distribution",
      "Market development",
      "Reseller opportunities",
      "Customer engagement",
    ],
  },
  {
    number: "03",
    icon: Network,
    title: "Integration Partners",
    description:
      "We are interested in working with technology teams building complementary platforms, services and integrations that can contribute to a more connected security environment.",
    opportunities: [
      "Product integrations",
      "API and platform collaboration",
      "Interoperability initiatives",
      "Joint technical development",
    ],
  },
  {
    number: "04",
    icon: Handshake,
    title: "Strategic Partners",
    description:
      "Build relationships around shared ambitions, market opportunities and the development of cybersecurity technologies with long-term potential.",
    opportunities: [
      "Strategic collaboration",
      "Market expansion",
      "Business development",
      "Long-term technology initiatives",
    ],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Startup Ecosystem Partners",
    description:
      "We value the role of accelerators, incubators, innovation communities and startup support organisations in helping technology companies grow.",
    opportunities: [
      "Accelerator programmes",
      "Startup ecosystem access",
      "Mentorship and guidance",
      "Innovation programmes",
    ],
  },
  {
    number: "06",
    icon: Lightbulb,
    title: "Research & Innovation Partners",
    description:
      "Collaborate with us on ideas, technical exploration and emerging approaches to cybersecurity, infrastructure and digital trust.",
    opportunities: [
      "Research collaboration",
      "Technical experimentation",
      "Knowledge exchange",
      "Emerging technology exploration",
    ],
  },
];

function Header() {
  return (
    <header className="partners-header">
      <div className="partners-container partners-header-inner">
        <Link href="/" className="partners-brand" aria-label="Vorqara Technologies home">
          <Image
            src="/brand/vorqara-logo-horizontal-dark.svg"
            alt="Vorqara Technologies"
            className="vorqara-logo-image"
            width={470} height={108}
          />
        </Link>

        <nav className="partners-desktop-nav">
          <Link href="/about">About</Link>
          <Link href="/ecosystem">Ecosystem</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/partners" className="active">Partners</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="mailto:partnerships@vorqara.com" className="partners-header-cta">
          Partner with us <ArrowUpRight size={15} />
        </Link>

        <MobileMenu />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="partners-footer">
      <div className="partners-container">
        <div className="partners-footer-top">
          <div className="partners-footer-brand">
            <Link href="/" className="partners-brand" aria-label="Vorqara Technologies home">
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

          <div className="partners-footer-links">
            <div>
              <span>Explore</span>
              <Link href="/about">About us</Link>
              <Link href="/ecosystem">Our ecosystem</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/endpoint">Vorqara Endpoint</Link>
            </div>
            <div>
              <span>Connect</span>
              <Link href="/partners">Partnerships</Link>
              <Link href="/contact">Contact</Link>
              <a href="mailto:info@vorqara.com">General enquiries</a>
              <a href="mailto:support@vorqara.com">Product support</a>
            </div>
          </div>
        </div>

        <div className="partners-footer-bottom">
          <span>© 2026 Vorqara Technologies. All rights reserved.</span>
          <span>Security and infrastructure, connected.</span>
        </div>
      </div>
    </footer>
  );
}

export default function PartnersPage() {
  return (
    <main className="partners-page">
      <Header />

      <section className="partners-hero">
        <div className="partners-container partners-hero-inner">
          <div className="partners-hero-copy">
            <div className="partners-eyebrow">
              <span />
              BUILDING TOGETHER
            </div>

            <h1>
              Better technology.
              <br />
              <span>Stronger partnerships.</span>
            </h1>

            <p>
              We believe meaningful progress happens through collaboration.
              Vorqara welcomes partnerships with organisations, innovators
              and technology leaders who share our ambition for a more
              secure digital future.
            </p>

            <div className="partners-hero-actions">
              <a href="#partnership-types" className="partners-primary-button">
                Explore opportunities <ArrowRight size={17} />
              </a>
              <a href="mailto:partnerships@vorqara.com" className="partners-secondary-button">
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="partners-hero-note">
              <Globe2 size={16} />
              African-founded. Building with a global outlook.
            </div>
          </div>

          <div className="partners-hero-visual">
            <div className="partners-visual-grid" />
            <div className="partners-visual-ring ring-outer" />
            <div className="partners-visual-ring ring-inner" />

            <div className="partners-visual-center">
              <Handshake size={42} strokeWidth={1.3} />
              <span>COLLABORATE</span>
            </div>

            <div className="partners-visual-node visual-node-one">
              <ShieldCheck size={20} />
              <span>Technology</span>
            </div>

            <div className="partners-visual-node visual-node-two">
              <Building2 size={20} />
              <span>Business</span>
            </div>

            <div className="partners-visual-node visual-node-three">
              <Code2 size={20} />
              <span>Innovation</span>
            </div>

            <div className="partners-visual-node visual-node-four">
              <Users size={20} />
              <span>Community</span>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-intro">
        <div className="partners-container partners-intro-grid">
          <div>
            <span className="partners-section-label">WHY PARTNER WITH VORQARA</span>
            <h2>
              Collaboration with
              <br />
              <span>purpose.</span>
            </h2>
          </div>

          <div className="partners-intro-copy">
            <p>
              Vorqara is building cybersecurity products and technology
              solutions with a long-term vision. We recognise that developing
              meaningful technology requires more than good ideas. It takes
              expertise, shared ambition and strong relationships.
            </p>
            <p>
              We are interested in partnerships that create practical value,
              expand opportunities and contribute to a stronger technology
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="partners-types" id="partnership-types">
        <div className="partners-container">
          <div className="partners-section-heading">
            <div>
              <span className="partners-section-label">OPPORTUNITIES</span>
              <h2>Ways we can work together.</h2>
            </div>
            <p>
              Different strengths. Shared ambition. Opportunities to
              build something meaningful.
            </p>
          </div>

          <div className="partners-grid">
            {partnerTypes.map((partner) => {
              const Icon = partner.icon;

              return (
                <article className="partners-card" key={partner.number}>
                  <div className="partners-card-top">
                    <span>{partner.number}</span>
                    <Icon size={24} />
                  </div>

                  <h3>{partner.title}</h3>
                  <p>{partner.description}</p>

                  <div className="partners-card-opportunities">
                    {partner.opportunities.map((opportunity) => (
                      <div key={opportunity}>
                        <CheckCircle2 size={15} />
                        <span>{opportunity}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`mailto:partnerships@vorqara.com?subject=${encodeURIComponent(
                      `Partnership enquiry - ${partner.title}`
                    )}`}
                    className="partners-card-link"
                  >
                    Discuss this opportunity <ArrowUpRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="partners-principles">
        <div className="partners-container">
          <div className="partners-principles-heading">
            <span className="partners-section-label">OUR PARTNERSHIP PRINCIPLES</span>
            <h2>Relationships built on the right foundations.</h2>
          </div>

          <div className="partners-principles-grid">
            <div>
              <span>01</span>
              <h3>Shared ambition</h3>
              <p>
                We look for alignment in objectives, values and the
                opportunities we want to create.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Mutual value</h3>
              <p>
                Strong partnerships should create meaningful benefits
                for everyone involved.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Open collaboration</h3>
              <p>
                We value clear communication, complementary expertise
                and constructive working relationships.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Long-term thinking</h3>
              <p>
                We want to build relationships that can evolve as
                technologies, markets and opportunities develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-ecosystem">
        <div className="partners-container">
          <div className="partners-ecosystem-card">
            <div className="partners-ecosystem-copy">
              <span className="partners-section-label">A SHARED TECHNOLOGY FUTURE</span>
              <h2>
                Connected by a
                <br />
                <span>bigger vision.</span>
              </h2>
              <p>
                Vorqara One represents our long-term vision for a connected
                cybersecurity and infrastructure technology ecosystem.
                Partnerships can play an important role in bringing that
                vision closer to reality.
              </p>
              <Link href="/ecosystem" className="partners-primary-button">
                Explore Vorqara One <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="partners-ecosystem-graphic">
              <div className="partners-ecosystem-core">
                <LayersIcon />
                <span>VORQARA ONE</span>
              </div>
              <div className="partners-ecosystem-circle circle-one" />
              <div className="partners-ecosystem-circle circle-two" />
              <div className="partners-ecosystem-circle circle-three" />
            </div>
          </div>
        </div>
      </section>

      <section className="partners-cta-section">
        <div className="partners-container">
          <div className="partners-cta">
            <div className="partners-cta-icon">
              <Mail size={25} />
            </div>

            <span className="partners-section-label">LET&apos;S START A CONVERSATION</span>

            <h2>
              Have an idea for
              <br />
              <span>working together?</span>
            </h2>

            <p>
              Tell us about your organisation, what you are building
              and how you think we could create value together.
            </p>

            <a href="mailto:partnerships@vorqara.com?subject=Vorqara%20Partnership%20Enquiry" className="partners-primary-button">
              Contact our partnerships team <ArrowUpRight size={17} />
            </a>

            <span className="partners-email">
              partnerships@vorqara.com
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function LayersIcon() {
  return <Workflow size={34} strokeWidth={1.4} />;
}
