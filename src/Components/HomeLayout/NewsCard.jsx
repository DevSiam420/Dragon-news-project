import React from "react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    details,
    thumbnail_url,
    total_view,
    rating,
    author,
    others,
  } = news;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden mb-4 group">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={author?.img}
              alt={author?.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800">
              {author?.name}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              {new Date(author?.published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex gap-2">
          {others?.is_today_pick && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100/60">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Today's Pick
            </span>
          )}
          {others?.is_trending && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-rose-50 text-rose-600 border border-rose-100/60">
              🔥 Trending
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug tracking-tight group-hover:text-indigo-600 transition-colors duration-300 cursor-pointer">
          {title}
        </h2>

        <div className="relative rounded-xl overflow-hidden mb-4 ring-1 ring-slate-100">
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-52 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          {details?.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>

        <Link
          to={`/news-details/${id}`}
          className="mt-3 inline-flex items-center gap-1.5 text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-all duration-300 group/btn"
        >
          Read More
          <svg
            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-slate-50 to-white border-t border-slate-100">
        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(rating?.number || 0)
                    ? "text-amber-400"
                    : "text-slate-200"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-bold text-slate-700">
            {rating?.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1.5 text-slate-400 text-sm font-medium">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          {total_view?.toLocaleString() || total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
