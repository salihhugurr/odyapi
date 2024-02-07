import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-4 md:p-12 bg-gray-400 min-h-screen">
      <div className="container mx-auto py-16 flex flex-col items-center justify-center">
        <div className="mb-8 bg-yellow-500 p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Yapım Aşamasında
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center font-semibold">
          Sitemiz şu anda yapım aşamasındadır. Çok yakında hizmete geçecektir.
        </p>
        <Link
          target="_blank"
          href="https://www.google.com/maps/place/Baysan+%C4%B0%C5%9F+Merkezi/@37.0014019,35.3075471,17z/data=!3m1!4b1!4m6!3m5!1s0x15288f48b664e0ab:0xa3557f0b294504ae!8m2!3d37.0013977!4d35.312418!16s%2Fg%2F1tfz77bh?entry=ttu"
          className="flex gap-2 items-center mt-2 text-center"
        >
          <div className="bg-gray-700 rounded-full p-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <p className="text-gray-700 font-semibold">
            Döşeme mahallesi 60075 SK. Baysan Sitesi A1 Blok No:4/A Seyhan/Adana
          </p>
        </Link>
        <Link
          target="_blank"
          href="tel:+905412570463"
          className="flex gap-2 items-center mt-2 text-center"
        >
          <div className="bg-gray-700 rounded-full p-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              />
            </svg>
          </div>
          <p className="text-gray-700 font-semibold">541 257 04 63</p>
        </Link>
        <Link
          target="_blank"
          href="mailto:info@odyapi.com"
          className="flex gap-2 items-center mt-2 text-center"
        >
          <div className="bg-gray-700 rounded-full p-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <p className="text-gray-700 font-semibold">info@odyapi.com</p>
        </Link>
      </div>
    </main>
  );
}
