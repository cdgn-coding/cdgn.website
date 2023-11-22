"use client";

import {usePathname} from "next/navigation";
import {useLocale} from "next-intl";
import { Toggle } from "@/components/ui/toggle"
import Link from "next/link";

const LanguageSelector = ({languages, className}: { languages: string[], className?: string }) => {
    const locale = useLocale();
    return (
        <div className={`flex flex-row items-center space-x-2 ${className}`}>
            {languages.map((language) => (
                <Link href={`/${language}`} key={language}>
                    <Toggle aria-label={`Toggle ${language}`} pressed={language === locale}>
                        <span className="text-base uppercase">{language}</span>
                    </Toggle>
                </Link>
            ))}
        </div>
    );
}

export default LanguageSelector;