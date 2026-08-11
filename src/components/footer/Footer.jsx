import {
  faGithub,
  faSquareLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faCopyright,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

export default function Footer({ data }) {
  const { siteInfo } = data;

  return (
    <>
      <section className="pt-15 pb-8 bg-neutral-950 border-t border-neutral-600">
        <div className="container mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="child space-y-4">
              <div className="flex gap-3 items-center">
                <div className="size-12 flex justify-center items-center rounded-xl bg-linear-to-tl from-orange-600 to-orange-500">
                  <span className="text-lg font-bold">ع</span>
                </div>
                <h6 className="text-xl font-semibold">{siteInfo.name}</h6>
              </div>
              <p className="text-neutral-500 text-sm">{siteInfo.description}</p>
              <div className="icons flex gap-4">
                <Link
                  to={siteInfo.social.twitter}
                  className="icon size-12 bg-neutral-900 border border-neutral-800 flex justify-center items-center rounded-xl group hover:bg-linear-to-tl from-orange-600 to-orange-500 hover:scale-110 transition-all  duration-300"
                >
                  <FontAwesomeIcon
                    className="text-gray-400 text-lg group-hover:text-white transition-colors duration-300"
                    icon={faXTwitter}
                  />
                </Link>
                <Link
                  to={siteInfo.social.github}
                  className="icon size-12 bg-neutral-900 border border-neutral-800 flex justify-center items-center rounded-xl group hover:bg-linear-to-tl from-orange-600 to-orange-500 hover:scale-110 transition-all  duration-300"
                >
                  <FontAwesomeIcon
                    className="text-gray-400 text-lg group-hover:text-white transition-colors duration-300"
                    icon={faGithub}
                  />
                </Link>
                <Link
                  to={siteInfo.social.linkedin}
                  className="icon size-12 bg-neutral-900 border border-neutral-800 flex justify-center items-center rounded-xl group hover:bg-linear-to-tl from-orange-600 to-orange-500 hover:scale-110 transition-all  duration-300"
                >
                  <FontAwesomeIcon
                    className="text-gray-400 text-lg group-hover:text-white transition-colors duration-300"
                    icon={faSquareLinkedin}
                  />
                </Link>
                <Link
                  to={siteInfo.social.youtube}
                  className="icon size-12 bg-neutral-900 border border-neutral-800 flex justify-center items-center rounded-xl group hover:bg-linear-to-tl from-orange-600 to-orange-500 hover:scale-110 transition-all  duration-300"
                >
                  <FontAwesomeIcon
                    className="text-gray-400 text-lg group-hover:text-white transition-colors duration-300"
                    icon={faYoutube}
                  />
                </Link>
              </div>
            </div>
            <div className="child space-y-4">
              <div className="flex gap-2 items-center">
                <div className="w-8 h-0.5 bg-linear-to-r from-orange-600 to-orange-500"></div>
                <h5 className="font-semibold">استكشف</h5>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-2 items-center group">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="text-orange-500 hidden! group-hover:block! transition-[display] duration-300"
                  />
                  <Link
                    to={"/"}
                    className="inline-block font-medium text-neutral-500 group-hover:text-orange-500 transition-colors duration-300"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li className="flex gap-2 items-center group">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="text-orange-500 hidden! group-hover:block! transition-[display] duration-300"
                  />
                  <Link
                    to={"/blog"}
                    className="inline-block font-medium text-neutral-500 group-hover:text-orange-500 transition-colors duration-300"
                  >
                    المدونة
                  </Link>
                </li>
                <li className="flex gap-2 items-center group">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="text-orange-500 hidden! group-hover:block! transition-[display] duration-300"
                  />
                  <Link
                    to={"/about"}
                    className="inline-block font-medium text-neutral-500 group-hover:text-orange-500 transition-colors duration-300"
                  >
                    من نحن
                  </Link>
                </li>
              </ul>
            </div>

            <div className="child space-y-4">
              <div className="flex gap-2 items-center">
                <div className="w-8 h-0.5 bg-linear-to-r from-orange-600 to-orange-500"></div>
                <h5 className="font-semibold">التصنيفات</h5>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-2 items-center group">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="text-orange-500 hidden! group-hover:block! transition-[display] duration-300"
                  />
                  <Link
                    to={`/blog/${data.categories[0].name}`} onClick={()=>window.scrollTo(0,0)}
                    className="inline-block font-medium text-neutral-500 group-hover:text-orange-500 transition-colors duration-300"
                  >
                    {data.categories[0].name}
                  </Link>
                </li>
                <li className="flex gap-2 items-center group">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="text-orange-500 hidden! group-hover:block! transition-[display] duration-300"
                  />
                  <Link
                    to={`/blog/${data.categories[1].name}`} onClick={()=>window.scrollTo(0,0)}
                    className="inline-block font-medium text-neutral-500 group-hover:text-orange-500 transition-colors duration-300"
                  >
                    {data.categories[1].name}
                  </Link>
                </li>
                <li className="flex gap-2 items-center group">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="text-orange-500 hidden! group-hover:block! transition-[display] duration-300"
                  />
                  <Link
                    to={`/blog/${data.categories[2].name}`} onClick={()=>window.scrollTo(0,0)}
                    className="inline-block font-medium text-neutral-500 group-hover:text-orange-500 transition-colors duration-300"
                  >
                    {data.categories[2].name}{" "}
                  </Link>
                </li>
                <li className="flex gap-2 items-center group">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="text-orange-500 hidden! group-hover:block! transition-[display] duration-300"
                  />
                  <Link
                    to={`/blog/${data.categories[3].name}`} onClick={()=>window.scrollTo(0,0)}
                    className="inline-block font-medium text-neutral-500 group-hover:text-orange-500 transition-colors duration-300"
                  >
                    {data.categories[3].name}{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="child space-y-4">
              <div className="flex gap-2 items-center">
                <div className="w-8 h-0.5 bg-linear-to-r from-orange-600 to-orange-500"></div>
                <h5 className="font-semibold">ابقي علي اطلاع</h5>
              </div>
              <p className="text-sm text-neutral-500">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="ادخل بريدك الالكتروني"
                  className="w-full p-3.5 bg-neutral-900 border border-neutral-800 focus:outline-0 rounded-xl"
                />
                <button className="btn-primary w-full p-3.5 rounded-full font-semibold cursor-pointer hover:-translate-y-0.5 transition-transform duration-300">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 text-center justify-center md:justify-between border-t border-neutral-800 w-[95%] md:w-[80%] mx-auto mt-8 pt-8">
          <div>
            <span className="text-neutral-500 text-sm">
              صنع بكل حب ❤️ جميع الحقوق محفوظة 2026{" "}
              <FontAwesomeIcon icon={faCopyright} />{" "}
            </span>
          </div>
          <div className="flex gap-4 text-neutral-500">
            <span>سياسة الخصوصية</span>
            <span>شروط الخدمة</span>
          </div>
        </div>
      </section>
    </>
  );
}
