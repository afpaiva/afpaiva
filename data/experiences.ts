import * as stack from "./icons"

export const experiences: ExperiencesTypes = {
  PROJECT_MANAGER: {
    type: "Corporate Experience",
    title: "Project Manager",
    yearFrom: 2022,
    yearTo: 2023,
    description: "Managed the development of an internal HR platform using React JS and Node. Oversaw the development of React apps for a key client.",
    iconsTitle: "Stack and tools for this role:",
    stackIcons: [
      stack.iconNode,
      stack.iconReact,
      stack.iconLucid,
      stack.iconFigma,
      stack.iconPivotal,
    ]
  },
  QA_DESIGNER: {
    type: "Corporate Experience",
    title: "Quality Assurance and Designer",
    yearFrom: 2022,
    yearTo: 2023,
    description: "Designed mobile apps and web from wireframes to prototype using Adobe Photoshop, Adobe Illustrator and Figma. Developed frontend in ReactJS and worked on NodeJS with Express backend API. Conducted automated tests in Cypress and Jest, as well as manual testing. Managed PostgreSQL database and AWS services (EC2, S3).",
    iconsTitle: "Stack and tools for this role:",
    stackIcons: [
      stack.iconCypress,
      stack.iconJest,
      stack.iconNode,
      stack.iconReact,
      stack.iconFigma,
    ]
  },
  ENSAIOS3D: {
    type: "Self-Employed Experience",
    title: "enSaios 3D",
    yearFrom: 2009,
    yearTo: 2020,
    description: "Created virtual 360 tours using ThreeJS. Managed own office, handling production, sales, and client care. Freelanced as an architectural 3D modeler for CPVisual (Brazil and USA projects). Technologies: AutoCad, 3DSMax, Vray, Photoshop, Blender, Unity 3D (as a hobby).",
    iconsTitle: "Stack and tools for this role:",
    stackIcons: [
      stack.icon3Dmax,
      stack.iconVray,
      stack.iconPS,
      stack.iconAE,
    ]
  },
  DIGITAL_LIGHT: {
    type: "Corporate Experience",
    title: "Digital Light Computer Graphics - São Paulo",
    yearFrom: 2008,
    yearTo: 209,
    description: "At a top studio, specialized in architectural visualization, earning three Monthly Best Exterior Render awards. Crafted exceptional 3D renders for large projects using tools like 3Ds Max, Photoshop, and VRay. Ensured seamless integration and exceeded client expectations through creativity and technical expertise.",
    iconsTitle: "Stack and tools for this role:",
    stackIcons: [
      stack.icon3Dmax,
      stack.iconVray,
      stack.iconPS,
    ]
  },
}