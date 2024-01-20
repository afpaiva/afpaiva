'use client'
import { btnGitHub } from "@/data/media"
import Image from "next/image"
import { Button } from "../button"
import { t } from "@/data/texts"

type ProjectComponentProps = {
  project: ProjectTypes
}

export const Project = ({ project }: ProjectComponentProps) => {

  return (
    <div className="mt-8 mb-20 lg:bg-white lg:p-6 lg:drop-shadow-md lg:rounded-lg">
      <h2 className="mb-5">
        {t(project.title)}
      </h2>
      <div className={`flex flex-col lg:flex-row justify-between w-full ${project.layoutPosition === "right" && "lg:flex-row-reverse"} flex-col-reverse`}>
        <div className={`${project.layoutPosition === "right" ? "lg:ms-8" : "lg:me-8"} self-center`}>
          <div className="mb-8 max-w-[550px]" dangerouslySetInnerHTML={{ __html: t(project.description || "") }} />
          {!!project.stackIcons.length &&
            <div className="mb-8 flex flex-col">
              <span className={`font-bold underline ${project.layoutPosition === "right" ? "lg:self-end" : ""}`}>{project.iconsTitle}</span>
              <div className={`origin-top-left drop-shadow-md lg:drop-shadow-[0] flex flex-wrap mt-1 gap-2 justify-center ${project.layoutPosition === "right" ? "lg:self-end" : "lg:self-start"}`}>
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
          <div className="relative bg-gray-100 w-[320px] h-[186px] lg:w-96 lg:h-56 min-[1600px]:w-[480px] min-[1600px]:h-[271px] mb-2 self-center">
            {
              !!project.videoSrc ?
                <video controls muted className="cursor-pointer">
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
          <div className="flex self-center lg:self-end mb-8 lg:mb-1">
            {project.tryItUrl &&
              <Button
                onClick={() => window.open(project.tryItUrl, "_blank")}
              >
                {t("TRY_IT")}
              </Button>}
            {project.repoUrl &&
              <Image
                className="cursor-pointer"
                onClick={() => window.open(project.repoUrl, "_blank")}
                src={btnGitHub.src}
                width={btnGitHub.wLG}
                height={btnGitHub.hLG}
                alt="_"
              />}
          </div>
        </div>
      </div>
    </div>
  )
}
