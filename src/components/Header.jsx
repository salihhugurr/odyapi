"use client";
import Image from "next/image";
import React from "react";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex bg-gray-950 justify-between px-8 py-6">
      <Link href={"/"} className="rounded-full bg-[#F0F0F0] py-3">
        <Image
          src={"/logo.jpg"}
          alt="logo"
          className="rounded-full"
          width={50}
          height={50}
        />
      </Link>
      <LanguageSelector />
    </div>
  );
};

export default Header;
