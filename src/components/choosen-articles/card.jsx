import { faArrowLeft, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import React from "react";

export default function Card({ post }) {
  const { image, slug, category, readTime, title, excerpt, author, date } =
    post;
  return (
    <>
      <div className="card relative group hover:cursor-pointer flex flex-col h-145 md:h-100 md:flex-row rounded-2xl overflow-hidden">
        <div className="card-img overflow-hidden relative w-full h-1/2 md:w-1/2 md:h-full">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={image}
            alt={slug}
          />
          <div className="overlay absolute inset-0 p-4.5 group-hover:bg-linear-to-t group-hover:from-black group-hover:to-70% transition-colors duration-300">
            <div className="btn-primary w-fit py-1.5 px-3.5 rounded-full">
              مميز
            </div>
          </div>
        </div>
        <div className="content p-9 bg-neutral-900 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-between">
          <div>
            <div className="flex gap-4 items-center">
              <div className="badge w-fit text-orange-500 text-sm font-bold">
                {category}
              </div>
              <div className="text-gray-500">
                <FontAwesomeIcon icon={faClock} /> {readTime}
              </div>
            </div>

            <h3 className="text-[clamp(1rem,3.2vw,2rem)] mt-4 font-semibold group-hover:text-orange-500 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-400 text-base mt-2 line-clamp-2">
              {excerpt}
            </p>
          </div>

          <div className="author flex justify-between items-center">
            <div className="right flex gap-2 items-center">
              <div className="relative w-fit">
                <img
                  className="size-12 rounded-full border-2 border-gray-800"
                  src={author.avatar}
                  alt={author.name}
                />
                <div className="absolute border border-gray-800 left-0 bottom-0 status size-3 rounded-full bg-orange-500"></div>
              </div>
              <div>
                <h5 className="font-semibold text-sm">{author.name}</h5>
                <span className="inline-block text-xs text-gray-400">
                  {date}
                </span>
              </div>
            </div>
            <div className="left">
              <Link
                className="text-orange-500 font-semibold"
                to={`./blog/${category}/${slug}`}
              >
                اقرأ المقال <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
            </div>
          </div>
        </div>
        <Link className="absolute inset-0" to={`./blog/${category}/${slug}`}></Link>
      </div>
    </>
  );
}
