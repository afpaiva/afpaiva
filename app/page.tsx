import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Project } from "@/components/project";
import { Year } from "@/components/year";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
