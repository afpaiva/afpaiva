import Image from "next/image";
import { myAvatar } from "@/data/media";

export const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row mb-8 lg:mb-20 justify-center gap-10 w-full">
      <div className={`relative w-[180px] h-[180px] lg:w-[${myAvatar.wLG}] lg:h-[${myAvatar.hLG}] self-center lg:self-start xl:mr-20 lg:mr-8`}>
        <Image
          src={myAvatar.src}
          alt={myAvatar.alt}
          quality="100"
          objectFit="cover"
          fill
        />
      </div>
      <div className="flex flex-col justify-around text-center">
        <h1>
          <strong>Creative Development</strong>
          <br /> for Digital Solutions
        </h1>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-2">
          <h4>I{`'`}m Andre Paiva, a</h4>
          <h4><strong className="highlight">fullstack developer</strong></h4>
          <h4>merging</h4>
          <h4><strong className="highlight">design and code</strong>.</h4>
        </div>
      </div>
    </div>
  );
};
