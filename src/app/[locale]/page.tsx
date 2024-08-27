import { useTranslations } from "next-intl";

import ButtonTheme from "@/components/theme/button-theme";
import ButtonChangeLan from "@/components/language/button-change-language";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>{t("title")}</h1>
      <ButtonTheme />
      <ButtonChangeLan />
    </main>
  );
}
