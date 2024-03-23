import PageWrapper from "../../../components/PageWrapper"
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Constulatcy() {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <PageWrapper>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center min-h-[500px]">
        <Link
          href={`/${locale}/consultancy/process-management`}
          className="py-4 px-8 uppercase bg-white rounded-md text-sm hover:bg-[#514B5D] transition-all text-gray-600 hover:text-gray-100 min-w-60 text-center"
        >
          {t("Process Management and Reporting")}
        </Link>
        <Link
          href={`/${locale}/consultancy/purchasing`}
          className="py-4 px-8 uppercase bg-white rounded-md text-sm hover:bg-[#514B5D] transition-all text-gray-600 hover:text-gray-100 min-w-60 text-center"
        >
          {t("Purchasing Consultancy")}
        </Link>
      </div>
    </PageWrapper>
  );
}
