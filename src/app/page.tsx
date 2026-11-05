import Image from "next/image";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Fingerprint,
  LockKeyhole,
  Mail,
  Network,
  ScanSearch,
  ShieldCheck,
  Zap,
  Eye,
  Building2,
  Handshake,
  Layers3,
  Server,
  Users,
} from "lucide-react";
import MobileMenu from "@/components/mobile-menu";

const ecosystemAreas = [
  {
    name: "Endpoint Security",
    description:
      "Developing technologies to improve endpoint visibility, security and management.",
    icon: Activity,
    status: "Beta",
    featured: true,
  },
  {
    name: "Identity & Access",
    description:
      "Exploring ways to strengthen digital identities, authentication and access control.",
    icon: Fingerprint,
    status: "In development",
  },
  {
    name: "Cloud Security",
    description:
      "Building towards security capabilities for modern cloud environments and infrastructure.",
    icon: Cloud,
    status: "Planned",
  },
  {
    name: "Threat Detection",
    description:
      "Exploring technologies for security visibility, threat detection and response.",
    icon: ScanSearch,
    status: "Planned",
  },
  {
    name: "Application Security",
    description:
      "A focus area for technologies that support more secure software and applications.",
    icon: Code2,
    status: "Planned",
  },
  {
    name: "Security Intelligence",
    description:
      "Researching connected approaches to security insights and operational awareness.",
    icon: Eye,
    status: "Planned",
  },
];

const solutionAreas = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Technology initiatives focused on helping organisations strengthen their security posture.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description:
      "A connected approach to protecting the systems and environments organisations depend on.",
  },
  {
    icon: Network,
    title: "Security Operations",
    description:
      "Exploring ways to improve security visibility, operational awareness and response.",
  },
  {
    icon: LockKeyhole,
    title: "Identity & Access",
    description:
      "Developing a broader perspective on identity, access and privilege security.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Security by design",
    description:
      "Security should be considered from the beginning, not added as an afterthought.",
  },
  {
    icon: Network,
    title: "Connected thinking",
    description:
      "We approach security and infrastructure as connected parts of the same digital environment.",
  },
  {
    icon: Zap,
    title: "Practical innovation",
    description:
      "We focus on technology that addresses real organisational challenges.",
  },
  {
    icon: Eye,
    title: "Clarity and visibility",
    description:
      "Better security decisions begin with a clearer understanding of digital environments.",
  },
];

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Vorqara Technologies home">
      <Image
        src="/brand/vorqara-logo-horizontal-dark.svg"
        alt="Vorqara Technologies"
        className="vorqara-logo-image"
        width={470} height={108}
      />
    </Link>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/about">About</Link>
          <Link href="/ecosystem">Ecosystem</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="header-cta">
          Let&apos;s talk <ArrowUpRight size={15} />
        </Link>

        <MobileMenu />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Cybersecurity technology, built for what&apos;s next
          </div>

          <h1>
            Engineering a more secure{" "}
            <span className="gradient-text">digital future.</span>
          </h1>

          <p className="hero-description">
            Vorqara Technologies develops cybersecurity products and
            technology solutions to help organisations protect, manage and
            strengthen their digital environments.
          </p>

          <div className="hero-actions">
            <Link href="/ecosystem" className="button-primary">
              Explore our ecosystem <ArrowUpRight size={16} />
            </Link>
            <Link href="/about" className="button-secondary">
              Discover Vorqara <ArrowRight size={16} />
            </Link>
          </div>

          <p className="hero-note">
            African-founded. Building with a global outlook.
          </p>
        </div>

        <div className="hero-visual" aria-label="Connected security concept">
          <div className="orbit" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="orbit-center">
            <ShieldCheck size={66} strokeWidth={1.2} />
          </div>

          <div className="float-card one">
            <span className="float-icon">
              <LockKeyhole size={17} />
            </span>
            <span>
              <strong>Security</strong>
              <span>Built with intention</span>
            </span>
          </div>

          <div className="float-card two">
            <span className="float-icon">
              <Network size={17} />
            </span>
            <span>
              <strong>Connected</strong>
              <span>Across environments</span>
            </span>
          </div>

          <div className="float-card three">
            <span className="float-icon">
              <Activity size={17} />
            </span>
            <span>
              <strong>Intelligent</strong>
              <span>Designed for what&apos;s next</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrinciplesStrip() {
  const items = [
    { icon: ShieldCheck, label: "Security-led thinking" },
    { icon: Layers3, label: "Connected technologies" },
    { icon: Building2, label: "Enterprise-minded" },
  ];

  return (
    <section className="trust-strip">
      <div className="container trust-inner">
        <span className="trust-label">What guides us</span>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div className="trust-item" key={item.label}>
              <Icon size={16} />
              {item.label}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="section-kicker">Who we are</span>
          <h2>
            A technology company focused on the future of digital security.
          </h2>
          <p>
            Vorqara Technologies is an African-founded cybersecurity
            technology company building proprietary products and developing
            technology solutions for the evolving needs of modern
            organisations.
          </p>
          <p>
            Our ambition is to create connected security technologies that
            address real-world challenges across endpoints, identities, cloud
            environments, applications and security operations.
          </p>
          <Link href="/ecosystem" className="button-secondary">
            Explore our direction <ArrowRight size={15} />
          </Link>
        </div>

        <div className="value-list">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article className="value-card" key={value.title}>
                <Icon size={22} />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="section ecosystem-section" id="ecosystem">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">The Vorqara ecosystem</span>
          <h2>
            One vision. <span className="gradient-text">Connected security technologies.</span>
          </h2>
          <p>
            Vorqara One represents our broader ecosystem vision: bringing
            together a growing portfolio of cybersecurity products and
            technology initiatives under one connected direction.
          </p>
        </div>

        <div className="ecosystem-intro">
          <div className="ecosystem-symbol">
            <Layers3 size={30} />
          </div>
          <div>
            <span className="ecosystem-label">THE ECOSYSTEM CONCEPT</span>
            <h3>Introducing Vorqara One</h3>
            <p>
              A unified vision for a portfolio of security technologies.
              Individual products and capabilities will develop over time,
              guided by practical needs and a connected approach to security.
            </p>
          </div>
        </div>

        <div className="product-grid ecosystem-grid">
          {ecosystemAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article
                className={`product-card ${area.featured ? "featured-product-card" : ""}`}
                key={area.name}
              >
                <div className="product-icon">
                  <Icon size={22} />
                </div>
                <h3>{area.name}</h3>
                <p>{area.description}</p>
                <span
                  className={`product-status ${area.status === "Beta" ? "" : "future"}`}
                >
                  {area.status}
                </span>
              </article>
            );
          })}
        </div>

        <p className="ecosystem-disclaimer">
          Product areas are at different stages of development. Only products
          explicitly identified as beta or available should be considered
          active offerings.
        </p>
      </div>
    </section>
  );
}

function Endpoint() {
  return (
    <section className="endpoint-section" id="endpoint">
      <div className="container section endpoint-grid">
        <div className="endpoint-copy">
          <span className="section-kicker">The first product in our portfolio</span>
          <h2>
            Meet <span className="gradient-text">Vorqara Endpoint.</span>
          </h2>
          <p>
            Vorqara Endpoint is our first product initiative, focused on
            developing a more connected approach to endpoint security.
            Currently in beta, it marks an important step in the evolution of
            the Vorqara ecosystem.
          </p>

          <div className="endpoint-points">
            <div className="endpoint-point">
              <Check size={17} /> Currently in beta
            </div>
            <div className="endpoint-point">
              <Check size={17} /> Early product development
            </div>
            <div className="endpoint-point">
              <Check size={17} /> Part of the wider Vorqara vision
            </div>
          </div>

          <Link href="/contact" className="button-primary">
            Enquire about Endpoint <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="endpoint-visual">
          <div className="endpoint-panel">
            <div className="panel-top">
              <span className="panel-title">VORQARA / ENDPOINT</span>
              <span className="panel-live">BETA</span>
            </div>

            <div className="endpoint-panel-main">
              <div className="endpoint-panel-icon">
                <Activity size={30} />
              </div>
              <span className="endpoint-panel-caption">
                FIRST PRODUCT INITIATIVE
              </span>
              <strong>Endpoint Security</strong>
              <p>
                Building towards clearer endpoint visibility and security
                management.
              </p>
            </div>

            <div className="endpoint-panel-footer">
              <span><span className="status-indicator" /> Product status</span>
              <strong>Beta development</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="section solutions-section" id="solutions">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Our areas of focus</span>
          <h2>Technology shaped around real security challenges.</h2>
          <p>
            Our work is guided by the security and infrastructure challenges
            organisations face. These focus areas inform our product
            development and our approach to technology solutions.
          </p>
        </div>

        <div className="solution-grid">
          {solutionAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="solution-card" key={area.title}>
                <div className="product-icon">
                  <Icon size={22} />
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="section partners-section" id="partners">
      <div className="container">
        <div className="partners-panel">
          <div className="partners-copy">
            <span className="section-kicker">Work with Vorqara</span>
            <h2>Building better security, together.</h2>
            <p>
              We believe meaningful technology grows through collaboration.
              We welcome conversations with technology providers, managed
              service providers, channel partners and organisations interested
              in exploring strategic opportunities.
            </p>
            <Link href="mailto:partnerships@vorqara.com" className="button-primary">
              Explore partnerships <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="partner-opportunities">
            <div>
              <Handshake size={21} />
              <span>Technology partnerships</span>
            </div>
            <div>
              <Users size={21} />
              <span>MSP and channel relationships</span>
            </div>
            <div>
              <Network size={21} />
              <span>Strategic collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-panel">
          <span className="section-kicker">Start a conversation</span>
          <h2>Let&apos;s build a more secure digital future.</h2>
          <p>
            Whether you&apos;re interested in our technology, exploring a
            partnership or looking to connect with our team, we&apos;d like to hear
            from you.
          </p>
          <Link href="mailto:info@vorqara.com" className="button-primary">
            <Mail size={16} /> Contact Vorqara <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand />
            <p className="footer-description">
              Building cybersecurity products and technology solutions for a
              more secure, connected digital world.
            </p>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <Link href="/about">About Vorqara</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/partners">Partnerships</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h4>Ecosystem</h4>
            <Link href="/ecosystem">Vorqara One</Link>
            <Link href="/endpoint">Vorqara Endpoint</Link>
            <Link href="/ecosystem">Product areas</Link>
          </div>

          <div className="footer-column">
            <h4>Get in touch</h4>
            <a href="mailto:info@vorqara.com">General enquiries</a>
            <a href="mailto:support@vorqara.com">Product support</a>
            <a href="mailto:partnerships@vorqara.com">Partnerships</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Vorqara Technologies. All rights
            reserved.
          </span>
          <span>Security and infrastructure, connected.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrinciplesStrip />
        <About />
        <Ecosystem />
        <Endpoint />
        <Solutions />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
