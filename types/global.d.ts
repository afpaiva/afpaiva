export { };

declare global {

  type CertificationsTypes = {
    [key: string]: CertificationTypes
  }

  type CertificationTypes = {
    certificationUrl: string;
  }

  type ExperiencesTypes = {
    [key: string]: ExperienceTypes
  }

  type ExperienceTypes = {
    type:
    "Corporate Experience" |
    "Graduation" |
    "Self-Employed Experience" |
    string;
    title: string;
    description?: string;
    yearFrom: number;
    yearTo?: number;
    iconsTitle?: "Stack and tools for this role:";
    stackIcons?: IconsType[];
  }

  type ProjectsTypes = {
    [key: string]: ProjectTypes
  }

  type ProjectTypes = {
    title: string;
    description: any;
    iconsTitle: "Stack:";
    videoSrc?: string;
    imageSrc?: string;
    tryItUrl?: string;
    repoUrl?: string;
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