import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { listData } from "../Helper/Helper";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed inset-0 bg-[black] bg-opacity-50 z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#494336] text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4">
          <div className="text-xl font-bold mb-6 flex justify-between gap-4">
            <Link href={"/"} className=" w-full max-w-[114px]">
              <Image
                src={"/assets/png/logo.png"}
                width={114}
                height={69}
                alt="logo"
                className="w-full max-w-[90px]"
              />
            </Link>
            <button onClick={toggleSidebar} className="w-full max-w-[40px]">
              <Image
                src={"/assets/png/cross.png"}
                width={32}
                height={32}
                alt="logo"
                className="w-full max-w-[40px]"
              />
            </button>
          </div>
          <div className="flex flex-col items-center gap-[30px] xl:gap-[69px]">
            <ul className="flex flex-col gap-[30px] xl:gap-[66px] items-center ro">
              {listData.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-sm font-medium tracking-[1.4px] text-[#D7D9DD] hover:text-[#fff] transition-all duration-500 ease-in-out uppercase"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <Button btn={"BOOK NOW"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
