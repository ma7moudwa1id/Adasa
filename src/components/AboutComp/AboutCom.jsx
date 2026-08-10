import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faCircleInfo,
  faFileLines,
  faUsers,
  faFolderOpen,
  faPen,
  faSun,
  faBullseye,
  faBolt,
  faHandshake,
  faRotate,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
export default function AboutCom({ posts }) {
  return (
    <>
      <section className=" min-h-dvh flex flex-col justify-center relative py-20">
        <div className="absolute -z-10 inset-0 pattern">
          <div className="overlay absolute top-[20%] left-[5%] w-100 h-100 bg-radial from-orange-500"></div>
        </div>

        <div className="container md:w-4xl mx-auto mt-20 p-2.5 flex flex-col items-center">
          <div className="badge text-slate-200">من نحن</div>
          <div className="text-center">
            <h1 className="text-[clamp(3rem,4.5vw,6rem)] text-center mt-3 font-bold flex flex-col">
              <span>
                مهمتنا هي{" "}
                <span className="bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  الإعلام والإلهام{" "}
                </span>
              </span>
            </h1>
            <p className="mt-8 text-gray-400 text-xl">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mt-15">
              <div className="py-3.5 flex flex-col col-span-1 items-center bg-neutral-900 border border-gray-800 rounded-2xl hover:scale-105 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-orange-600 text-3xl mb-3"
                />
                <h3 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  +2 مليون
                </h3>
                <span className="text-gray-400">قارئ شهريا</span>
              </div>
              <div className="py-3.5 flex flex-col col-span-1 items-center bg-neutral-900 border border-gray-800 rounded-2xl hover:scale-105 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="text-orange-600 text-3xl mb-3"
                />
                <h3 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  +500
                </h3>
                <span className="text-gray-400">مقالة منشورة</span>
              </div>
              <div className="py-3.5 flex flex-col col-span-1 items-center bg-neutral-900 border border-gray-800 rounded-2xl hover:scale-105 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faPen}
                  className="text-orange-600 text-3xl mb-3"
                />
                <h3 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  +50
                </h3>
                <span className="text-gray-400">كاتب خبير</span>
              </div>
              <div className="py-3.5 flex flex-col col-span-1 items-center bg-neutral-900 border border-gray-800 rounded-2xl hover:scale-105 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  className="text-orange-600 text-3xl mb-3"
                />
                <h3 className="text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  +15
                </h3>
                <span className="text-gray-400">تصنيف</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-15">
        <div className="container w-full md:w-5xl mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-1 h-8 bg-linear-to-t from-orange-300 to-orange-500"></div>
                <h3 className="text-3xl text-center mt-2 font-bold flex flex-col">
                  قيمنا
                </h3>
                <div className="w-1 h-8 bg-linear-to-t from-orange-300 to-orange-500"></div>
              </div>
              <p className="mt-4 text-gray-400 text-lg">
                المبادئ التي توجه كل ما نقوم بإنشائه
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4">
            <div className="category flex flex-col justify-center items-center relative space-y-3 bg-neutral-900 p-4.5 border-2 border-neutral-800 rounded-2xl group hover:cursor-pointer hover:bg-orange-500/20 transition-colors duration-300">
              <div className="text-orange-500 text-4xl">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h5 className="text-xl font-bold group-hover:text-orange-500 transition-colors duration-300">
                الجودة أولاً
              </h5>
              <span className="block text-gray-400 text-sm">
                محتوي مدروس ومكتوب بخبرة
              </span>
            </div>

            <div className="category flex flex-col justify-center items-center relative space-y-3 bg-neutral-900 p-4.5 border-2 border-neutral-800 rounded-2xl group hover:cursor-pointer hover:bg-orange-500/20 transition-colors duration-300">
              <div className="text-orange-500 text-4xl">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h5 className="text-xl font-bold group-hover:text-orange-500 transition-colors duration-300">
                تركيز عملي
              </h5>
              <span className="block text-gray-400 text-sm">
                أمثلة واقعية يمكنك تطبيقها اليوم
              </span>
            </div>

            <div className="category flex flex-col justify-center items-center relative space-y-3 bg-neutral-900 p-4.5 border-2 border-neutral-800 rounded-2xl group hover:cursor-pointer hover:bg-orange-500/20 transition-colors duration-300">
              <div className="text-orange-500 text-4xl">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h5 className="text-xl font-bold group-hover:text-orange-500 transition-colors duration-300">
                المجتمع
              </h5>
              <span className="block text-gray-400 text-sm">
                تعلم مع آلاف المصورين
              </span>
            </div>

            <div className="category flex flex-col justify-center items-center relative space-y-3 bg-neutral-900 p-4.5 border-2 border-neutral-800 rounded-2xl group hover:cursor-pointer hover:bg-orange-500/20 transition-colors duration-300">
              <div className="text-orange-500 text-4xl">
                <FontAwesomeIcon icon={faRotate} />
              </div>
              <h5 className="text-xl font-bold group-hover:text-orange-500 transition-colors duration-300">
                دائما محدث
              </h5>
              <span className="block text-gray-400 text-sm">
                أحدث الاتجاهات وأفضل الممارسات
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-15">
        <div className="container w-full md:w-5xl mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center flex flex-col items-center justify-center space-y-5">
              <div className="badge w-fit text-orange-400">فريقنا</div>
              <div>
                <h3 className="text-4xl text-center mt-2 font-bold flex flex-col">
                  تعرف علي كتابنا
                </h3>
                <p className="mt-4 text-gray-400 text-lg">
                  فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم
                  مع المجتمع.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div
                className="author group border border-black cursor-pointer bg-neutral-900 rounded-2xl p-8 flex flex-col justify-center items-center space-y-5 hover:border hover:border-orange-500 transition-colors duration-300"
                key={post.id}
              >
                <div className="size-25 rounded-full overflow-hidden border-2 border-orange-950 group-hover:border-orange-500 transition-colors duration-300">
                  <img
                    className="size-full object-cover"
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                </div>

                <div className="space-y-2 text-center">
                  <h4 className="text-lg font-bold">{post.author.name}</h4>
                  <p className="text-orange-500 font-medium">
                    {post.author.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-tl from-amber-300 to-50% to-orange-500 py-15 px-5">
        <div className="container w-full md:w-2xl mx-auto">
          <div className="flex flex-col justify-center items-center text-center space-y-3">
            <h4 className="text-3xl font-bold">لديك أسئلة؟ دعنا نتحدث!</h4>
            <p className="text-lg text-slate-200">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>

            <div className="flex gap-4 items-center justify-center mt-5">
              <Link
                to="mailto:hello@adasah.com"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-xl"/>
                تواصل معنا
              </Link>

              <Link
                to="/blog"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-0.5"
              >
                تصفح المقالات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
