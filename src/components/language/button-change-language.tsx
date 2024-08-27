import { useTranslations } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

export default function ButtonChangeLan() {
  const t = useTranslations("HomePage");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>Vai trocar</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("language.lan")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{t("language.en")}</DropdownMenuItem>
        <DropdownMenuItem>{t("language.pt-br")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
