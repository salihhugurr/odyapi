import PageWrapper from "../../../../components/PageWrapper";
import { useTranslations } from "next-intl";

export default function Page({ params }) {
  const t = useTranslations("Index");

  return (
    <PageWrapper>
      <div className="min-h-[500px] justify-center text-white">
        <h1 className="text-lg md:text-xl lg:text-2xl text-center my-4 font-bold mb-8">
          {t("Process Management and Reporting Experts")}
        </h1>
        <p className="text-sm lg:text-base text-center my-4 font-bold mb-8">
          {t("Process Management and Reporting Experts description")}
        </p>
        <ul className="list-disc gap-2">
          <p className="text-sm lg:text-base my-4 font-bold">{t("Services")}</p>
          <li>
            <h3 className="text-sm lg:text-base font-normal">
              <span className="font-bold">{t("Process Management")}: </span>
              {t("Process Management description")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              <span className="font-bold">{t("Reporting Services")}: </span>
              {t("Reporting Services description")}
            </h3>
          </li>
        </ul>
        <ul className="list-disc gap-2 mt-8">
          <p className="text-sm lg:text-base my-4 font-bold ">
            {t("Why Choose Us?")}
          </p>
          <li>
            <h3 className="text-sm lg:text-base font-normal">
              <span className="font-bold">{t("Expertise")}: </span>
              {t("Expertise description")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              <span className="font-bold">
                {t("Accuracy and Reliability")}:{" "}
              </span>
              {t("Accuracy and Reliability description")}
            </h3>
          </li>
        </ul>
        <div className="gap-2 mt-8">
          <p className="text-sm lg:text-base my-4 font-bold ">
            {t("Get in Touch")}
          </p>
          <h3 className="text-sm lg:text-base font-normal">
            {t("Get in Touch description")}
          </h3>
        </div>
        <ul className="list-disc gap-2 mt-8">
          <p className="text-sm lg:text-base my-4 font-bold ">
            {t("Our Industries")}
          </p>
          <li>
            <h3 className="text-sm lg:text-base font-normal">
              {t("Finance")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              {t("Healthcare")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              {t("Retail")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              {t("Manufacturing")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              {t("Services")}
            </h3>
          </li>
        </ul>
      </div>
    </PageWrapper>
  );
}
