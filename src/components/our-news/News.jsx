import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function News({posts}) {
  return (
    <>
      <section className="py-15 relative">
          <div className="overlay absolute top-0 left-[50%] -translate-x-1/2 w-90 h-100 -z-10 bg-radial from-orange-500/40 to-70%"></div>
        <div className="container flex justify-center items-center  mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 ">
          <div className="bg-neutral-900 text-center py-20 px-10 border border-neutral-700 rounded-xl flex flex-col space-y-6 justify-center items-center min-w-2/3">
            <div className="size-15 flex justify-center items-center bg-linear-to-tl from-orange-600 to-orange-500 rounded-xl">
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl"/>
            </div>

            <h4 className="text-[clamp(2rem,2.5vw,3rem)] font-bold">اشترك في <span className="text-transparent bg-linear-to-r from-orange-500 to-orange-300 bg-clip-text">نشرتنا الإخبارية</span></h4>
            <p className="text-neutral-500 text-lg font-medium">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
            <div className="flex gap-3 flex-wrap w-full">
                <input type="text" placeholder="ادخل بريدك الالكتروني" className="bg-black focus:outline-0 rounded-xl px-4.5 py-2.5 border border-neutral-800 grow-3" />
                <button className="btn-primary px-4.5 py-2.5 grow rounded-xl font-semibold hover:bg-linear-to hover:from-orange-700 hover:to-orange-700 hover:cursor-pointer transition-colors duration-300 ">اشترك الان</button>
            </div>

            <div className="flex justify-between items-center gap-4 text-center flex-wrap w-full">
                <div className="flex gap-1">
                    <img className="size-8 rounded-full" src={posts[0].author.avatar} alt={posts[0].author.name} />
                    <img className="size-8 rounded-full" src={posts[1].author.avatar} alt={posts[1].author.name} />
                    <img className="size-8 rounded-full" src={posts[2].author.avatar} alt={posts[2].author.name} />
                </div>
                <div><span className="text-neutral-500">انضم الي <span className="text-white font-medium">+10,000</span> مصور</span></div>
                <div><span className="text-neutral-500">بدون إزعاج</span></div>
                <div><span className="text-neutral-500">إالغاء الاشتراك في أي وقت</span></div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
