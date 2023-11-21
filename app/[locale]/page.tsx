import {useTranslations} from "next-intl";
import {Metadata} from "next";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params: {locale}} : {params: {locale: string}}): Promise<Metadata> {
    const t = await getTranslations({locale, namespace: 'About'});

    return {
        title: t('pageTitle'),
        description: t('pageDescription'),
    };
}

export default function About() {
    const t = useTranslations("About");
    const companies: {
        [key: string]: {
            website: string,
            responsibilities: string[],
        }
    } = {
        "pomelo": {
            "website": "https://pomelo.la/",
            "responsibilities": [
                "leadership",
                "mentorship",
                "development",
                "architect",
            ],
        },
        "mercadolibre": {
            "website": "https://investor.mercadolibre.com/",
            "responsibilities": [
                "leadership",
                "mentorship",
            ],
        },
        "mercadolibre2": {
            "website": "https://investor.mercadolibre.com/",
            "responsibilities": [
                "development",
                "architect",
                "leadership",
                "mentoring",
            ],
        },
        "globant": {
            "website": "https://www.globant.com/about",
            "responsibilities": [
                "development",
                "leadership",
            ],
        },
    };
    return (
        <>
            <section className={"mb-4"}>
                <h1 className="block text-2xl font-bold text-gray-900 mt-2">
                    {t("hello")}
                </h1>
                <h2 className="block text-2xl font-bold text-gray-600 mt-4">
                    {t("profileHeadline")}
                </h2>
                <p className="mt-4 block text-gray-900 text-lg">{t("profileParagraph")}</p>
            </section>
            <section className="flex flex-col">
                {Object.keys(companies).map((company) => (
                    <section className="flex flex-row my-4" key={company}>
                        <div className="inline-flex text-gray-600 flex-wrap min-w-fit text-lg">
                            {t(`experience.${company}.date`)}
                        </div>
                        <div className="flex flex-col ml-6">
                            <div className="text-gray-900 text-lg font-medium">
                                <Link href={companies[company].website}>
                                <span className="flex flex-row items-center">
                                    {t(`experience.${company}.companyName`)}
                                    <ArrowUpRight className={"h-5 w-5 text-gray-900 ml-2"}/>
                                </span>
                                </Link>
                            </div>
                            <div className="text-gray-600 text-lg font-medium">
                                {t(`experience.${company}.position`)}
                            </div>
                            <div className="flex flex-col mt-2">
                                {companies[company].responsibilities.map((responsibility: string) => (
                                    <span className="text-lg text-gray-900 mt-2" key={`${company}_${responsibility}`}>
                                        {t(`experience.${company}.responsibilities.${responsibility}`)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </>
    );
}
