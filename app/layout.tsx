import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andre Paiva | A fullstack developer merging design and code",
  description: "Andre Paiva Portfolio of Works",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} overflow-x-hidden`}>
        <div className="flex justify-center mt-10">
          <div className="flex justify-center align-center md:w-3/4 xl:w-3/5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
