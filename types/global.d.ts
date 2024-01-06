export { };

declare global {

  type ExperiencesTypes = {
    [key: string]: ExperienceTypes
  }

  type ExperienceTypes = {
    type:
    "Corporate Experience" |
    "Graduation" |
    "Certificate" |
    "Self-Employed Experience";
    title: string;
    description: string;
    yearFrom: number;
    yearTo: number;
    iconsTitle: "Stack and tools for this role:";
    stackIcons: IconsType[];
  }

  type ProjectsTypes = {
    [key: string]: ProjectTypes
  }

  type ProjectTypes = {
    title: string;
    description: string;
    iconsTitle: "From my toolbox:";
    hasDemo: boolean;
    hasRepo: boolean;
    stackIcons: IconsType[];
    layoutPosition?: "left" | "right";
  }

  type IconsType = {
    src: string;
    alt: string;
    wLG: number;
    hLG: number;
    wSM?: number;
    hSM?: number;
  }

  type MediaType = {
    src: string;
    alt: string;
    wLG: number;
    hLG: number;
    wSM?: number;
    hSM?: number;
  }
}