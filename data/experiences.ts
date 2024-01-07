import * as stack from "./icons"

export const experiences: ExperiencesTypes = {
  PROJECT_MANAGER: {
    type: "Corporate Experience",
    title: "Project Manager - Team Leader",
    yearFrom: 2022,
    yearTo: 2023,
    description: "Worked as Project Manager on the development of an internal HR platform using React JS and Node. Also, oversaw the development of React apps for a key client.",
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
    description: "Was hired with two different roles for the same company: Designer and Developer. As a designer worked on web and mobile apps wireframes and prototypes using Adobe XD, Photoshop and Figma. And as a developer, worked on frontend in ReactJS, backend with NodeJS and PostgreSQL, and tests automation.",
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
    yearTo: 2009,
    description: "At a top studio, specialized in architectural visualization, earning three Monthly Best Exterior Render awards. Crafted exceptional 3D renders for large projects using tools like 3Ds Max, Photoshop, and VRay. Ensured seamless integration and exceeded client expectations through creativity and technical expertise.",
    iconsTitle: "Stack and tools for this role:",
    stackIcons: [
      stack.icon3Dmax,
      stack.iconVray,
      stack.iconPS,
    ]
  },
  FREELANCER: {
    type: "Self-Employed Experience",
    title: "Archviz Artist and Web Developer",
    yearFrom: 2003,
    yearTo: 2008,
    description: "Developed my own e-commerce platform with ASP/Access. Provided 2D/3D rendering and blueprints for construction projects. Technologies: ASP.NET, Microsoft Access, Macromedia Flash, Macromedia Dreamweaver.",
    iconsTitle: "Stack and tools for this role:",
    stackIcons: [
      stack.icon3Dmax,
      stack.iconVray,
      stack.iconPS,
      stack.iconJS,
    ]
  },
  PUC_CC: {
    type: "Graduation",
    title: "Bachelor of Science in Computer Science",
    yearFrom: 2020,
    yearTo: 2023,
    description: "PUC Minas, Pontifícia Universidade Católica de Minas Gerais, Campus Poços de Caldas",
  },
  PUC_ARQ: {
    type: "Graduation",
    title: "Bachelor of Arts in Architecture and Urbanism",
    yearFrom: 1998,
    yearTo: 2004,
    description: "PUC Minas, Pontifícia Universidade Católica de Minas Gerais, Campus Poços de Caldas",
  },
  CERT1: {
    type: "FreeCodeCamp",
    title: "Front End Development Libraries",
    yearFrom: 2022,
  },
}