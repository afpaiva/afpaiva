import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex mb-10">
      <div>
        <Image
          src="/assets/andre_paiva.png"
          alt="_"
          width="249"
          height="249"
          quality="100"
        />
      </div>
      <div className="flex flex-col justify-between text-center">
        <h1>
          <strong>Creative Development</strong>
          <br /> for Digital Solutions
        </h1>
        <h4 className="mt-10">
          I'm Andre Paiva, a{" "}
          <span className="highlight">fullstack developer</span> merging{" "}
          <span>design and code</span>.
        </h4>
      </div>
    </div>
  );
};
