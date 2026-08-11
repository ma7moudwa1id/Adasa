import React from "react";
import AboutCom from "../../components/AboutComp/AboutCom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function About({data}) {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar data={data}/>
      <AboutCom  posts={data.posts}/>
      <Footer data={data} />
    </>
  );
}
