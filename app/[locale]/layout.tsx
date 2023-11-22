import "@app/globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation/Navigation";
import LanguageSelector from "@/components/ui/LanguageSelector";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import Link from "next/link";
import React from "react";
import {NextIntlClientProvider, useTranslations} from "next-intl";
import GithubIcon from "@/components/icons/GithubIcon";

export const metadata: Metadata = {
  title: "cdgn.",
  description: "Personal website of Carlos David Gonzalez Nexans",
};

const locales = ["en", "es"];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();

  const t = useTranslations();

  const options = [
    {
      name: t('Layout.about'),
        href: '/about'
    },
    // {
    //     name: t('Layout.articles'),
    //     href: '/articles'
    // }
  ]

  return (
    <html lang={locale}>
      <body className="w-full min-h-full">
        <NextIntlClientProvider>
          <div className="antialiased max-w-3xl flex flex-col mx-auto px-8 pb-12">
            <header className="flex flex-row items-center py-8">
              <section className="relative -top-0.5">
                <Link className="text-2xl font-bold text-gray-900" href="/">
                  cdgn.
                </Link>
              </section>
              <section className="flex flex-grow flex-row justify-between">
                <section className="ml-4">
                  <Navigation options={options} />
                </section>
                <section className="flex flex-row items-center space-x-2">
                  <Link href="https://www.linkedin.com/in/cdgn-cv/" target="_blank" className="px-3">
                    <LinkedinIcon className="h-5 w-5 text-gray-900" />
                  </Link>
                  <Link href="https://github.com/cdgn-coding" target="_blank"  className="px-3">
                    <GithubIcon className="h-5 w-5 text-gray-900" />
                  </Link>
                  <LanguageSelector languages={locales} className="ml-2" />
                </section>
              </section>
            </header>
            <main className="flex flex-col">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
