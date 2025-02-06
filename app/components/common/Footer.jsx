import React from "react";
import { FaceIcon, InIcon, InstIcon } from "../Helper/Icon";
import { footlistData } from "../Helper/Helper";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#494336]">
      <div className="border-t border-t-[#D8DADC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 pt-[61px] md:pt-[60px] pb-[111px] md:pb-[80px] lg:pb-[59px] gap-y-[43px] flex gap-x-[140px] xl:gap-x-[240px] flex-wrap lg:flex-nowrap">
          <div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)]">
              Stay in touch:
            </p>
            <div className="border border-[#D9D9D9] w-full max-w-[309px] mt-2 md:mt-4">
              <input
                type="email"
                className=" px-[14px] py-[6px] bg-transparent border-0 outline-none text-[var(--Grey,#D7D9DD)] placeholder:text-[var(--Grey,#D7D9DD)] placeholder:text-lg text-lg ff-av"
                placeholder="Email"
              />
            </div>
            <div className="flex gap-5 mt-[17px] md:mt-[22px]">
              <Link
                href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
                target="blank"
                className="hover:scale-125 hover:rotate-45 transition-all ease-in-out duration-500 "
              >
                <FaceIcon />
              </Link>
              <Link
                href="#"
                target="blank"
                className="hover:scale-125 hover:rotate-45 transition-all ease-in-out duration-500 "
              >
                <InIcon />
              </Link>
              <Link
                href="https://www.instagram.com/accounts/login/?hl=en"
                target="blank"
                className="hover:scale-125 hover:rotate-45 transition-all ease-in-out duration-500 "
              >
                <InstIcon />
              </Link>
            </div>
          </div>
          <div className="flex gap-y-[25px] max-lg:justify-between gap-x-[170px] lg:gap-x-[60px] xl:gap-x-[96px] flex-wrap lg:flex-nowrap w-full">
            {footlistData.map((item, index) => {
              return (
                <div key={index}>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[var(--Grey,#D7D9DD)] leading-[150%]">
                    {item.title}
                  </h2>
                  <ul className="mt-[10px] md:mt-[20px] lg:mt-[31px]">
                    {item.sev.map((items, subIndex) => (
                      <li key={subIndex} className="mt-[6px]">
                        <Link
                          href={items.href}
                          className="text-sm md:text-base lg:text-lg text-normal text-[var(--Grey,#D7D9DD)] leading-[144%] underline ff-av hover:text-[#fff] transition-all duration-500 ease-in-out"
                        >
                          {items.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
