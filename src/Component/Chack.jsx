import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function News() {
    const [newsdata, setNewsdata] = useState([])
    const fetchNews = () => {
        axios.get('https://type.fit/api/quotes')
            .then((res) => {
                setNewsdata(res.data.articles)
                console.log(newsdata)
            })
            
    }
    return (
        <></>
    )
}
export default News