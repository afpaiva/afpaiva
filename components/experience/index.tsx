import { t } from "@/data/texts"
import Image from "next/image"

type ExperienceComponentProps = {
  experience: ExperienceTypes
}

export const Experience = ({ experience }: ExperienceComponentProps) => {
  const isEducation = !Boolean(experience.stackIcons)

  return (
    <div className={`mb-24 ${isEducation ? "bg-white drop-shadow-md rounded-lg p-6 self-center" : ""}`}>
      <strong className="highlight">
        {experience.type}
      </strong>
      <h2>
        {t(experience.title)}
      </h2>
      {experience.yearFrom &&
        <small>
          {experience.yearFrom} - {experience.yearTo}
        </small>
      }
      <div className="mt-6" dangerouslySetInnerHTML={{ __html: t(experience.description || "") }} />
      {
        !!experience.stackIcons?.length &&
        <div className="mt-8">
          <span className="font-bold underline">{experience.iconsTitle}</span>
          <div className="drop-shadow-md flex mt-3 gap-2 flex-wrap">
            {experience.stackIcons.map(
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
  )
}