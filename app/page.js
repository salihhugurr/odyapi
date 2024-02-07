import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-4 md:p-12 bg-gray-950 min-h-screen">
      <div className="container mx-auto py-16 flex flex-col items-center justify-center">
        <div className="rounded-full bg-[#F0F0F0] p-4">
          <Image
            src={"/logo.jpg"}
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-xl md:text-3xl mt-6 font-bold text-gray-300 mb-4 text-center">
          Yapım Aşamasında
        </h1>
        <p className="text-base md:text-lg text-gray-400  text-center font-semibold">
          Sitemiz şu anda yapım aşamasındadır. Çok yakında hizmete geçecektir.
        </p>
        <div className="h-[1px] mt-6 bg-gray-600 mb-2 mx-6 w-full" />
        <div className="gap-4 flex flex-col justify-center items-center">
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Baysan+%C4%B0%C5%9F+Merkezi/@37.0014019,35.3075471,17z/data=!3m1!4b1!4m6!3m5!1s0x15288f48b664e0ab:0xa3557f0b294504ae!8m2!3d37.0013977!4d35.312418!16s%2Fg%2F1tfz77bh?entry=ttu"
            className="flex gap-2 mt-6 group items-center text-center"
          >
            <p className="text-sm md:text-base group-hover:text-red-400 text-gray-500 font-semibold">
              Adres:
            </p>
            <p className="text-sm md:text-base group-hover:text-red-300 text-gray-400 font-semibold">
              Döşeme mahallesi 60075 SK. Baysan Sitesi A1 Blok No:4/A
              Seyhan/Adana
            </p>
          </Link>
          <Link
            target="_blank"
            href="tel:+905412570463"
            className="flex gap-2 group items-center mt-2 text-center"
          >
            <p className="text-sm md:text-base group-hover:text-red-400 text-gray-500 font-semibold">
              Telefon:
            </p>

            <p className="text-sm md:text-base group-hover:text-red-300 text-gray-400 font-semibold">
              541 257 04 63
            </p>
          </Link>
          <Link
            target="_blank"
            href="mailto:info@odyapi.com"
            className="flex gap-2 group items-center mt-2 text-center"
          >
            <p className="text-sm md:text-base group-hover:text-red-400 text-gray-500 font-semibold">
              E Posta:
            </p>
            <p className="text-sm md:text-base group-hover:text-red-300 text-gray-400 font-semibold">
              info@odyapi.com
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
