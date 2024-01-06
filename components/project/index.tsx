import { btnGitHub } from "@/data/media"
import Image from "next/image"
import { Button } from "../button"

type ProjectComponentProps = {
  project: ProjectTypes
}

export const Project = ({ project }: ProjectComponentProps) => {
  return (
    <div className="mt-5 mb-8">
      <h2 className="mb-5 lg:w-2/5">
        {project.title}
      </h2>
      <div className={`flex flex-col lg:flex-row justify-between w-full ${project.layoutPosition === "right" && "lg:flex-row-reverse"}`}>
        <div className={project.layoutPosition === "right" ? "lg:ms-8" : "lg:me-8"}>
          <p className="mb-8">
            {project.description}
          </p>
          {!!project.stackIcons.length &&
            <div className="mb-8">
              <span className="font-bold underline">{project.iconsTitle}</span>
              <div className="flex mt-1 gap-2">
                {project.stackIcons.map(
                  (icon: IconsType) =>
                    <Image
                      className="scale-75 lg:scale-100"
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
          <div className="relative bg-gray-100 w-[320px] h-[186px] lg:w-96 lg:h-56 mb-2 self-center">
            {
              !!project.videoSrc ?
                <video controls>
                  <source src={project.videoSrc} type="video/mp4" />
                </video>
                :
                !!project.imageSrc &&
                <Image
                  src={project.imageSrc}
                  alt=""
                  objectFit="cover"
                  fill
                />
            }
          </div>
          <div className="flex self-center lg:self-end">
            {project.hasDemo && <Button>Try it</Button>}
            {project.hasRepo && <Image src={btnGitHub.src} width={btnGitHub.wLG} height={btnGitHub.hLG} alt="_" />}
          </div>
        </div>
      </div>
    </div>
  )
}
