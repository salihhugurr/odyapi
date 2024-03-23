"use client"
import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation"; // Updated import statement

const languages = [
  {
    name: "Turkish",
    key: "tr",
    img: <Image src={"/languages/tr.png"} alt="tr" width={24} height={24} />,
  },
  {
    name: "English",
    key: "en",
    img: <Image src={"/languages/en.png"} alt="en" width={24} height={24} />,
  },
  {
    name: "Russian",
    key: "ru",
    img: <Image src={"/languages/ru.png"} alt="ru" width={24} height={24} />,
  },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const router = useRouter(); // Use the useRouter hook to access the router object

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const onSelectChange = (key) => {
    startTransition(() => {
      const currentRoute = pathname;
      const routeParts = currentRoute.split("/");
      routeParts[1] = key;
      const newPath = routeParts.join("/");
      router.replace(newPath); 
    });
  };

  return (
    <div
      className="relative z-40"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="px-4 py-2 text-white rounded focus:outline-none focus:bg-gray-700"
        onClick={toggleDropdown}
      >
        <Image src={`/languages/${locale}.png`} alt={locale} width={24} height={24} />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 mt-2  shadow-md rounded"
        >
          <ul className="py-1">
            {languages.map((lang, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <button
                  key={index + lang.key}
                  disabled={isPending}
                  onClick={() => onSelectChange(lang.key)} // Change this to handle language selection
                >
                  {lang.img}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSelector;
