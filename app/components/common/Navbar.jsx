"use client";
import React, { useState } from "react";
import { listData } from "../Helper/Helper";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#494336] pt-[11px] pb-[18px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 flex items-center justify-between gap-3">
        <div>
          <Link href={"/"} className=" w-full max-w-[90px] sm:max-w-[114px]">
            <Image
              src={"/assets/png/Logo.png"}
              width={114}
              height={69}
              alt="logo"
              className="w-full"
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-[40px] xl:gap-[69px]">
          <ul className="flex gap-[38px] xl:gap-[66px] items-center">
            {listData.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-sm font-medium tracking-[1.4px] text-[#D7D9DD] hover:text-[#fff] transition-all duration-500 ease-in-out uppercase ro"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/jion">
            <Button btn={"BOOK NOW"} />
          </Link>
        </div>
        <button
          className="flex lg:hidden w-full max-w-[50px]"
          onClick={toggleSidebar}
        >
          <Image
            src={"/assets/png/menu.png"}
            width={50}
            height={26}
            alt="logo"
            className="w-full max-w-[50px]"
          />
        </button>
      </div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Navbar;
