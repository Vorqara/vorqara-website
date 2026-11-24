import type { Metadata } from "next";
const site="https://vorqara.com";
export function pageMetadata(title:string,description:string,path:string):Metadata{
  const fullTitle=`${title} | Vorqara Technologies`;
  return {title,description,alternates:{canonical:`${site}${path}`},openGraph:{title:fullTitle,description,url:`${site}${path}`,siteName:"Vorqara Technologies",type:"website",images:[{url:"/brand/social/vorqara-social-avatar-dark.png",width:1080,height:1080,alt:"Vorqara Technologies"}]},twitter:{card:"summary_large_image",title:fullTitle,description,images:["/brand/social/x-header-1500x500.png"]}};
}
