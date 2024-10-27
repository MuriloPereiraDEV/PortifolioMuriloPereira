import { useTranslations } from "next-intl";

export default function Section2() {
  const section = useTranslations("Home.section2");

  return (
    <section className="h-auto w-[100%] flex">
      <div className="flex flex-col bg-lime-600">
        <h1></h1>
      </div>
      <div>
        <p>tecnologias</p>
      </div>
    </section>
  );
}
