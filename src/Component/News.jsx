import React from "react";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
// import Spinner from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";
import { data } from "autoprefixer";


function News({ category }) {
  const [newsdata, setNewsdata] = useState([]);
  var [page, setPage] = useState(1);
  var [pageSize, setPageSize] = useState();
  var [totalResult, setTotalResult] = useState();
  var [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=fd8dd2a03bcb49ae8cb12671ddd5e7e1&page=${page}&pageSize=${pageSize}`;
      let res = await axios.get(url);
      setIsLoading(false);
      let data = res.data.articles;
      let totalResult = res.data.totalResults;
      setTotalResult(totalResult);
      console.log(totalResult);
      console.log(res);
      console.log(data);
      console.log(data.length);
      setNewsdata(data);
      
    };
    fetchNews();
  }, [page, category, pageSize]);

  let handlePrevPage = () => {
    console.log("prev page");
    setPage(page - 1);
    setNewsdata(data.concat(data))
  };
  let handleNextPage = () => {
    console.log("next page");
    setPage(page + 1);
  };

  // let fetchMoreData = () => {
  //   setPage(page + 1)
  //   console.log(newsdata)
  // }
  return (
    <div id="scrollableDiv" className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row sm:flex-col items-center text-gray-600 bg-white dark:bg-slate-900">
      {/* {isLoading && <Spinner />} */}
      
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-2 text-gray-600 bg-white dark:bg-slate-900">
          {newsdata.map((news) => (
            <NewsItem
              content={news.content}
              url={news.url}
              urlToImage={
                news.urlToImage === null
                  ? "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
                  : news.urlToImage
              }
              key={news.url}
              title={news.title}
              description={news.description}
              icon={news.icon}
              categoty={category}
              auth={news.author}
              date={news.publishedAt}
              source={news.source.name}
            ></NewsItem>
          ))}
        </div><div className="flex flex-row justify-between mx-8 my-8 fixed-bottom">
        <div className="flex items-center flex-wrap">
          <button
            disabled={1 === page}
            onClick={handlePrevPage}
            className="text-gray-900 rounded-full hover:text-white hover:bg-zinc-700 transition"
          >
            <BsFillArrowLeftCircleFill className="h-10 w-10" />
          </button>
        </div>
        <div className="flex items-center flex-wrap">
          <button
            disabled={Math.ceil(totalResult / 20) === page}
            onClick={handleNextPage}
            className="text-gray-900 rounded-full hover:text-white hover:bg-zinc-700 transition"
          >
            <BsFillArrowRightCircleFill className="h-10 w-10" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
