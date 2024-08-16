"use client"; // Menyatakan bahwa ini adalah komponen klien

import { useEffect } from "react";
import LogoIconLG from "@/assets/logo.png";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

export const Header = () => {
  useEffect(() => {
    const navbarButton = document.querySelector("#navbar");
    const menu = document.querySelector("#menu");

    if (navbarButton && menu) {
      const toggleMenu = () => {
        navbarButton.classList.toggle("navbar-active");
        menu.classList.toggle("hidden");
      };

      navbarButton.addEventListener("click", toggleMenu);

      const handleScroll = () => {
        const header = document.querySelector("header");
        if (header) {
          const fixednav = header.offsetTop;

          if (window.pageYOffset > fixednav) {
            header.classList.add("navbar-fixed");
          } else {
            header.classList.remove("navbar-fixed");
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup event listeners on component unmount
      return () => {
        navbarButton.removeEventListener("click", toggleMenu);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header className="bg-transparent py-4 border-b border-white/15 md:border-none absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-3 flex">
            <div className="ml-8 lg:ml-0 flex items-center">
              <Image
                src={LogoIconLG}
                alt="Logo kodelify"
                className="mx-2 w-7 h-7 my-auto"
              />
              <span className="hidden font-semibold text-xl text-slate-100 lg:block py-6 pointer-events-none cursor-not-allowed">
                Kodelify
              </span>
            </div>
            <div className="flex items-center px-4 ">
              <button
                id="navbar"
                name="button"
                type="button"
                className="block absolute left-4 lg:hidden">
                <span className="line-menu transition duration-300 ease-in-out origin-top-left"></span>
                <span className="line-menu transition duration-300 ease-in-out origin-top-left"></span>
              </button>
              <nav
                id="menu"
                className="hidden absolute py-5 bg-black shadow-lg rounded-lg max-w-[250px] w-full left-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none  lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group flex items-center">
                    <a
                      href="/"
                      className="flex items-center font-semibold text-slate-500 py-2 mx-5 group-hover:text-slate-200 transition"
                    >
                      <div className="fill-slate-500 mr-2 group-hover:fill-slate-200">
                        <FaHome />
                      </div>
                      Beranda
                    </a>
                  </li>
                  <li className="group flex items-center">
                    <a
                      href="#"
                      className="flex items-center font-semibold text-slate-500 py-2 mx-5 group-hover:text-slate-200 transition"
                    >
                      <div className="fill-slate-500 mr-2 group-hover:fill-slate-200">
                        <CgCommunity />
                      </div>
                      Komunitas
                    </a>
                  </li>
                  <li className="group flex items-center">
                    <a
                      href="#"
                      className="flex items-center font-semibold text-slate-500 py-2 mx-5 group-hover:text-slate-200 transition"
                    >
                      <div className="fill-slate-500 mr-2 group-hover:fill-slate-200">
                        <FaDiscord />
                      </div>
                      Discord
                    </a>
                  </li>
                  <li className="group flex items-center">
                    <a
                      href="/blog/"
                      className="flex items-center font-semibold text-slate-500 py-2 mx-5 group-hover:text-slate-200 transition"
                    >
                      <div className="fill-slate-500 mr-2 group-hover:fill-slate-200">
                        <MdArticle />
                      </div>
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex gap-4 items-center px-4">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0 ">
                <div className="border border-white/20 absolute inset-0[mask-image:linear-gradient(to_bottom, black, transparent)]"></div>
                <div className="border  absolute inset-0 border-white/40 rounded-lg [mask-image:linear-gradient(to_top, black, transparent)]"></div>
              </div>
              <span>Gabung sekarang</span>
            </button>
            <button className="hidden lg:block relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-r from-[#0d0c0e] to-[#8e8e8e] shadow-[0px_0px_12px_#8e8e8e]">
              <div className="absolute inset-0 ">
                <div className="border border-white/20 absolute inset-0[mask-image:linear-gradient(to_bottom, black, transparent)]"></div>
                <div className="border  absolute inset-0 border-white/40 rounded-lg [mask-image:linear-gradient(to_top, black, transparent)]"></div>
              </div>
              <span>Dashbord</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
