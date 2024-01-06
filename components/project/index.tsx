import { btnGitHub } from "@/data/media"
import Image from "next/image"
import { Button } from "../button"

type ProjectComponentProps = {
  project: ProjectTypes
}

export const Project = ({ project }: ProjectComponentProps) => {
  return (
    <div className="mt-5 mb-8">
      <h2 className="mb-5 w-2/5">
        {project.title}
      </h2>
      <div className={`flex justify-between w-full ${project.layoutPosition === "right" && "flex-row-reverse"}`}>
        <div className={project.layoutPosition === "right" ? "ms-8" : "me-8"}>
          <p>
            {project.description}
          </p>
          {!!project.stackIcons.length &&
            <div className="mt-8">
              <span className="font-bold underline">{project.iconsTitle}</span>
              <div className="flex mt-3 gap-2">
                {project.stackIcons.map(
                  (icon: IconsType) =>
                    <Image
                      key={icon.src}
                      src={icon.src}
                      alt={icon.alt}
                      width={icon.wLG}
                      height={icon.hLG}
                    />
                )}
              </div>
            </div>
          }
        </div>
        <div className="flex flex-col">
          <div className="bg-gray-500 w-96 h-56 mb-2" />
          <div className="flex self-end">
            {project.hasDemo && <Button>Try it</Button>}
            {project.hasRepo && <Image src={btnGitHub.src} width={btnGitHub.wLG} height={btnGitHub.hLG} alt="_" />}
          </div>
        </div>
      </div>
    </div>
  )
}
