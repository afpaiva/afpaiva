import Image from "next/image"

type ExperienceComponentProps = {
  experience: ExperienceTypes
}

export const Experience = ({ experience }: ExperienceComponentProps) => {
  return (
    <div>
      <strong className="highlight">
        {experience.type}
      </strong>
      <h2>
        {experience.title}
      </h2>
      <small>
        {experience.yearFrom} - {experience.yearTo}
      </small>
      <p className="mt-6">
        {experience.description}
      </p>
      {!!experience.stackIcons.length &&
        <div className="mt-8">
          <span className="font-bold underline">{experience.iconsTitle}</span>
          <div className="flex mt-3 gap-2">
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