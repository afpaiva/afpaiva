import { Header } from "@/components/header";
import { Year } from "@/components/year";

export default function Home() {
  return (
    <main>
      <Header />
      <Year year={2024} />
    </main>
  );
}
