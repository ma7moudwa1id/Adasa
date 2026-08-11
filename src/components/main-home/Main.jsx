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
      <section className="relative isolate overflow-hidden pt-28 pb-12 lg:min-h-dvh flex flex-col justify-center items-center">
        <div className="pointer-events-none absolute inset-0 -z-10 pattern">
          <div className="absolute left-[5%] top-[20%] h-100 w-90 bg-radial from-orange-500/30 to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 md:px-6 lg:px-8">
          <div className="w-full max-w-5xl text-center flex flex-col items-center justify-center">
            <div className="badge text-slate-200 w-fit">مرحباً بك في عدسة</div>

            <h1 className="mt-8 flex w-full flex-col wrap-break-word text-center text-[clamp(2.5rem,5vw,6rem)] font-bold leading-tight">
              <span>
                اكتشف{" "}
                <span className="bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  فن
                </span>
              </span>

              <span>التصوير الفوتوغرافي</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-[clamp(1.1rem,1.5vw,1.5rem)] leading-relaxed text-gray-400">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="btn-actions mt-12 flex w-full flex-wrap justify-center gap-4">
              <Link
                className="group grow rounded-full bg-orange-500 px-5 py-4 text-center text-lg font-medium transition-transform duration-200 hover:-translate-y-0.5 md:grow-0"
                to="/blog"
              >
                استكشف المقالات{" "}
                <FontAwesomeIcon
                  className="text-sm transition-transform duration-200 group-hover:-translate-x-0.5"
                  icon={faArrowLeftLong}
                />
              </Link>

              <Link
                className="group grow rounded-full border border-gray-600 bg-black px-5 py-4 text-center text-lg font-medium transition-colors duration-200 hover:border-orange-500 hover:bg-orange-800/20 hover:text-orange-500 md:grow-0"
                to="/about"
              >
                <FontAwesomeIcon icon={faCircleInfo} /> اعرف المزيد
              </Link>
            </div>

            <div className="mt-12 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex flex-col items-center rounded-2xl border border-gray-800 bg-neutral-900 px-3 py-4 transition-transform duration-200 hover:scale-105">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="mb-3 text-3xl text-orange-600"
                />

                <h3 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  +50
                </h3>

                <span className="text-gray-400">مقالة</span>
              </div>

              <div className="flex flex-col items-center rounded-2xl border border-gray-800 bg-neutral-900 px-3 py-4 transition-transform duration-200 hover:scale-105">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="mb-3 text-3xl text-orange-600"
                />

                <h3 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  +10 ألف
                </h3>

                <span className="text-gray-400">قارئ</span>
              </div>

              <div className="flex flex-col items-center rounded-2xl border border-gray-800 bg-neutral-900 px-3 py-4 transition-transform duration-200 hover:scale-105">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  className="mb-3 text-3xl text-orange-600"
                />

                <h3 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  4
                </h3>

                <span className="text-gray-400">تصنيفات</span>
              </div>

              <div className="flex flex-col items-center rounded-2xl border border-gray-800 bg-neutral-900 px-3 py-4 transition-transform duration-200 hover:scale-105">
                <FontAwesomeIcon
                  icon={faPen}
                  className="mb-3 text-3xl text-orange-600"
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
