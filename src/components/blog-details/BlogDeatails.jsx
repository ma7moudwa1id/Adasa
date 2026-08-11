import {
  faLinkedin,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt, faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faCalendar,
  faCamera,
  faEnvelope,
  faHome,
  faLink,
  faList,
  faShare,
  faShareNodes,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import BlogsSuggested from "./BlogsSuggested";

export default function BlogDeatails({ post, posts }) {
  const {
    id,
    image,
    title,
    date,
    readTime,
    category,
    author,
    excerpt,
    slug,
    content,
    tags,
  } = post;

  const sections = content.split("##").slice(1);

  const [suggested, setSuggested] = useState([...posts]);
  window.scrollTo(0, 0);
  useEffect(() => {
    const arr = posts.filter((p) => p.category === category && p.id !== id);
    setSuggested(arr);
  }, [post]);

  return (
    <>
      <section className="py-20">
        <div className="image relative w-full h-[70vh] lg:h-[80vh]">
          <img className="w-full h-full object-cover" src={image} alt={title} />
          <div className="overlay absolute inset-0 bg-linear-to-t from-black via-black/80 to-100%"></div>
          <div className="content absolute top-20 left-1/2 bottom-20 -translate-x-1/2 w-[95%] flex flex-col justify-between">
            <div className="w-fit bg-black/40 py-1 px-2.5 rounded-full flex items-center">
              <Link to={"/"}>
                <FontAwesomeIcon icon={faHome} />
              </Link>
              <FontAwesomeIcon icon={faAngleLeft} className="text-gray-300" />
              <Link to={"/blog"} className="text-gray-300 text-sm font-medium">
                المدونة
              </Link>
              <FontAwesomeIcon icon={faAngleLeft} className="text-gray-300" />
              <span className="text-orange-400 text-sm text-center font-semibold">
                {category}
              </span>
            </div>
            <div className="flex flex-col justify-between items-center mt-15">
              <div className=" w-full lg:w-[75%] space-y-5 ">
                <div className="flex gap-4 items-center">
                  <div className="bg-orange-500 font-semibold rounded-full py-1 px-1.5 w-fit text-sm">
                    {category}
                  </div>
                  <div className="flex gap-2 items-center text-gray-300 font-medium">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>{date}</span>
                  </div>
                  <div className="flex gap-2 items-center text-gray-300 font-medium">
                    <FontAwesomeIcon icon={faClock} />
                    <span>{readTime}</span>
                  </div>
                </div>

                <div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                    {title}
                  </h1>

                  <div className="flex gap-4 p-4 bg-neutral-800 border border-neutral-700 rounded-xl w-fit">
                    <div className="size-15 rounded-full border-2 border-orange-500 overflow-hidden">
                      <img src={author.avatar} alt={author.name} />
                    </div>
                    <div>
                      <h6 className="text-lg font-medium">{author.name}</h6>
                      <span className="inline-block text-sm text-gray-400 font-medium">
                        {author.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mt-8 grid grid-cols-12 gap-y-8 gap-x-4">
            <div className="right space-y-12 col-span-full lg:col-span-9 order-2 lg:order-1">
              <div className="badge rounded-xl! p-4!">
                <span className="italic">{excerpt}</span>
              </div>

              <div>
                <h3 className="text-neutral-300 text-lg font-medium">
                  {content.split("##")[0]}
                </h3>
              </div>

              {sections.map((section, index) => {
                const [title, ...body] = section.split("\n\n");

                return (
                  <section
                    key={index}
                    className="space-y-6 scroll-mt-30"
                    id={`section-${index + 1}`}
                  >
                    <div className="flex gap-4 items-center">
                      <div className="badge p-1! w-fit rounded-xl!">
                        <FontAwesomeIcon
                          icon={faCamera}
                          className="text-orange-500 text-3xl"
                        />
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold">
                        {title}
                      </h2>
                    </div>

                    <div>
                      <p className="text-neutral-300 text-lg font-medium whitespace-pre-line">
                        {body}
                      </p>
                    </div>
                  </section>
                );
              })}

              <div className="space-y-6">
                <div className="tags">
                  <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-700 space-y-6">
                    <div className="flex gap-4 items-center">
                      <div className="p-2.5 bg-orange-900/50 flex items-center justify-center border border-orange-800 rounded-xl w-fit">
                        <FontAwesomeIcon
                          icon={faTag}
                          className="text-orange-500 text-xl"
                        />
                      </div>
                      <h6 className="text-lg font-bold">الوسوم</h6>
                    </div>

                    <div>
                      <ul className="flex gap-2 flex-wrap">
                        {tags.map((tag) => (
                          <li className="text-neutral-300 px-4 py-2 rounded-full bg-neutral-800">
                            #{tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="share">
                  <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-700 flex flex-col gap-4 lg:flex-row justify-between">
                    <div className="flex gap-4 items-center">
                      <div className="p-2.5 bg-orange-900/50 flex items-center justify-center border border-orange-800 rounded-xl w-fit">
                        <FontAwesomeIcon
                          icon={faShareNodes}
                          className="text-orange-500 text-xl"
                        />
                      </div>
                      <h6 className="text-lg font-bold">شارك المقال</h6>
                    </div>

                    <div>
                      <ul className="flex gap-4">
                        <li className="p-3 bg-neutral-900 border border-neutral-700 w-fit rounded-xl flex justify-center items-center text-neutral-400 hover:bg-blue-400 hover:text-white transition-colors duration-300 cursor-pointer">
                          <FontAwesomeIcon icon={faXTwitter} />
                        </li>
                        <li className="p-3 bg-neutral-900 border border-neutral-700 w-fit rounded-xl flex justify-center items-center text-neutral-400 hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </li>
                        <li className="p-3 bg-neutral-900 border border-neutral-700 w-fit rounded-xl flex justify-center items-center text-neutral-400 hover:bg-green-500 hover:text-white transition-colors duration-300 cursor-pointer">
                          <FontAwesomeIcon icon={faWhatsapp} />
                        </li>
                        <li className="p-3 bg-neutral-900 border border-neutral-700 w-fit rounded-xl flex justify-center items-center text-neutral-400 hover:bg-orange-400 hover:text-white transition-colors duration-300 cursor-pointer">
                          <FontAwesomeIcon icon={faLink} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="author">
                  <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-700 flex gap-4 flex-col items-center lg:flex-row lg:justify-start">
                    <div className="w-20 rounded-xl overflow-hidden border border-orange-800">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="size-full"
                      />
                    </div>
                    <div className="space-y-2 text-center lg:text-start">
                      <span className="text-orange-500 text-sm font-bold inline-block">
                        كاتب المقال
                      </span>
                      <div>
                        <h6 className="text-xl font-bold">{author.name}</h6>
                        <span className="inline-block text-neutral-500 font-medium">
                          {author.role}
                        </span>
                      </div>
                      <span className="text-sm text-neutral-500 font-medium">
                        مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                        الفوتوغرافي.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left col-span-full lg:col-span-3 order-1 lg:order-2">
              <div className="lg:sticky lg:top-22 space-y-6">
                <div className="sections space-y-4 p-6 bg-neutral-900 border border-neutral-600 rounded-xl">
                  <div className="flex gap-2 items-center">
                    <div className="py-3 px-2 bg-orange-900/50 border border-orange-600 flex items-center justify-center rounded-xl w-fit">
                      <FontAwesomeIcon
                        icon={faList}
                        className="text-orange-500"
                      />
                    </div>
                    <h5 className="font-bold">محتويات المقال</h5>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {post.content.split("##").map((c, i) => (
                        <li className="p-2 flex items-center gap-2 hover:bg-orange-900/50 hover:text-orange-500 group transition-colors duration-300 cursor-pointer rounded-xl first:p-0 relative">
                          {i !== 0 ? (
                            <>
                              <div className="size-8 flex items-center justify-center bg-neutral-800 rounded-xl group-hover:bg-orange-900/50 group-hover:text-orange-500 transition-colors duration-300">
                                {i}
                              </div>{" "}
                              {c.split("\n\n")[0]}
                            </>
                          ) : (
                            ""
                          )}
                          <a
                            className="absolute inset-0"
                            href={`#section-${i}`}
                          ></a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-neutral-900 border-neutral-600 rounded-xl flex gap-2 justify-center items-center">
                  <div className="flex flex-wrap flex-col gap-2 justify-center items-center bg-black w-1/2 text-center h-40 p-4 rounded-xl">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-orange-500 text-xl font-bold"
                    />
                    <h4 className="font-semibold">{readTime}</h4>
                    <span className="inline-block text-sm text-neutral-400">
                      وقت القراءة
                    </span>
                  </div>
                  <div className="flex flex-wrap flex-col gap-2 justify-center items-center bg-black w-1/2 text-center h-40 p-4 rounded-xl">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="text-orange-500 text-xl font-bold"
                    />
                    <h4 className="font-semibold">{date}</h4>
                    <span className="inline-block text-sm text-neutral-400">
                      وقت النشر
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-orange-500/15 border border-orange-800 rounded-xl flex flex-col gap-3 items-center justify-center">
                  <div className="size-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-orange-500 text-xl"
                    />
                  </div>
                  <h4 className="font-semibold">لا تفوت جديدنا</h4>
                  <span className="inline-block text-neutral-400 text-sm font-medium">
                    اشترك للحصول على أحدث المقالات
                  </span>
                  <button className="btn-primary p-3 w-full rounded-xl font-bold cursor-pointer hover:opacity-95">
                    تصفح المزيد
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-4 mt-10 items-center">
            <div>
              <h4 className="text-2xl font-bold">مقالات قد تعجبك</h4>
              <span className="text-sm text-neutral-400">
                استكشف المزيد من المحتوي المميز
              </span>
            </div>

            <div>
              <Link to={"/blog"} className="text-orange-500 font-bold text-lg">
                عرض الكل
              </Link>
            </div>
          </div>
          <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggested.slice(0, 3).map((p) => (
              <BlogsSuggested post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
