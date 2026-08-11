import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";
import Card from "./card";
export default function LatestArticles({posts}) {
  return (
    <>
      <section className="py-15">
        <div className="container mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="badge w-fit text-orange-500">الأحدث</div>
          <h2 className="mt-5 text-[clamp(3rem,5vw,4rem)] font-bold">
            أحدث المقالات
          </h2>
          <div className="mt-3 flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
            <span className="inline-block text-gray-300 text-lg">
              محتوى جديد طازج من المطبعة
            </span>
            <Link
              to={"/blog"}
              className="text-orange-500 font-semibold text-lg"
            >
              عرض جميع المقالات <FontAwesomeIcon icon={faArrowLeft}/>
            </Link>
          </div>

          <div className="cards mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.slice(3,6).map((post)=>(
              <Card post={post}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
