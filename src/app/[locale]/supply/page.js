"use client"
import { useLocale, useTranslations } from "next-intl";
import PageWrapper from "../../../components/PageWrapper";
import Slider from "../../../components/Slider";
import Link from "next/link";
import React from "react";

const Supply = () => {
  const t = useTranslations("Index");
  const locale = useLocale();

    const items = [
      {
        img: "/slider/1.png",
        desc: "Omnichannel",
        buttonIcon: "/slider/1.png",
      },
      {
        img: "/slider/2.png",
        desc: "Multilingual",
        buttonIcon: "/slider/1.png",
      },
      {
        img: "/slider/3.png",
        desc: "Interpolate",
        buttonIcon: "/slider/1.png",
      },
    ];
  return (
    <PageWrapper>
      <div className="flex flex-col gap-20 justify-center items-center my-12 lg:mt-12">
        <Slider items={items}/>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Link
            href={`/${locale}/supply/pipe`}
            className="flex uppercase items-center justify-center py-4 px-8 bg-white rounded-md text-sm hover:bg-[#514B5D] transition-all text-gray-600 hover:text-gray-100 min-w-60 text-center"
          >
            {t("Pipes - Profile Group")}
          </Link>
          <Link
            href={`/${locale}/supply/sheet`}
            className="flex uppercase items-center justify-center py-4 px-8 bg-white rounded-md text-sm hover:bg-[#514B5D] transition-all text-gray-600 hover:text-gray-100 min-w-60 text-center"
          >
            {t("Sheet Group")}
          </Link>
          <Link
            href={`/${locale}/supply/valve`}
            className="flex uppercase items-center justify-center py-4 px-8 bg-white rounded-md text-sm hover:bg-[#514B5D] transition-all text-gray-600 hover:text-gray-100 min-w-60 text-center"
          >
            {t("Fire and Valve Group")}
          </Link>
          <Link
            href={`/${locale}/supply/construction`}
            className="flex uppercase items-center justify-center py-4 px-8 bg-white rounded-md text-sm hover:bg-[#514B5D] transition-all text-gray-600 hover:text-gray-100 min-w-60 text-center"
          >
            {t("Building Materials Group")}
          </Link>
          <Link
            href={`/${locale}/supply/prefabric`}
            className="flex uppercase items-center justify-center py-4 px-8 bg-white rounded-md text-sm hover:bg-[#514B5D] transition-all text-gray-600 hover:text-gray-100 min-w-60 text-center"
          >
            {t("Prefabricated Buildings")}
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Supply;
