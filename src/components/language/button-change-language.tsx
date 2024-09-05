"use client";

import Flag from "react-world-flags";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePathname, useRouter } from "./navigation";
import { useParams } from "next/navigation";
import { useTransition } from "react";

export default function ButtonChangeLan() {
  const t = useTranslations("Home");

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(language: string) {
    startTransition(() => {
      // @ts-ignore
      router.replace({ pathname, params }, { locale: language });
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mx-2 bg-transparent">
        <Badge
          className="p-2 px-1 py-2 hover:bg-accent hover:text-accent-foreground"
          variant="outline"
        >
          <Flag code={t("flag")} width={20} fallback={<span>Unknown</span>} />
          &darr;
        </Badge>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("language.select")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            onSelectChange("en");
          }}
        >
          <>
            <Flag code="us" width={20} fallback={<span>Unknown</span>} />
            &emsp;{t("language.en")}
          </>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            onSelectChange("pt-br");
          }}
        >
          <>
            <Flag code="bra" width={20} fallback={<span>Unknown</span>} />
            &emsp;{t("language.pt-br")}
          </>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
