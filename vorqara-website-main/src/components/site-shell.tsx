import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export function PageFrame({children}:{children:ReactNode}){return <><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></>}
export function PageIntro({eyebrow,title,description}:{eyebrow:string;title:ReactNode;description:string}){return <section className="vq-page-intro"><div className="vq-container"><div className="vq-eyebrow"><span/>{eyebrow}</div><h1>{title}</h1><p>{description}</p></div></section>}
