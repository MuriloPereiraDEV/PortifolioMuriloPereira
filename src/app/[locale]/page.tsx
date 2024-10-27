import Section1 from "@/components/body/section1";
import Section2 from "@/components/body/section2";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="w-screen min-h-[93%] flex flex-col">
      <Section1 />
      <Section2 />
    </main>
  );
}
