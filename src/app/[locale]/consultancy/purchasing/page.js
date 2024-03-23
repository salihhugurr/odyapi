import PageWrapper from "../../../../components/PageWrapper";
import { useTranslations } from "next-intl";

export default function Page({ params }) {
  const t = useTranslations("Index");

  return (
    <PageWrapper>
      <div className="min-h-[500px] justify-center text-white">
        <h1 className="text-lg md:text-xl lg:text-2xl text-center my-4 font-bold mb-8">
          {t("importedProducts")}
        </h1>
        <p className="text-sm lg:text-base text-center my-4 font-bold mb-8">
          {t("competitiveAdvantage")}
        </p>
        <div className="list-disc gap-2">
          <p className="text-sm lg:text-base my-4 font-bold">
            {t("artOfFinding")}
          </p>
          <h3 className="text-sm lg:text-base font-normal">
            {t("artOfFindingDescription")}
          </h3>
        </div>
        <ul className="list-disc gap-2 mt-8">
          <p className="text-sm lg:text-base my-4 font-bold ">
            {t("howWeWork")}
          </p>
          <li>
            <h3 className="text-sm lg:text-base font-normal">
              <span className="font-bold">{t("needsAnalysis")}: </span>
              {t("needsAnalysisDescription")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              <span className="font-bold">{t("globalResearch")}: </span>
              {t("globalResearchDescription")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              <span className="font-bold">
                {t("priceAndQualityEvaluation")}:{" "}
              </span>
              {t("priceAndQualityEvaluationDescription")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              <span className="font-bold">
                {t("procurementAndLogisticsSupport")}:{" "}
              </span>
              {t("procurementAndLogisticsSupportDescription")}
            </h3>
          </li>
        </ul>
        <ul className="list-disc gap-2 mt-8">
          <p className="text-sm lg:text-base my-4 font-bold ">
            {t("whyChooseUs")}
          </p>
          <li>
            <h3 className="text-sm lg:text-base font-normal">
              {t("Experienced and expert team")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              {t("Global supplier network")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              {t("Competitive prices")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              {t("Quality assurance")}
            </h3>
          </li>
          <li>
            <h3 className="text-sm lg:text-base font-normal mt-2">
              {t("Fast and efficient service")}
            </h3>
          </li>
        </ul>
        <h3 className="text-sm lg:text-base font-normal mt-8">{t("whyChooseUsDescription")}</h3>
      </div>
    </PageWrapper>
  );
}
