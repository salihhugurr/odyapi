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
            {t("Address1")}:
          </p>
          <p className="flex gap-2 text-xs md:text-base group-hover:text-red-300 text-gray-400 font-semibold">
            Döşeme mahallesi 60075 SK. Baysan Sitesi A1 Blok No:4/A Seyhan/Adana 
          </p>
        </Link>
        <Link
          target="_blank"
          href="https://www.google.com/maps/place/%C5%9Eahintepe,+6.+Sk.+No:1,+01250+Sar%C4%B1%C3%A7am%2FAdana/@37.0311476,35.4105712,21z/data=!4m10!1m2!2m1!1sYavuz+Sultan+Selim,+6.+Sokak+no+1,+Sar%C4%B1%C3%A7am%2FAdana!3m6!1s0x1528921f0a521ccb:0x923bf57aee839528!8m2!3d37.0311522!4d35.4108562!15sCjJZYXZ1eiBTdWx0YW4gU2VsaW0sIDYuIFNva2FrIG5vIDEsIFNhcsSxw6dhbS9BZGFuYZIBEWNvbXBvdW5kX2J1aWxkaW5n4AEA!16s%2Fg%2F11s9hzjzj1?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
          className="flex gap-2 mt-2 group items-center text-center"
        >
          <p className="text-xs md:text-base group-hover:text-red-400 text-gray-500 font-semibold">
            {t("Address2")}:
          </p>
          <p className="flex gap-2 text-xs md:text-base group-hover:text-red-300 text-gray-400 font-semibold">
            Akkuyu Mahallesi 6 Sokak No:1 Sarıçam/Adana <p className="text-base text-red-300">
            {t('warehouse')}
            </p>
          </p>
        </Link>
        <Link
          target="_blank"
          href="https://www.google.com/maps/place/4.+Organize+Sanayi+B%C3%B6lgesi/@37.0866478,37.4396665,18.5z/data=!4m14!1m7!3m6!1s0x1531e5a4740d7dd9:0x47db02e2baf6f413!2s4.+Organize+Sanayi+B%C3%B6lgesi!8m2!3d37.0858986!4d37.4411658!16s%2Fg%2F11hysqb89c!3m5!1s0x1531e5a4740d7dd9:0x47db02e2baf6f413!8m2!3d37.0858986!4d37.4411658!16s%2Fg%2F11hysqb89c?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
          className="flex gap-2 mt-2 group items-center text-center"
        >
          <p className="text-xs md:text-base group-hover:text-red-400 text-gray-500 font-semibold">
            {t("Address3")}:
          </p>
          <p className="flex gap-2 text-xs md:text-base group-hover:text-red-300 text-gray-400 font-semibold">
            4. Organize Sanayi Bölgesi 83425 Nolu Cadde Şehitkamil/Gaziantep <p className="text-base text-red-300">
            {t('warehouse')}
            </p>
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
