import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/HomeLayout/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {

    if (id == "0") {
      setCategoryNews(data);
    }

    else if (id == "1") {
      const breakingNews = data.filter(
        (news) => news.others.is_trending === true
      );
      setCategoryNews(breakingNews);
    }

    else {
      const filterData = data.filter(
        (news) => news.category_id == id
      );
      setCategoryNews(filterData);
    }

  }, [data, id]);

  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-5">
          Total News Found
          <span className="text-green-600"> {categoryNews.length}</span>
        </h2>
      </div>

      {/* Show News */}
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </>
  );
};

export default CategoryNews;