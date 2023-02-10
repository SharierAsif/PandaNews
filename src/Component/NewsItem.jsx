import React from "react";

function NewsItem({
  title,
  categoty,
  description,
  urlToImage,
  content,
  url,
  auth,
  date,
  source
}) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let publishDate = new Date(date);
  let month = months[publishDate.getMonth()];
  let day = publishDate.getDay().toString();
  let year = publishDate.getFullYear().toString().slice(2);

  return (
    <>
      <div className=" relative border-4 border-gray-200 border-opacity-60 rounded-lg text-gray-600 bg-white dark:bg-orange-400">
        <div className="z-50 absolute inline-flex items-center justify-center h-6 text-xs font-bold text-gray-700 border-2 border-white rounded-full top-1 left-2 px-1 bg-slate-50 dark:border-gray-900">
        {source?source:"unknown"}
        </div> 
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={urlToImage}
        alt="blog"
      />
      <div className="p-6">
        <h2 className="tracking-widest text-base title-font font-medium mb-1 text-slate-900 dark:text-gray-900">
          {categoty}
        </h2>
        <span className="mt-1 text-gray-500 text-sm">
          Published by {auth ? auth : "unknown"} on {day} {month} {year}
        </span>
        <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
          {title}
        </h1>
        <p className="leading-relaxed mb-3">{content}</p>

        <div className="flex items-center flex-wrap ">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className=" bg-zinc-900 inline-flex items-center md:mb-2 lg:mb-0  text-white border-0 py-1 px-2 focus:outline-none hover:bg-zinc-700 rounded text-sm"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            6
          </span>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default NewsItem;
