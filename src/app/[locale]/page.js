import PageWrapper from "../../components/PageWrapper";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <PageWrapper>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <Link
          href={`/${locale}/supply`}
          className="relative group cursor-pointer transition-all h-full rounded-lg bg-gray-200 text-center overflow-hidden"
        >
          <Image
            src={"/supply.png"}
            width={1000}
            height={1000}
            alt="supply"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center h-full w-full bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50">
            <p className="text-xs py-3 px-4 lg:py-4 lg:px-12 uppercase bg-white font-bold rounded-md  group-hover:bg-[#514B5D] transition-all text-gray-600 group-hover:text-gray-100 min-w-60 text-center">
              {t("Construction Materials Supply")}
            </p>
          </div>
        </Link>
        <Link
          href={`/${locale}/consultancy`}
          className="relative group cursor-pointer transition-all h-full rounded-lg bg-gray-200 text-center overflow-hidden"
        >
          <Image
            src={"/consultancy.png"}
            width={1000}
            height={1000}
            alt="consultancy"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center h-full w-full bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50">
            <p className="text-xs py-3 uppercase px-4 lg:py-4 lg:px-12 bg-white font-bold rounded-md group-hover:bg-[#514B5D] transition-all text-gray-600 group-hover:text-gray-100 min-w-60 text-center">
              {t("Consultancy Services")}
            </p>
          </div>
        </Link>
      </div>
      <div className="text-white font-semibold mt-12">

      <h1 className="text-lg  md:text-xl lg:text-2xl text-center my-4 font-bold mb-8">
        {t("Who Are We?")}
      </h1>
      <p className="text-sm lg:text-base  my-2 font-bold mb-4">
        {t("odyapi1")}
      </p>
      <p className="text-sm lg:text-base  my-2 font-bold mb-4">
        {t("odyapi2")}
      </p>
      <p className="text-sm lg:text-base  my-2 font-bold mb-4">
        {t("odyapi3")}
      </p>
      <p className="text-sm lg:text-base  my-2 font-bold mb-4">
        {t("odyapi4")}
      </p>
      <p className="text-sm lg:text-base  my-2 font-bold mb-4">
        {t("odyapi5")}
      </p>
      </div>
    </PageWrapper>
  );
}
