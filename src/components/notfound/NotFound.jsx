import { faFaceTired } from "@fortawesome/free-regular-svg-icons/faFaceTired";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import React from "react";
import {
  faBlog,
  faFile,
  faFileCsv,
  faFileShield,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <>
      <section className="py-20 relative">
        <div className="absolute -z-10 inset-0 pattern">
          <div className="overlay absolute top-[20%] left-[5%] w-100 h-100 bg-radial from-orange-500"></div>
        </div>
        <div className="container mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="space-y-8 mt-10 flex flex-col justify-center items-center">
            <h1 className="text-9xl font-bold bg-linear-to-r from-orange-500 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              404
            </h1>
            <div className="size-30 flex justify-center items-center rounded-full bg-orange-800/50 border border-orange-500">
              <FontAwesomeIcon
                icon={faFaceTired}
                className="text-6xl text-orange-400"
              />
            </div>
            <h2 className="text-2xl font-semibold">عفواً! الصفحة غير موجودة</h2>
            <span className="inline-block text-neutral-400 text-lg font-medium">
              الصفحة التي تبحث عنها غير موجودة او تم نقلها. دعنا نعيدك إالي
              المساء الصحيح
            </span>
            <div className="btn-actions flex flex-wrap justify-center gap-5">
              <Link
                className="grow text-center md:grow-0 group btn-primary py-4 px-4.5 font-medium text-xl rounded-full inline-block hover:-translate-y-0.5 transition-transform duration-200"
                to={"/"}
              >
                <FontAwesomeIcon
                  className="text-sm"
                  icon={faHome}
                />{" "}
                الذهاب للرئيسية
              </Link>
              <Link
                className="grow text-center md:grow-0 group bg-black border border-gray-600 py-4 px-4.5 font-medium text-xl rounded-full inline-block hover:bg-orange-800/20 hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                to={"/blog"}
              >
                <FontAwesomeIcon icon={faFile} /> تصفح المقالات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
