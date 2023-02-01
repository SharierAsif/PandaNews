// import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
import Quote from "./Quote"

function Quots() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/quotes")
      .then((response) => {
          console.log(response.data.quotes);
          setData(response.data.quotes);
    })
      
  },[]);

  return (
    <div className="grid grid-cols-4 gap-2 lg:grid-cols-1 lg:gap-10">
      {data.map((quote) => (
        <Quote
          auth={quote.author}
          des={quote.quote}
        ></Quote>
      ))}
    </div>
  );
}
export default Quots;
