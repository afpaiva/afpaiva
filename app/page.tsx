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
    </main>
  );
}
