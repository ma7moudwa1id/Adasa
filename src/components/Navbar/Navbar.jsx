import React, { useState } from "react";
import icon from "../../assets/icon.png";
import { Link, NavLink } from "react-router";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
  const navLinksClass = ({ isActive }) =>
    `px-3.5 py-2.5 font-medium ${isActive ? "bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" : "text-gray-400 hover:text-white duration-300"}`;

  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="bg-neutral-900 px-4 md:px-6 lg:px-8 py-2 h-20 fixed top-0! left-0! right-0! z-50">
        <div className="container mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 h-full flex justify-between">
          <div className="icon h-full flex gap-2.5 items-center">
            <Link className="h-full" to={"/"}>
              <img src={icon} alt="Adasa-Logo" className="h-full" />
            </Link>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-0">عدسة</h3>
              <span className="text-[12px] text-orange-400">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center bg-black p-3 rounded-full">
            <ul className="flex gap-1.5">
              <NavLink className={navLinksClass} to="/" onClick={()=>window.scrollTo(0,0)}>
                الرئيسية
              </NavLink>
              <NavLink className={navLinksClass} to="/blog" onClick={()=>window.scrollTo(0,0)}>
                المدونة
              </NavLink>
              <NavLink className={navLinksClass} to="/about" onClick={()=>window.scrollTo(0,0)}>
                من نحن
              </NavLink>
            </ul>
          </nav>

          <div className="hidden lg:flex gap-1.5 actions">
            <button className="px-2.5 rounded-xl border border-white/0 hover:border hover:border-gray-800 hover:cursor-pointer group transition-colors duration-300">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="group-hover:text-orange-500 transition-colors duration-300 text-white m-0 p-0"
              />
            </button>
            <Link to={"/blog"} className="px-5.5 py-1.5 flex items-center bg-orange-500 rounded-full font-semibold hover:cursor-pointer hover:-translate-y-0.5 transition-transform duration-300">
              ابدأ القراءة
            </Link>
          </div>

          <div className="burger-menu flex items-center lg:hidden">
            <button
              className="group"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <FontAwesomeIcon
                icon={menu ? faXmark : faBars}
                className="text-2xl text-orange-500 group-hover:cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      <div className={`menu fixed top-20 z-40 ${menu ? "translate-y-0" : "translate-y-[-140%]"} left-0 right-0 transition-transform duration-500 bg-black p-2`}
      >
        <div className="inner border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2.5">
          <nav>
            <ul className="flex flex-col gap-1.5">
              <NavLink
                className={({ isActive }) =>
                  `px-3.5 py-2.5 font-medium ${isActive ? "border-2 rounded-xl border-orange-500 bg-orange-500/10 text-orange-500" : "text-gray-400 hover:text-white duration-300"}`
                }
                to="/"
              >
                الرئيسية
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `px-3.5 py-2.5 font-medium ${isActive ? "border-2 rounded-xl border-orange-500 bg-orange-500/10 text-orange-500" : "text-gray-400 hover:text-white duration-300"}`
                }
                to="/blog"
              >
                المدونة
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `px-3.5 py-2.5 font-medium ${isActive ? "border-2 rounded-xl border-orange-500 bg-orange-500/10 text-orange-500" : "text-gray-400 hover:text-white duration-300"}`
                }
                to="/about"
              >
                من نحن
              </NavLink>
            </ul>
          </nav>
          <div className="grid">
            <button className="mt-3 py-1.5 bg-orange-500 rounded-full font-semibold hover:cursor-pointer hover:-translate-y-0.5 transition-transform duration-300">
              ابدأ القراءة
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
