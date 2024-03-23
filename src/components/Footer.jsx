import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const t = useTranslations("Index");
  return (
    <div className="bg-gray-950 gap-4 flex flex-col justify-center items-center py-6">
      <div className="h-[1px] bg-gray-600 w-full" />
      <div className="flex flex-col px-4 justify-center items-center">
        <Link
          target="_blank"
          href="https://www.google.com/maps/place/Baysan+%C4%B0%C5%9F+Merkezi/@37.0014019,35.3075471,17z/data=!3m1!4b1!4m6!3m5!1s0x15288f48b664e0ab:0xa3557f0b294504ae!8m2!3d37.0013977!4d35.312418!16s%2Fg%2F1tfz77bh?entry=ttu"
          className="flex gap-2 mt-4 group items-center text-center"
        >
          <p className="text-xs md:text-base group-hover:text-red-400 text-gray-500 font-semibold">
            {t("Address")}:
          </p>
          <p className="text-xs md:text-base group-hover:text-red-300 text-gray-400 font-semibold">
            Döşeme mahallesi 60075 SK. Baysan Sitesi A1 Blok No:4/A Seyhan/Adana
          </p>
        </Link>
        <Link
          target="_blank"
          href="tel:+905412570463"
          className="flex gap-2 group items-center mt-2 text-center"
        >
          <p className="text-xs md:text-base group-hover:text-red-400 text-gray-500 font-semibold">
            {t("Phone")}:
          </p>

          <p className="text-xs md:text-base group-hover:text-red-300 text-gray-400 font-semibold">
            +90 541 257 04 63
          </p>
        </Link>
        <Link
          target="_blank"
          href="mailto:info@odyapi.com"
          className="flex gap-2 group items-center mt-2 text-center"
        >
          <p className="text-xs md:text-base group-hover:text-red-400 text-gray-500 font-semibold">
            {t("Email")}:
          </p>
          <p className="text-xs md:text-base group-hover:text-red-300 text-gray-400 font-semibold">
            info@odyapi.com
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
