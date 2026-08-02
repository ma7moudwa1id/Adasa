import {
  faBars,
  faSearch,
  faSquare,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Article from "./Article";
import { useParams, Link } from "react-router";

export default function AllArticles({ posts, categories }) {
  const [search, setSearch] = useState("");
  const { category } = useParams();
  const [filters, setFilters] = useState("all");
  const [filterdPosts, setFilterdPosts] = useState([...posts]);
  const [grid, setGrid] = useState(true);

  useEffect(() => {
    if (category) {
      setFilters(category);
      if (category === "all") {
        setFilterdPosts([...posts]);
      } else {
        setFilterdPosts(posts.filter((post) => post.category === category));
      }
    }
    if (search) {
      posts.filter((post) => post.title.includes(search)).length
        ? setFilterdPosts(posts.filter((post) => post.title.includes(search)))
        : setFilterdPosts([]);
    }
  }, [category, search]);

  return (
    <>
      <section className="py-15">
        <div className="sticky py-3.5 top-20 z-10 bg-black">
          <div className="flex justify-center lg:justify-between flex-wrap gap-4 mx-auto w-[95%] md:w-[80%]">
            <div className="search grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث في المقالات"
                  className="bg-neutral-900 focus:outline-0 border border-neutral-800 rounded-xl p-2.5 px-4.5 pe-12 w-full"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute top-1/2 left-5 -translate-y-1/2 text-neutral-600 text-lg"
                />
              </div>
            </div>
            <div className="filters flex gap-2 flex-wrap items-center">
              <Link
                to={`/blog/all`}
                className={`p-2.5 px-3.5 rounded-xl border border-neutral-700 text-neutral-400 font-semibold text-sm hover:border-orange-500 transition-colors duration-300 cursor-pointer ${filters === "all" ? "btn-primary text-white" : "bg-neutral-900"}`}
                onClick={() => {
                  setFilters("all");
                }}
              >
                جميع المقالات
              </Link>
              <Link
                to={`/blog/${categories[0].name}`}
                className={`p-2.5 px-3.5 rounded-xl border border-neutral-700 text-neutral-400 font-semibold text-sm hover:border-orange-500 transition-colors duration-300 cursor-pointer ${filters === "إضاءة" ? "btn-primary text-white" : "bg-neutral-900"}`}
                onClick={() => {
                  setFilters("إضاءة");
                }}
              >
                إضاءة
              </Link>
              <Link
                to={`/blog/${categories[1].name}`}
                className={`p-2.5 px-3.5 rounded-xl border border-neutral-700 text-neutral-400 font-semibold text-sm hover:border-orange-500 transition-colors duration-300 cursor-pointer ${filters === "بورتريه" ? "btn-primary text-white" : "bg-neutral-900"}`}
                onClick={() => {
                  setFilters("بورتريه");
                }}
              >
                بورترية
              </Link>
              <Link
                to={`/blog/${categories[2].name}`}
                className={`p-2.5 px-3.5 rounded-xl border border-neutral-700 text-neutral-400 font-semibold text-sm hover:border-orange-500 transition-colors duration-300 cursor-pointer ${filters === "مناظر طبيعية" ? "btn-primary text-white" : "bg-neutral-900"}`}
                onClick={() => {
                  setFilters("مناظر طبيعية");
                }}
              >
                مناظر طبيعية
              </Link>
              <Link
                to={`/blog/${categories[3].name}`}
                className={`p-2.5 px-3.5 rounded-xl border border-neutral-700 text-neutral-400 font-semibold text-sm hover:border-orange-500 transition-colors duration-300 cursor-pointer ${filters === "تقنيات" ? "btn-primary text-white" : "bg-neutral-900"}`}
                onClick={() => {
                  setFilters("تقنيات");
                }}
              >
                تقنيات
              </Link>
              <Link
                to={`/blog/${categories[4].name}`}
                className={`p-2.5 px-3.5 rounded-xl border border-neutral-700 text-neutral-400 font-semibold text-sm hover:border-orange-500 transition-colors duration-300 cursor-pointer ${filters === "معدات" ? "btn-primary text-white" : "bg-neutral-900"}`}
                onClick={() => {
                  setFilters("معدات");
                }}
              >
                معدات
              </Link>
            </div>
          </div>
          <hr className="text-neutral-800 mt-5" />
        </div>
        <div className="container w-[95%] md:w-[80%] mx-auto">
          <div className="veiw flex justify-between items-center">
            <div className="right">
              <span className="text-neutral-400 text-lg">
                عرض{" "}
                <span className="text-white font-semibold">
                  {filterdPosts.length}
                </span>{" "}
                مقالات
              </span>
            </div>
            <div className="left">
              <div className="flex gap-1 p-1.5 bg-neutral-900 rounded-xl">
                <button
                  onClick={() => {
                    setGrid(!grid);
                  }}
                  className={`p-1.5 text-neutral-400 rounded-md text-lg cursor-pointer ${grid ? "bg-orange-500 text-white" : ""}`}
                >
                  <FontAwesomeIcon icon={faTableCellsLarge} />
                </button>
                <button
                  onClick={() => {
                    setGrid(!grid);
                  }}
                  className={`p-1.5 text-neutral-400 rounded-md text-lg cursor-pointer ${!grid ? "bg-orange-500 text-white" : ""}`}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            </div>
          </div>
          <div className={`mt-8 all-articles ${grid?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3":"grid grid-cols-1"}  gap-4`}>
            {filterdPosts.map((post) => (
              <Article post={post} grid={grid}/>
            ))}
            {filterdPosts.length ? (
              ""
            ) : (
              <div className="col-span-full text-center">
                <h4 className="text-orange-500 text-4xl font-bold">
                  لا توجد مقالة بهذا الأسم
                </h4>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

// {search
//               ? posts.filter((post) => post.title.includes(search)).length
//                 ? handleSearch().map((post) => (
//                     <Article key={post.id} post={post} />
//                   ))
//                 : notfoundHandle()
//               : filters === "all"
//                 ? posts.map((post) => <Article key={post.id} post={post} />)
//                 : filterHandle().map((post) => (
//                     <Article key={post.id} post={post} />
//                   ))}
