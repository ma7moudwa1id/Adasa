import Categories from "../../components/cateogries/Categories";
import Articles from "../../components/choosen-articles/Articles";
import Footer from "../../components/footer/Footer";
import LatestArticles from "../../components/latest-articles/latestArticles";
import Main from "../../components/main-home/Main";
import Navbar from "../../components/Navbar/Navbar";
import News from "../../components/our-news/News";

export default function Home({ data }) {
  return (
    <>
      <Navbar />
      {/* <Main /> */}
      <Articles data={data} />
      <Categories categories={data.categories} />
      <LatestArticles posts={data.posts} />
      <News posts={data.posts} />
      <Footer data={data} />
    </>
  );
}
