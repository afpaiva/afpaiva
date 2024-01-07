import Image from "next/image";
import { divider } from "@/data/media";

type YearTypes = {
  year: number;
};

export const Year = ({ year }: YearTypes) => {
  return (
    <div className="mt-10 mb-8">
      <h3>{year}</h3>
      <Image src={divider.src} width={divider.wLG} height={divider.hLG} alt={divider.alt} />
    </div>
  );
};
