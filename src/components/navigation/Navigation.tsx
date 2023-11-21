"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Option = { name: string; href: string };

export default function Navigation({ className, options }: { className?: string, options: Option[] }) {
  const t = useTranslations();
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
          {options.map((option) => (
              <NavigationMenuItem key={option.name}>
              <Link href={option.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {option.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
