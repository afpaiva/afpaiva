import * as stack from "./icons"

export const projects: ProjectsTypes = {
  PDF_READER: {
    title: "AI - PDF Resume Reader",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    videoSrc: "/assets/wingsquest.mp4",
    iconsTitle: "From my toolbox:",
    hasDemo: true,
    hasRepo: true,
    stackIcons: [
      stack.iconOpenAI,
      stack.iconReact,
      stack.iconNode,
      stack.iconExpress
    ],
    layoutPosition: "left",
  },
  VIZSCOPE: {
    title: "VizScope - Archviz Freelancers Platform",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    imageSrc: "/assets/8.jpg",
    iconsTitle: "From my toolbox:",
    hasDemo: true,
    hasRepo: true,
    stackIcons: [],
    layoutPosition: "right",
  },
}
