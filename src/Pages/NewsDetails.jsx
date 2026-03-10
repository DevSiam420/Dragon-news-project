import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import RightAsaide from "../Components/HomeLayout/RightAsaide";
import NewsDetailsCard from "./NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [news, setNews] = useState({});

  useEffect(() => {
    const singleNews = data.find((n) => n.id == id);
    setNews(singleNews);
  }, [data, id]);

  const today = format(new Date(), "EEEE, MMMM dd, yyyy");

  return (
    <div>
      {/* Header */}
      <header className="bg-white py-8 md:py-10 border-b border-gray-200">
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-20 group-hover:opacity-40 transition duration-500 rounded-full"></div>

            <img
              src="/assets/logo.png"
              alt="The Dragon News"
              className="relative w-56 sm:w-64 md:w-80 lg:w-96 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <p className="text-center text-gray-500 mt-5 text-xs md:text-sm px-4">
          Journalism Without Fear or Favour
        </p>

        <p className="font-semibold text-center text-sm mt-1">{today}</p>
      </header>

      {/* Main Section */}
      <main className="mx-auto w-11/12 lg:w-11/12 grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* News */}
        <section className="lg:col-span-9 my-8 md:my-12 lg:my-20">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>

        {/* Right Aside */}
        <section className="lg:col-span-3 my-8 md:my-10">
          <RightAsaide></RightAsaide>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
