import {
  faArrowLeftLong,
  faCircleInfo,
  faFileLines,
  faFolderOpen,
  faPen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

export default function Main() {
  return (
    <>
      <section className=" min-h-dvh flex flex-col justify-center relative py-20">
        <div className="absolute -z-10 inset-0 pattern">
          <div className="overlay absolute top-[20%] left-[5%] w-100 h-100 bg-radial from-orange-500"></div>
        </div>

        <div className="container mx-auto mt-20 p-2.5 flex flex-col items-center">
          <div className="badge text-slate-200">
            مرحباً بك في عدسة
          </div>
          <div className="text-center">
            <h1 className="text-[clamp(3rem,5vw,6rem)] text-center mt-8 font-bold flex flex-col">
              <span>
                اكتشف{" "}
                <span className="bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  فن
                </span>
              </span>
              التصوير الفوتوغرافي
            </h1>
            <p className="mt-8 text-gray-400 text-[clamp(0.5rem,3.2vh,2rem)]">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
            <div className="btn-actions mt-15 flex flex-wrap justify-center gap-5">
              <Link
                className="grow md:grow-0 group btn-primary py-4 px-4.5 font-medium text-xl rounded-full inline-block hover:-translate-y-0.5 transition-transform duration-200"
                to={"/blog"}
              >
                استكشف المقالات{" "}
                <FontAwesomeIcon
                  className="text-sm group-hover:-translate-x-0.5 transition-transform duration-200"
                  icon={faArrowLeftLong}
                />
              </Link>
              <Link
                className="grow md:grow-0 group bg-black border border-gray-600 py-4 px-4.5 font-medium text-xl rounded-full inline-block hover:bg-orange-800/20 hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                to={"/about"}
              >
                <FontAwesomeIcon icon={faCircleInfo} /> اعرف المزيد
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mt-15">
              <div className="py-3.5 flex flex-col col-span-1 items-center bg-neutral-900 border border-gray-800 rounded-2xl hover:scale-105 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="text-orange-600 text-3xl mb-3"
                />
                <h3 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  +50
                </h3>
                <span className="text-gray-400">مقالة</span>
              </div>
              <div className="py-3.5 flex flex-col col-span-1 items-center bg-neutral-900 border border-gray-800 rounded-2xl hover:scale-105 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-orange-600 text-3xl mb-3"
                />
                <h3 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  +10 ألف
                </h3>
                <span className="text-gray-400">قارئ</span>
              </div>
              <div className="py-3.5 flex flex-col col-span-1 items-center bg-neutral-900 border border-gray-800 rounded-2xl hover:scale-105 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  className="text-orange-600 text-3xl mb-3"
                />
                <h3 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  4
                </h3>
                <span className="text-gray-400">تصنيفات</span>
              </div>
              <div className="py-3.5 flex flex-col col-span-1 items-center bg-neutral-900 border border-gray-800 rounded-2xl hover:scale-105 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faPen}
                  className="text-orange-600 text-3xl mb-3"
                />
                <h3 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  6
                </h3>
                <span className="text-gray-400">كاتب</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
