import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BlogDeatails from "../../components/blog-details/BlogDeatails";
import { useParams } from "react-router";

export default function DetailsPage({ data }) {
  const { slug } = useParams();
  return (
    <>
      <Navbar />
      {<BlogDeatails post={data.posts.find((post)=>post.slug===slug)} posts={data.posts} />}
      <Footer data={data} />
    </>
  );
}
