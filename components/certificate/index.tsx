import Image from "next/image"

type CertificateProps = {
  certification: CertificationTypes
}

export const Certificate = ({ certification }: CertificateProps) => {
  return (
    <Image
      src={certification.certificationUrl}
      width={320}
      height={1}
      alt=""
    />
  )
}
