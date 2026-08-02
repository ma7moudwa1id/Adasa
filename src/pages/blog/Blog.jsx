import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main-blog/Main";
import AllArticles from "../../components/all-articles/AllArticles";
import { useParams } from "react-router";

export default function Blog({ data }) {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <Main />
      <AllArticles posts={data.posts} categories={data.categories} />
      <Footer data={data} />
    </>
  );
}
