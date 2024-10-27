import { useTranslations } from "next-intl";

export default function Section1() {
  const section = useTranslations("Home.section1");

  return (
    <section className="h-auto w-[100%] flex bg-gray-900">
      <div className="h-[100%] w-[50%] flex flex-col pl-32 py-48">
        <h1 className="text-5xl">{section("title1")}</h1>
        <h1 className="text-5xl text-orange-600">{section("title2")}</h1>
        <h1 className="text-5xl underline">{section("title3")}</h1>
      </div>
      <div className="h-[100%] w-[50%] flex flex-col">
        <h1>Foto</h1>
      </div>
    </section>
  );
}
