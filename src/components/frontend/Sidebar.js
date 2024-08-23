import Link from "next/link";
import React from "react";
import logoImg from "../../../public/images/eatsy.png";
import Image from "next/image";
import CancelSvg from "../icon/CancelSvg";

export default function Sidebar({ closeSideBar }) {
  return (
    <>
      {/* overlay */}
      <div className="z-30 fixed inset-0 bg-black bg-opacity-50 lg:hidden"></div>
      <div className="bg-white lg:hidden fixed top-0 left-0 h-screen w-[280px] z-50">
        <div className="relative bg-primary w-full p-4">
          <button
            onClick={closeSideBar}
            className="size-8 text-white absolute top-2 right-2"
          >
            <CancelSvg />
          </button>

          <Link href="/">
            <Image src={logoImg} width="162" height="35" alt="logo" />
          </Link>
        </div>
        <ul className="font-14 text-slate-900">
          <li className="border-b">
            <Link
              href={"/"}
              className="px-4 py-3.5 hover:bg-slate-100 block capitalize hover:text-primary duration-300"
            >
              Home
            </Link>
          </li>
          <li className="border-b">
            <Link
              href={"/"}
              className="px-4 py-3.5 hover:bg-slate-100 block capitalize hover:text-primary duration-300"
            >
              About
            </Link>
          </li>
          <li className="border-b">
            <Link
              href={"/"}
              className="px-4 py-3.5 hover:bg-slate-100 block capitalize hover:text-primary duration-300"
            >
              New showroom
            </Link>
          </li>
          <li className="border-b">
            <Link
              href={"/"}
              className="px-4 py-3.5 hover:bg-slate-100 block capitalize hover:text-primary duration-300"
            >
              Contact
            </Link>
          </li>
          <li className="border-b">
            <Link
              href={"/"}
              className="px-4 py-3.5 hover:bg-slate-100 block capitalize hover:text-primary duration-300"
            >
              Careers
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
