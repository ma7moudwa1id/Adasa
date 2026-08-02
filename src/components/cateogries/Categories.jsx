import {
  faMountain,
  faSliders,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

export default function Categories({ categories }) {
  return (
    <>
      <section className="bg-neutral-950 py-15">
        <div className="container w-[95%] md:w-[80%] mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="badge text-orange-500 w-fit">التصنيفات</div>
            <div className="text-center">
              <h1 className="text-[clamp(2rem,4vw,4rem)] text-center mt-2 font-bold flex flex-col">
                استكشف حسب الموضوع
              </h1>
              <p className="mt-4 text-gray-400 text-lg">
                اعثر على محتوى مصمم حسب اهتماماتك
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-4">
            <div className="category relative space-y-3 bg-neutral-900 p-4.5 border-2 border-neutral-800 rounded-2xl hover:cursor-pointer hover:bg-linear-to-tl hover:from-orange-400 hover:to-orange-700 group transition-colors duration-300">
              <div className="icon size-13 rounded-xl bg-orange-900/50 group-hover:bg-orange-400 transition-colors duration-300 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-2xl text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h5 className="m-0 font-bold">{categories[0].name}</h5>
              <span className="inline-block text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                {categories[0].count} مقالة
              </span>
              <Link to={`/blog/${categories[0].name}`} className="absolute inset-0"></Link>
            </div>

            <div className="category relative space-y-3 bg-neutral-900 p-4.5 border-2 border-neutral-800 rounded-2xl hover:cursor-pointer hover:bg-linear-to-tl hover:from-orange-400 hover:to-orange-700 group transition-colors duration-300">
              <div className="icon size-13 rounded-xl bg-orange-900/50 group-hover:bg-orange-400 transition-colors duration-300 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-2xl text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h5 className="m-0 font-bold">{categories[1].name}</h5>
              <span className="inline-block text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                {categories[1].count} مقالة
              </span>
              <Link to={`/blog/${categories[1].name}`} className="absolute inset-0"></Link>
            </div>

            <div className="category relative space-y-3 bg-neutral-900 p-4.5 border-2 border-neutral-800 rounded-2xl hover:cursor-pointer hover:bg-linear-to-tl hover:from-orange-400 hover:to-orange-700 group transition-colors duration-300">
              <div className="icon size-13 rounded-xl bg-orange-900/50 group-hover:bg-orange-400 transition-colors duration-300 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faMountain}
                  className="text-2xl text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h5 className="m-0 font-bold">{categories[2].name}</h5>
              <span className="inline-block text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                {categories[2].count} مقالة
              </span>
              <Link to={`/blog/${categories[2].name}`} className="absolute inset-0"></Link>
            </div>

            <div className="category relative space-y-3 bg-neutral-900 p-4.5 border-2 border-neutral-800 rounded-2xl hover:cursor-pointer hover:bg-linear-to-tl hover:from-orange-400 hover:to-orange-700 group transition-colors duration-300">
              <div className="icon size-13 rounded-xl bg-orange-900/50 group-hover:bg-orange-400 transition-colors duration-300 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faSliders}
                  className="text-2xl text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h5 className="m-0 font-bold">{categories[3].name}</h5>
              <span className="inline-block text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                {categories[3].count} مقالة
              </span>
              <Link to={`/blog/${categories[3].name}`} className="absolute inset-0"></Link>
            </div>

            <div className="category relative space-y-3 bg-neutral-900 p-4.5 border-2 border-neutral-800 rounded-2xl hover:cursor-pointer hover:bg-linear-to-tl hover:from-orange-400 hover:to-orange-700 group transition-colors duration-300">
              <div className="icon size-13 rounded-xl bg-orange-900/50 group-hover:bg-orange-400 transition-colors duration-300 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-2xl text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h5 className="m-0 font-bold">{categories[4].name}</h5>
              <span className="inline-block text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                {categories[4].count} مقالة
              </span>
              <Link to={`/blog/${categories[4].name}`} className="absolute inset-0"></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
