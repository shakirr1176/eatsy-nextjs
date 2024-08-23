
'use client'

import Logo from "./Logo";
import Link from "next/link";
import LoveSvg from "../icon/LoveSvg";
import LoginSvg from "../icon/LoginSvg";
import MenubarSvg from "../icon/MenubarSvg";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Header() {

  let [openSideBar, setOpenSideBar] = useState(false);

  function closeSideBar(){
    setOpenSideBar(false)
  }

  return (
    <>
      <header className="font-14 text-slate-900 w-full h-[74px] flex items-center shadow">
        <div className="container">
          <nav className="flex items-center justify-between">
            <button onClick={() => setOpenSideBar(true)} className="lg:hidden">
              <MenubarSvg />
            </button>

            <Link href="/">
              <Logo />
            </Link>

            <div className="flex items-center gap-5">
              <ul className="hidden lg:flex gap-5">
                <li>
                  <Link
                    className="capitalize font-medium hover:text-primary duration-300"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="capitalize font-medium hover:text-primary duration-300"
                    href="#"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="capitalize font-medium hover:text-primary duration-300"
                    href="#"
                  >
                    New showroom
                  </Link>
                </li>
                <li>
                  <Link
                    className="capitalize font-medium hover:text-primary duration-300"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="capitalize font-medium hover:text-primary duration-300"
                    href="#"
                  >
                    Careers
                  </Link>
                </li>
              </ul>

              <ul className="flex items-center gap-2">
                <li>
                  <Link
                    className="capitalize font-medium hover:text-primary duration-300"
                    href=""
                  >
                    <LoginSvg className="" />
                  </Link>
                </li>

                <li>
                  <Link
                    className="capitalize font-medium hover:text-primary duration-300"
                    href=""
                  >
                    <LoveSvg className="" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {
        openSideBar && <Sidebar closeSideBar={closeSideBar}/>
      }
    </>
  );
}
