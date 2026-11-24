import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Network, ShieldCheck } from "lucide-react";
import { PageFrame, PageIntro } from "@/components/site-shell";

export const metadata = pageMetadata(
  "Resources",
  "Explore Vorqara product information, endpoint beta scope and security principles.",
  "/resources",
);

const resources = [
  {
    icon: BookOpen,
    category: "Product overview",
    title: "Introducing Vorqara Endpoint",
    description:
      "Understand the product mission, endpoint foundations, intelligence direction and the questions Vorqara Endpoint is being designed to answer.",
    href: "/endpoint",
    link: "Read product overview",
  },
  {
    icon: ShieldCheck,
    category: "Beta programme",
    title: "What is in the Endpoint beta scope?",
    description:
      "Review the current development baseline, planned beta capabilities, essential remote operations and items explicitly outside the first release scope.",
    href: "/endpoint#beta-scope",
    link: "Review beta scope",
  },
  {
    icon: Network,
    category: "Architecture",
    title: "A multi-organisation model for MSPs",
    description:
      "Learn how independent customer organisations, explicit delegation and organisation-scoped permissions are intended to work together.",
    href: "/endpoint#multi-organisation",
    link: "Explore the model",
  },
];

export default function Resources() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="Resources"
        title={<>Product knowledge. <em>Clear technical context.</em></>}
        description="Explore the current product direction, beta scope and engineering principles behind Vorqara. We will expand this library as products and supporting documentation mature."
      />
      <section className="vq-section">
        <div className="vq-container">
          <div className="vq-grid-3">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <article className="vq-card" key={resource.title}>
                  <div className="vq-card-icon"><Icon size={21} /></div>
                  <small>{resource.category}</small>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <Link className="vq-button-secondary" href={resource.href} style={{ marginTop: 18 }}>
                    {resource.link} <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="vq-section vq-section-alt">
        <div className="vq-container">
          <div className="vq-callout">
            <div>
              <h2>Need more information?</h2>
              <p>Contact Vorqara to discuss the Endpoint development programme, product roadmap or a potential partnership.</p>
            </div>
            <Link className="vq-button-primary" href="/contact">Talk to Vorqara <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
