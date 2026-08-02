import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import NotFound from "../../components/notfound/NotFound";

export default function NotFoundPage({data}) {
  return (
    <>
      <Navbar />
      <NotFound/>
      <Footer data={data}/>
    </>
  );
}
