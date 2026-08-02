import {
  faAngleLeft,
  faArrowLeft,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";
export default function Article({ post,grid }) {
  const { image, title, date, readTime, category, author, excerpt, slug } =
    post;
  return (
    <>
      <div className={`${grid?"block":"hidden"} article relative bg-neutral-900 rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}>
        <div className="image relative overflow-hidden">
          <img
            className="group-hover:scale-105 transition-transform duration-300"
            src={image}
            alt={title}
          />
          <div className="overlay absolute inset-0 p-3.5 group-hover:bg-linear-to-t group-hover:from-black group-hover:to-70% transition-colors duration-300">
            <div className="label p-1.5 px-3.5 bg-black rounded-full w-fit text-xs font-semibold">
              {category}
            </div>
          </div>
        </div>
        <div className="content p-4.5 flex flex-col justify-between">
          <div className="space-y-4">
            <ul className="flex gap-4">
              <li className="text-gray-500 text-sm">
                <FontAwesomeIcon icon={faClock} /> {readTime}
              </li>
              <li className="text-gray-500 text-sm">{date}</li>
            </ul>

            <h3 className="text-[clamp(1rem,1.4vw,2rem)] font-semibold group-hover:text-orange-500 transition-colors duration-300">
              {title}
            </h3>

            <p className="text-neutral-400 font-medium text-sm line-clamp-2">
              {excerpt}
            </p>
          </div>

          <div className="">
            <hr className="text-neutral-800 mt-5" />

            <div className="mt-5 flex justify-between items-center">
              <div className="right flex gap-3 items-center">
                <img
                  className="size-8 rounded-full"
                  src={author.avatar}
                  alt={author.name}
                />
                <div>
                  <h5 className="font-semibold text-sm m-0">{author.name}</h5>
                  <span className="inline-block text-xs text-neutral-500 font-medium">
                    {author.role}
                  </span>
                </div>
              </div>
              <div className="left">
                <div className="size-8 rounded-full flex items-center justify-center bg-orange-900/50 border border-orange-600 group-hover:bg-orange-500">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="text-sm text-orange-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link to={`/blog/${category}/${slug}`} className="absolute inset-0"></Link>
      </div>

      <div className={`${!grid?"block":"hidden"} card relative group hover:cursor-pointer flex flex-col h-120 md:h-60 md:flex-row rounded-2xl overflow-hidden`}>
        <div className="card-img overflow-hidden relative w-full md:w-120 h-1/2 md:h-full">
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
        <div className="content p-9 bg-neutral-900 w-full flex flex-col justify-between">
          <div>
            <div className="flex gap-4 items-center">
              <div className="badge w-fit text-orange-500 text-sm font-bold">
                {category}
              </div>
              <div className="text-gray-500">
                <FontAwesomeIcon icon={faClock} /> {readTime}
              </div>
            </div>

            <h3 className="text-[3vw] md:text-[1.6vw] mt-4 font-semibold group-hover:text-orange-500 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-400 text-base mt-3 line-clamp-2">
              {excerpt}
            </p>
          </div>

          <div className="author flex justify-between items-center mt-5">
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
                to={`./blog${slug}`}
              >
                اقرأ المقال <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
            </div>
          </div>
        </div>
        <Link className="absolute inset-0" to={`/blog/${category}/${slug}`}></Link>
      </div>
    </>
  );
}
