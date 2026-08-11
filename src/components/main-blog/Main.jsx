import React from "react";

export default function Main() {
  return (
    <>
      <section className="py-20 mt-20 relative">
        <div className="absolute -z-10 inset-0 pattern">
          <div className="overlay absolute top-[10%] left-[50%] -translate-x-1/2 w-100 h-100 bg-radial from-orange-500"></div>
        </div>

        <div className="container mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="heading flex flex-col items-center">
            <div className="badge w-fit text-orange-500">مدونتنا</div>
            <div className="text-center">
              <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] text-center mt-3 font-bold">
                استكشف{" "}
                <span className="bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                  مقالاتنا
                </span>
              </h1>
              <p className="mt-5 text-gray-400 text-[clamp(0.5rem,2.9vh,2rem)]">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
