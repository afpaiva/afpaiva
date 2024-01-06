import Image from "next/image";
import { myAvatar } from "@/data/media";

export const Header = () => {
  return (
    <div className="flex mb-8 justify-center gap-10 w-full">
      <div>
        <Image
          src={myAvatar.src}
          alt={myAvatar.alt}
          width={myAvatar.wLG}
          height={myAvatar.hLG}
          quality="100"
        />
      </div>
      <div className="flex flex-col justify-around text-center">
        <h1>
          <strong>Creative Development</strong>
          <br /> for Digital Solutions
        </h1>
        <div className="flex flex-wrap justify-center gap-2">
          <h4>I'm Andre Paiva, a</h4>
          <h4><strong className="highlight">fullstack developer</strong></h4>
          <h4>merging</h4>
          <h4><strong className="highlight">design and code</strong>.</h4>
        </div>
      </div>
    </div>
  );
};
