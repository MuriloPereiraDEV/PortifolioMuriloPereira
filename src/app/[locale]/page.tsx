import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="w-screen h-[86%] flex flex-col items-center justify-center">
      <h1>{t("title")}</h1>
    </main>
  );
}
