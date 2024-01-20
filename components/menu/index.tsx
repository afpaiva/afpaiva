'use client'
import { t } from "@/data/texts";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Menu = () => {
  const [scroll, setScroll] = useState(0);
  const myPhone = "+5535992449829"

  useEffect(() => {
    const scroll = () => {
      setScroll(window.scrollY)
    }
    window.addEventListener("scroll", scroll, false)
    return () => window.removeEventListener("scroll", scroll, false)
  }, [])

  return (
    <div className="flex justify-end">
      <div className={`${scroll < 200 ? "right-[-200px] lg:right-20 lg:top-[-80px]" : "right-[5px] lg:right-20 lg:top-[30px]"} flex lg:flex-row flex-col gap-3 transition-top duration-300 fixed z-50`}>
        <a
          className="hidden transition-scale duration-100 lg:inline-block align-middle justify-center rounded-full px-6 py-3 drop-shadow-xl bg-white hover:scale-105"
          href="#education"
        >
          <strong>{t("EDUCATION")}</strong>
        </a>
        <a
          className="hidden transition-scale duration-100 lg:inline-block align-middle justify-center rounded-full px-6 py-3 drop-shadow-xl bg-white hover:scale-105"
          href="#certificates"
        >
          <strong>{t("CERTIFICATES")}</strong>
        </a>
        <a
          className="transition-scale duration-100 inline-block align-middle justify-center rounded-full px-3 py-3 drop-shadow-xl bg-white hover:scale-105"
          href="https://www.linkedin.com/in/afpaiva/"
          target="_blank"
        >
          <Image src="/assets/linkedin.png" alt="" width={30} height={30} />
        </a>
        <a
          className="transition-scale duration-100 inline-block align-middle justify-center rounded-full px-3 py-3 drop-shadow-xl bg-white hover:scale-105"
          href={`https://t.me/${myPhone}`}
          target="_blank"
        >
          <Image src="/assets/telegram.png" alt="" width={30} height={30} />
        </a>
        <a
          className="transition-scale duration-100 inline-block align-middle justify-center rounded-full px-3 py-3 drop-shadow-xl bg-white hover:scale-105"
          href={`https://wa.me/${myPhone}`}
          target="_blank"
        >
          <Image src="/assets/whatsapp.png" alt="" width={30} height={30} />
        </a>
        <a
          className="transition-scale duration-100 inline-block align-middle justify-center rounded-full px-3 py-3 drop-shadow-xl bg-white hover:scale-105"
          href={`https://www.github.com/afpaiva`}
          target="_blank"
        >
          <Image src="/assets/icon-gh.png" alt="" width={30} height={30} />
        </a>
      </div>
      <div className={`${scroll < 1100 ? "bottom-[-80px]" : "bottom-[30px]"} lg:right-20 flex gap-3 transition-top duration-300 fixed z-50`}>
        <a
          className="transition-scale duration-100 inline-block align-middle justify-center rounded-full px-3 py-3 drop-shadow-xl bg-white hover:scale-105"
          href="#top"
        >
          <Image src="/assets/top.png" alt="" width={50} height={50} />
        </a>
      </div>
    </div>
  )
}
