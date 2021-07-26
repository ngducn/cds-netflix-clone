import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router";

const API_KEY = process.env.REACT_APP_API_KEY;
function SearchPage() {
  const [data, setData] = useState({});
  const { keyword } = useParams();
  console.log(API_KEY);
  useEffect(() => {
    const fetchSearch = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`;
      const res = await fetch(url);
      const dataa = await res.json();
      setData(dataa);
    };
    fetchSearch();
  }, [keyword]);
  console.log(data);

  return (
    <div className="SearchPage">
      {data?.results?.map((d) => (
        <h1>{d.title}</h1>
      ))}
    </div>
  );
}

export default SearchPage;
