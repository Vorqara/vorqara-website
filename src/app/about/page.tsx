import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Eye,
  Globe2,
  Layers3,
  Lightbulb,
  Network,
  ShieldCheck,
  Target,
  Workflow,
  Zap,
} from "lucide-react";
import MobileMenu from "@/components/mobile-menu";

const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Security by design",
    description:
      "Security is a foundation, not an afterthought. We aim to consider trust, resilience and protection throughout the technology development process.",
  },
  {
    number: "02",
    icon: Network,
    title: "Connected thinking",
    description:
      "Digital environments are interconnected. We think beyond isolated tools and look for ways technology capabilities can work together.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Practical innovation",
    description:
      "Innovation should solve meaningful problems. We focus on useful ideas, thoughtful engineering and technology with a clear purpose.",
  },
  {
    number: "04",
    icon: Eye,
    title: "Clarity and visibility",
    description:
      "Organisations need to understand their digital environments. We value transparency, useful insight and technology that makes complexity easier to manage.",
  },
  {
    number: "05",
    icon: Workflow,
    title: "Long-term engineering",
    description:
      "We believe meaningful technology is built with care, continuous learning and a commitment to improving over time.",
  },
];

function Brand() {
  return (
    <Link href="/" className="about-brand" aria-label="Vorqara home">
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
    <header className="about-header">
      <div className="about-header-inner">
        <Brand />

        <nav className="about-desktop-nav" aria-label="Main navigation">
          <Link href="/about" aria-current="page">About</Link>
          <Link href="/ecosystem">Ecosystem</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="about-header-cta">
          Let&apos;s talk <ArrowUpRight size={16} />
        </Link>

        <MobileMenu />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="about-footer">
      <div className="about-footer-inner">
        <div>
          <Brand />
          <p>Security and infrastructure, connected.</p>
        </div>

        <div className="about-footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/ecosystem">Ecosystem</Link>
          <Link href="/partners">Partners</Link>
          <a href="mailto:info@vorqara.com">Contact</a>
        </div>

        <span className="about-copyright">
          © 2026 Vorqara Technologies.
        </span>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <Header />

      <section className="about-hero">
        <div className="about-container about-hero-inner">
          <div className="about-eyebrow">
            <span />
            ABOUT VORQARA TECHNOLOGIES
          </div>

          <h1>
            Building technology
            <br />
            for a <span>more secure</span>
            <br />
            digital future.
          </h1>

          <p>
            We are an African-founded cybersecurity technology company
            building products and developing technology solutions to help
            organisations protect, manage and strengthen their digital
            environments.
          </p>

          <div className="about-hero-actions">
            <Link href="/ecosystem" className="about-primary-button">
              Explore our ecosystem <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="about-text-link">
              Get in touch <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="about-hero-bottom">
            <span className="about-hero-line" />
            <span>African-founded. Building with a global outlook.</span>
          </div>
        </div>

        <div className="about-hero-visual" aria-hidden="true">
          <div className="about-visual-grid" />
          <div className="about-visual-ring ring-one" />
          <div className="about-visual-ring ring-two" />
          <div className="about-visual-ring ring-three" />
          <div className="about-visual-center">
            <ShieldCheck size={43} strokeWidth={1.3} />
            <strong>VORQARA</strong>
            <span>TECHNOLOGIES</span>
          </div>
          <div className="about-visual-label label-top">SECURITY</div>
          <div className="about-visual-label label-right">INNOVATION</div>
          <div className="about-visual-label label-bottom">ENGINEERING</div>
          <div className="about-visual-label label-left">RESILIENCE</div>
        </div>
      </section>

      <section className="about-story-section">
        <div className="about-container about-story-grid">
          <div className="about-story-heading">
            <span className="about-section-label">01 / OUR STORY</span>
            <h2>
              Technology is changing.
              <br />
              <span>Security must evolve with it.</span>
            </h2>
          </div>

          <div className="about-story-copy">
            <p>
              Organisations are building their futures on increasingly
              connected digital environments. Their operations depend on
              endpoints, identities, applications, cloud infrastructure,
              networks and the data moving between them.
            </p>
            <p>
              As these environments evolve, so do the challenges of protecting
              and managing them. We believe organisations need technology
              that is purposeful, adaptable and designed with security at its
              core.
            </p>
            <p>
              Vorqara Technologies was established around that belief. We are
              building a cybersecurity technology company focused on
              developing proprietary products and technology solutions for
              the evolving needs of modern organisations.
            </p>
            <p>
              Our journey is being built progressively: starting with focused
              product initiatives, learning through development and testing,
              and working towards a broader connected ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="about-identity-section">
        <div className="about-container">
          <div className="about-identity-heading">
            <span className="about-section-label">02 / WHO WE ARE</span>
            <h2>
              Rooted in Africa.
              <br />
              <span>Built for a connected world.</span>
            </h2>
            <p>
              Our perspective is shaped by the opportunity to build meaningful
              technology from Africa for organisations and markets around the
              world.
            </p>
          </div>

          <div className="about-identity-cards">
            <article className="about-identity-card">
              <div className="about-identity-icon">
                <Globe2 size={25} />
              </div>
              <span>OUR FOUNDATION</span>
              <h3>African-founded</h3>
              <p>
                We are building from an African foundation, with an ambition
                to contribute to the development of globally relevant
                cybersecurity technology.
              </p>
            </article>

            <article className="about-identity-card">
              <div className="about-identity-icon">
                <Layers3 size={25} />
              </div>
              <span>OUR FOCUS</span>
              <h3>Product-led thinking</h3>
              <p>
                We are focused on developing proprietary cybersecurity
                products while building technology solutions that address
                practical organisational needs.
              </p>
            </article>

            <article className="about-identity-card">
              <div className="about-identity-icon">
                <Compass size={25} />
              </div>
              <span>OUR OUTLOOK</span>
              <h3>Global ambition</h3>
              <p>
                We aspire to build for a world where organisations need
                dependable, adaptable and connected security technologies.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-purpose-section">
        <div className="about-container">
          <div className="about-purpose-heading">
            <span className="about-section-label">03 / OUR PURPOSE</span>
            <h2>What guides <span>our direction.</span></h2>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card">
              <div className="about-purpose-number">01</div>
              <div className="about-purpose-icon">
                <Eye size={24} />
              </div>
              <span>OUR VISION</span>
              <h3>
                To shape a more secure digital future through connected,
                intelligent and accessible cybersecurity technologies.
              </h3>
            </article>

            <article className="about-purpose-card about-purpose-mission">
              <div className="about-purpose-number">02</div>
              <div className="about-purpose-icon">
                <Target size={24} />
              </div>
              <span>OUR MISSION</span>
              <h3>
                To develop innovative cybersecurity products and technology
                solutions that empower organisations to protect, manage and
                strengthen their digital environments.
              </h3>
            </article>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-container">
          <div className="about-section-heading">
            <div>
              <span className="about-section-label">04 / OUR VALUES</span>
              <h2>The principles behind <span>our work.</span></h2>
            </div>
            <p>
              These principles shape how we approach product development,
              engineering, collaboration and the relationships we build.
            </p>
          </div>

          <div className="about-values-list">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-row" key={value.number}>
                  <span className="about-value-number">{value.number}</span>
                  <div className="about-value-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <ArrowUpRight className="about-value-arrow" size={19} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-approach-section">
        <div className="about-container about-approach-grid">
          <div>
            <span className="about-section-label">05 / OUR APPROACH</span>
            <h2>
              Build with purpose.
              <br />
              <span>Grow with intention.</span>
            </h2>
          </div>

          <div className="about-approach-copy">
            <p>
              We approach cybersecurity as an evolving technology discipline.
              Our work brings together product thinking, engineering,
              security knowledge and an understanding of how organisations
              operate.
            </p>

            <div className="about-approach-points">
              <div>
                <span>01</span>
                <p>
                  <strong>Develop proprietary products</strong>
                  Build focused technologies around real security and
                  infrastructure challenges.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Create practical solutions</strong>
                  Apply technology and engineering to help address
                  organisational needs.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Build meaningful partnerships</strong>
                  Work with technology providers, organisations and
                  collaborators to expand what can be achieved.
                </p>
              </div>
              <div>
                <span>04</span>
                <p>
                  <strong>Improve continuously</strong>
                  Learn from development, testing and real-world feedback as
                  our capabilities mature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-future-section">
        <div className="about-container about-future-panel">
          <div className="about-future-icon">
            <Zap size={27} />
          </div>
          <span className="about-section-label">06 / THE ROAD AHEAD</span>
          <h2>
            The future of security
            <br />
            is <span>connected.</span>
          </h2>
          <p>
            Our ambition is to build a connected cybersecurity and
            infrastructure technology ecosystemâ€”one that grows through
            purposeful products, responsible engineering and strong
            partnerships.
          </p>
          <div className="about-future-actions">
            <Link href="/ecosystem" className="about-primary-button">
              Discover Vorqara One <ArrowRight size={17} />
            </Link>
            <a
              href="mailto:partnerships@vorqara.com"
              className="about-text-link"
            >
              Partner with us <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}