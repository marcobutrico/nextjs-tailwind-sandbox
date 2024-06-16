"use client";
import React, { useContext } from "react";
import Link from "next/link";
import MainHeader from "./MainHeader";
import { MenuContext } from "@/context/MenuContext";

import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiHelpscout } from "react-icons/si";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);

  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        {/* <aside className="bg-white rounded-lg w-60 p-4"> */}
        <aside
          className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4" : "w-0"
          } lg:w-60 lg:p-4 `}
        >
          <ul>
            {open}
            {/* Menu para Home */}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome className="mr-2 cursor-pointer" />
              <Link href={"/"}>Home</Link>
            </li>

            {/* Menu para Projects */}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <GrProjects className="mr-2" />
              <h2 className="flex-1">Projects</h2>
              <FaAngleRight />
            </li>

            {/* Menu para Singule */}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
              <FaCheck className="mr-2" />
              <h2 className="flex-1">Singule</h2>
              <FaAngleRight />
            </li>

            {/* Menu para Complex */}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
              <FaCheckDouble className="mr-2" />
              <h2 className="flex-1">Complex</h2>
              <FaAngleRight />
            </li>

            {/* Menu para About */}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
              <SiHelpscout className="mr-2" />
              <Link href={"/about-us"}>About</Link>
            </li>

            {/* Menu para Contact Us */}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
              <FiPhoneCall className="mr-2" />
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
