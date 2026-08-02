import { faArrowLeft, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";
import Card from "./card";

export default function Articles({ data }) {
  // console.log(data);
  const { posts } = data;
  return (
    <>
      <section className="py-15">
        <div className="container w-[95%] md:w-[80%] mx-auto">
          <div className="badge w-fit text-orange-500">مميز</div>
          <h2 className="mt-5 text-[clamp(3rem,5vw,4rem)] font-bold">
            مقالات مختارة
          </h2>
          <div className="mt-3 flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
            <span className="inline-block text-gray-300 text-lg">
              محتوى منتقى لبدء رحلة تعلمك
            </span>
            <Link
              to={"/blog"}
              className="btn-primary py-2.5 px-3.5 rounded-xl font-medium"
            >
              عرض الكل
            </Link>
          </div>

          <div className="cards mt-8 space-y-10">
            {posts.slice(0, 3).map((post) => (
              <Card post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
