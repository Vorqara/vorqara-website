import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Cloud,
  Code2,
  Fingerprint,
  Radar,
  ShieldCheck,
  Network,
  Eye,
  Server,
  LockKeyhole,
} from "lucide-react";
import MobileMenu from "@/components/mobile-menu";

const ecosystemAreas = [
  {
    number: "01",
    name: "Vorqara Endpoint",
    category: "Endpoint security",
    status: "Beta",
    statusType: "beta",
    description:
      "Our first product initiative, focused on building clearer endpoint visibility and more effective security management.",
    icon: ShieldCheck,
    featured: true,
  },
  {
    number: "02",
    name: "Identity & Access",
    category: "Identity security",
    status: "In development",
    statusType: "development",
    description:
      "An evolving area of work focused on helping organisations manage identities, access and permissions more securely.",
    icon: Fingerprint,
  },
  {
    number: "03",
    name: "Cloud Security",
    category: "Cloud environments",
    status: "Planned",
    statusType: "planned",
    description:
      "A planned capability area addressing security visibility and protection across modern cloud environments.",
    icon: Cloud,
  },
  {
    number: "04",
    name: "Threat Detection",
    category: "Security operations",
    status: "Planned",
    statusType: "planned",
    description:
      "A planned direction for improving threat visibility, security monitoring and response capabilities.",
    icon: Radar,
  },
  {
    number: "05",
    name: "Application Security",
    category: "Software security",
    status: "Planned",
    statusType: "planned",
    description:
      "A planned capability area focused on helping teams build, assess and operate more secure applications.",
    icon: Code2,
  },
  {
    number: "06",
    name: "Security Intelligence",
    category: "Connected intelligence",
    status: "Planned",
    statusType: "planned",
    description:
      "A longer-term direction for bringing security insights and operational context together across the ecosystem.",
    icon: Activity,
  },
];

const principles = [
  {
    icon: Eye,
    title: "Greater visibility",
    description:
      "Make important security and technology activity easier to understand.",
  },
  {
    icon: Network,
    title: "Connected capabilities",
    description:
      "Build product areas that can work together as the ecosystem evolves.",
  },
  {
    icon: LockKeyhole,
    title: "Security by design",
    description:
      "Put security, trust and responsible engineering at the centre of development.",
  },
  {
    icon: Server,
    title: "Practical technology",
    description:
      "Focus on useful capabilities that address real organisational needs.",
  },
];

function Brand() {
  return (
    <Link href="/" className="ecosystem-brand" aria-label="Vorqara home">
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
    <header className="ecosystem-header">
      <div className="ecosystem-header-inner">
        <Brand />

        <nav className="ecosystem-desktop-nav" aria-label="Main navigation">
          <Link href="/about">About</Link>
          <Link href="/ecosystem" aria-current="page">
            Ecosystem
          </Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="ecosystem-header-cta">
          Let&apos;s talk <ArrowUpRight size={16} />
        </Link>

        <MobileMenu />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="ecosystem-footer">
      <div className="ecosystem-footer-inner">
        <div>
          <Brand />
          <p>Security and infrastructure, connected.</p>
        </div>

        <div className="ecosystem-footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/ecosystem">Ecosystem</Link>
          <Link href="/partners">Partners</Link>
          <a href="mailto:info@vorqara.com">Contact</a>
        </div>

        <span className="ecosystem-copyright">
          © 2026 Vorqara Technologies.
        </span>
      </div>
    </footer>
  );
}

export default function EcosystemPage() {
  return (
    <main className="ecosystem-page">
      <Header />

      <section className="ecosystem-hero">
        <div className="ecosystem-container">
          <div className="ecosystem-eyebrow">
            <span />
            THE VORQARA ECOSYSTEM
          </div>

          <h1>
            One vision.
            <br />
            <span>Connected security.</span>
          </h1>

          <p className="ecosystem-hero-copy">
            Vorqara One is our vision for a connected ecosystem of cybersecurity
            products and technology capabilitiesâ€”designed to help organisations
            protect, manage and strengthen their digital environments.
          </p>

          <div className="ecosystem-hero-actions">
            <a href="#ecosystem-portfolio" className="ecosystem-primary-button">
              Explore the ecosystem <ArrowRight size={17} />
            </a>
            <Link href="/contact" className="ecosystem-text-link">
              Talk to our team <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="ecosystem-hero-note">
            <span className="ecosystem-note-line" />
            <span>A connected vision, built progressively.</span>
          </div>
        </div>

        <div className="ecosystem-hero-art" aria-hidden="true">
          <div className="ecosystem-orbit ecosystem-orbit-one" />
          <div className="ecosystem-orbit ecosystem-orbit-two" />
          <div className="ecosystem-orbit ecosystem-orbit-three" />
          <div className="ecosystem-core">
            <Boxes size={36} strokeWidth={1.4} />
            <strong>VORQARA</strong>
            <small>ONE</small>
          </div>
          <div className="ecosystem-orbit-node node-one">
            <ShieldCheck size={19} />
          </div>
          <div className="ecosystem-orbit-node node-two">
            <Fingerprint size={19} />
          </div>
          <div className="ecosystem-orbit-node node-three">
            <Cloud size={19} />
          </div>
          <div className="ecosystem-orbit-node node-four">
            <Radar size={19} />
          </div>
          <div className="ecosystem-orbit-node node-five">
            <Code2 size={19} />
          </div>
          <div className="ecosystem-orbit-node node-six">
            <Activity size={19} />
          </div>
        </div>
      </section>

      <section className="ecosystem-intro-section">
        <div className="ecosystem-container ecosystem-intro-grid">
          <div>
            <span className="ecosystem-section-label">01 / THE IDEA</span>
            <h2>
              More than individual products.
              <br />
              <span>A connected approach.</span>
            </h2>
          </div>

          <div className="ecosystem-intro-copy">
            <p>
              Modern organisations rely on interconnected systems, users,
              applications, cloud platforms and devices. Protecting these
              environments requires more than isolated tools.
            </p>
            <p>
              Vorqara One represents our long-term approach: developing
              complementary cybersecurity products and technology capabilities
              that can work together as the ecosystem matures.
            </p>
            <p>
              Each initiative has its own purpose. Together, they contribute to
              a broader vision for more connected security and infrastructure
              management.
            </p>
          </div>
        </div>
      </section>

      <section
        className="ecosystem-portfolio-section"
        id="ecosystem-portfolio"
      >
        <div className="ecosystem-container">
          <div className="ecosystem-section-heading">
            <div>
              <span className="ecosystem-section-label">
                02 / PRODUCT PORTFOLIO
              </span>
              <h2>Different capabilities. <span>One direction.</span></h2>
            </div>
            <p>
              Explore the product areas that form the foundation of our
              ecosystem vision.
            </p>
          </div>

          <div className="ecosystem-product-grid">
            {ecosystemAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  className={`ecosystem-product-card ${
                    area.featured ? "ecosystem-product-featured" : ""
                  }`}
                  key={area.number}
                >
                  <div className="ecosystem-card-top">
                    <span className="ecosystem-card-number">
                      {area.number}
                    </span>
                    <span
                      className={`ecosystem-status ecosystem-status-${area.statusType}`}
                    >
                      <span />
                      {area.status}
                    </span>
                  </div>

                  <div className="ecosystem-product-icon">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <span className="ecosystem-product-category">
                    {area.category}
                  </span>
                  <h3>{area.name}</h3>
                  <p>{area.description}</p>

                  {area.featured && (
                    <Link
                      href="/ecosystem"
                      className="ecosystem-card-link"
                    >
                      Explore Vorqara Endpoint <ArrowUpRight size={16} />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>

          <p className="ecosystem-status-disclaimer">
            Product names and capability areas describe our current ecosystem
            direction. Development stages are indicative and may evolve.
            Capabilities marked as planned are not currently available products.
          </p>
        </div>
      </section>

      <section className="ecosystem-architecture-section">
        <div className="ecosystem-container ecosystem-architecture-grid">
          <div className="ecosystem-architecture-copy">
            <span className="ecosystem-section-label">
              03 / HOW IT COMES TOGETHER
            </span>
            <h2>
              Built as an ecosystem.
              <br />
              <span>Designed to evolve.</span>
            </h2>
            <p>
              Vorqara One is not a claim that every capability is already
              integrated or available. It is the architectural direction
              guiding how we think about product development: purposeful
              capabilities, shared principles and a consistent approach to
              security.
            </p>
            <p>
              We intend to build this vision in stagesâ€”starting with focused
              products, learning from real-world use and expanding the
              ecosystem responsibly.
            </p>
          </div>

          <div className="ecosystem-architecture-visual">
            <div className="ecosystem-architecture-core">
              <Boxes size={27} />
              <strong>VORQARA ONE</strong>
              <span>ECOSYSTEM VISION</span>
            </div>
            <div className="ecosystem-architecture-branches">
              <div><ShieldCheck size={17} /> Endpoint</div>
              <div><Fingerprint size={17} /> Identity</div>
              <div><Cloud size={17} /> Cloud</div>
              <div><Radar size={17} /> Detection</div>
              <div><Code2 size={17} /> Application</div>
              <div><Activity size={17} /> Intelligence</div>
            </div>
            <span className="ecosystem-architecture-caption">
              A developing portfolio of complementary capabilities
            </span>
          </div>
        </div>
      </section>

      <section className="ecosystem-principles-section">
        <div className="ecosystem-container">
          <div className="ecosystem-section-heading">
            <div>
              <span className="ecosystem-section-label">
                04 / OUR APPROACH
              </span>
              <h2>Principles behind <span>the vision.</span></h2>
            </div>
            <p>
              The ecosystem is guided by a consistent set of engineering and
              product principles.
            </p>
          </div>

          <div className="ecosystem-principles-grid">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article className="ecosystem-principle" key={principle.title}>
                  <Icon size={23} strokeWidth={1.7} />
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ecosystem-partnership-section">
        <div className="ecosystem-container ecosystem-partnership-panel">
          <div className="ecosystem-partnership-icon">
            <Network size={28} />
          </div>
          <span className="ecosystem-section-label">
            05 / BUILD WITH US
          </span>
          <h2>
            Help shape what
            <br />
            <span>comes next.</span>
          </h2>
          <p>
            We welcome conversations with technology providers, strategic
            partners, managed service providers and organisations interested
            in exploring the future of connected cybersecurity.
          </p>
          <a
            href="mailto:partnerships@vorqara.com"
            className="ecosystem-primary-button"
          >
            Explore partnerships <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}