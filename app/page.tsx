import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Project } from "@/components/project";
import { Year } from "@/components/year";
import { Menu } from "@/components/menu";
import { Certificate } from "@/components/certificate";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { certificates } from "@/data/certifications";

export default function Home() {
  return (
    <main>
      <Menu />
      <Header />
      <Year year={2024} />
      <Project project={projects.PDF_READER} />
      <Year year={2023} />
      <Project project={projects.VIZSCOPE} />
      <Experience experience={experiences.PROJECT_MANAGER} />
      <Experience experience={experiences.QA_DESIGNER} />
      <Year year={2022} />
      <Project project={projects.LOTONAWEB} />
      <Project project={projects.YAAP} />
      <Year year={2020} />
      <Project project={projects.POLLO_NEO} />
      <Project project={projects.ELETROMAGNETISMO} />
      <Project project={projects.CLOUD_HUNTER} />
      <Year year={2019} />
      <Project project={projects.WINGS_QUEST} />
      <Year year={2009} />
      <Experience experience={experiences.ENSAIOS3D} />
      <Year year={2008} />
      <Experience experience={experiences.DIGITAL_LIGHT} />
      <Year year={2003} />
      <Experience experience={experiences.FREELANCER} />
      <div id="education" />
      <Experience experience={experiences.PUC_CC} />
      <Experience experience={experiences.PUC_ARQ} />
      <div id="certificates" className="w-full flex justify-center flex-wrap gap-4 mb-20">
        <Certificate certification={certificates.FREECODECAMP_REACT} />
        <Certificate certification={certificates.UDEMY_FLUTTER} />
        <Certificate certification={certificates.UDEMY_RN} />
        <Certificate certification={certificates.FREECODECAMP_JS} />
        <Certificate certification={certificates.SOLOLEARN} />
        <Certificate certification={certificates.HACKATRUCK_IBM} />
        <Certificate certification={certificates.UDEMY_UNITY} />
        <Certificate certification={certificates.FREECODECAMP_WEB} />
      </div>
    </main>
  );
}
