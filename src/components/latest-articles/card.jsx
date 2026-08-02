import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

export default function Card({ post }) {
  const { image, title, category, date, readTime, excerpt, author,slug } = post;
  return (
    <>
      <div className="card relative bg-neutral-900 rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
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
        <div className="content p-4.5">
          <div className="space-y-4">
            <ul className="flex gap-4">
              <li className="text-gray-500 text-sm">
                <FontAwesomeIcon icon={faClock} /> {readTime}
              </li>
              <li className="text-gray-500 text-sm">{date}</li>
            </ul>

            <h3 className="text-[clamp(1rem,1.3vw,2rem)] font-semibold group-hover:text-orange-500 transition-colors duration-300">
              {title}
            </h3>

            <p className="text-neutral-400 font-medium text-sm line-clamp-2">
              {excerpt}
            </p>
          </div>

          <hr className="text-neutral-800 mt-5" />

          <div className="mt-5 flex justify-between items-center">
            <div className="right flex gap-3 items-center">
              <img
                className="size-8 rounded-full"
                src={author.avatar}
                alt={author.name}
              />
              <div>
                <h5 className="font-semibold text-sm m-0">
                  {author.name}
                </h5>
                <span className="inline-block text-xs text-neutral-500 font-medium">
                  {author.role}
                </span>
              </div>
            </div>
            <div className="left">
              <div className="size-8 rounded-full flex items-center justify-center bg-orange-900/50 border border-orange-600 group-hover:bg-orange-500">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-sm text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <Link to={`./blog/${category}/${slug}`} className="absolute inset-0"></Link>
      </div>
    </>
  );
}
