import React from "react";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [newsdata, setNewsdata] = useState([]);
  var [page, setPage] = useState(1);
  
  
  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fd8dd2a03bcb49ae8cb12671ddd5e7e1&page=${page}`;
      let res = await axios.get(url);
      let data = res.data.articles;
      console.log(res);
      console.log(data);
      setNewsdata(data);
    };
    fetchNews();
  }, [page]); 
  
  let handlePrevPage = () => {
    console.log("prev page")
    setPage( page - 1)
  }
  let handleNextPage = () => {
    console.log("next page")
    setPage( page + 1)
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 lg:grid-cols-5 lg:gap-2">
      {newsdata.map((news) => (
        <NewsItem
          content={news.content}
          url={news.url}
          urlToImage={news.urlToImage}
          title={news.title}
          description={news.description}
          icon={news.icon}
        ></NewsItem>
      ))}
      </div>
      <div className="flex justify-between mx-8 my-8">
        <button onClick={handlePrevPage} className="inline-flex text-white bg-zinc-900 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-600 rounded text-lg">&laquo;</button>
        <button onClick={handleNextPage} className ="inline-flex text-white bg-zinc-900 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-600 rounded text-lg">&raquo;</button>
      </div>
    </div>
  );
}

export default News;
