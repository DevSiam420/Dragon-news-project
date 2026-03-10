import React, { useState } from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details, author } = news;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="max-w-4xl mx-auto">
      {/* ─── Glassmorphism Card ─── */}
      <div
        className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden 
                       border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                       animate-[slideUp_0.6s_ease-out]"
      >
        {/* ─── Image Section ─── */}
        <div className="relative h-[420px] overflow-hidden group">
          {/* Shimmer Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 
                              to-transparent animate-[shimmer_1.5s_infinite]"
              />
            </div>
          )}

          <img
            src={image_url}
            alt={title}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 
                        group-hover:scale-110 group-hover:rotate-1
                        ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Floating Date Badge */}
          <div
            className="absolute top-5 right-5 bg-white/20 backdrop-blur-md text-white 
                          px-4 py-2 rounded-2xl text-sm font-medium border border-white/30
                          animate-[fadeDown_0.8s_ease-out_0.3s_both]
                          hover:bg-white/30 transition-colors duration-300 cursor-default"
          >
            📅 {author?.published_date || "Unknown"}
          </div>

          {/* Title on Image */}
          <div
            className="absolute bottom-0 left-0 right-0 p-8 
                          animate-[fadeUp_0.8s_ease-out_0.2s_both]"
          >
            <h1
              className="text-3xl md:text-4xl font-black text-white leading-tight 
                           drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
            >
              {title}
            </h1>
          </div>
        </div>

        {/* ─── Content Section ─── */}
        <div className="p-8 md:p-10 animate-[fadeUp_0.8s_ease-out_0.4s_both]">
          {/* Author Card */}
          <div
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50/50 
                          rounded-2xl mb-8 border border-gray-100
                          hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Animated Avatar Ring */}
            <div className="relative">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 
                              to-pink-500 rounded-full animate-[spin_3s_linear_infinite] opacity-75"
              />
              <div
                className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 
                              to-purple-600 flex items-center justify-center text-white 
                              font-bold text-lg shadow-inner"
              >
                {author?.name?.charAt(0) || "A"}
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-800 text-base">
                {author?.name || "Anonymous"}
              </p>
              <p className="text-sm text-gray-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Author
              </p>
            </div>
          </div>

          {/* Animated Divider */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full 
                            animate-[expandWidth_1s_ease-out_0.6s_both]"
            />
            <div
              className="h-1 w-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full 
                            animate-[expandWidth_1s_ease-out_0.8s_both]"
            />
            <div
              className="h-1 w-3 bg-pink-400 rounded-full 
                            animate-[expandWidth_1s_ease-out_1s_both]"
            />
          </div>

          {/* Details with First Letter Styled */}
          <p
            className="text-gray-600 text-lg leading-relaxed first-letter:text-5xl 
                         first-letter:font-black first-letter:text-blue-600 
                         first-letter:float-left first-letter:mr-3 first-letter:mt-1"
          >
            {details}
          </p>

          {/* ─── Action Buttons ─── */}
          <div
            className="flex flex-wrap items-center gap-4 mt-10 
                          animate-[fadeUp_0.8s_ease-out_0.6s_both]"
          >
            {/* Back Button */}
            <Link
              to={`/category/${news.category_id}`}
              className="group relative overflow-hidden bg-gradient-to-r from-red-500 
                               to-orange-500 text-white font-semibold px-7 py-3.5 rounded-2xl 
                               shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 
                               hover:-translate-y-1 active:translate-y-0 
                               transition-all duration-300"
            >
              {/* Shine Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 
                              to-transparent -translate-x-full group-hover:translate-x-full 
                              transition-transform duration-700"
              />
              <span className="relative flex items-center gap-2">
                <span
                  className="group-hover:-translate-x-1.5 transition-transform duration-300 
                                 text-xl"
                >
                  ←
                </span>
                Back to the category
              </span>
            </Link>

            {/* Share Button */}
            <button
              className="group p-3.5 rounded-2xl border-2 border-gray-200 
                               hover:border-blue-400 hover:bg-blue-50 
                               hover:-translate-y-1 hover:shadow-lg 
                               transition-all duration-300 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400 
                          group-hover:text-blue-500 group-hover:rotate-12 
                          transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 
                         2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 
                         0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 
                         105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>

            {/* Bookmark Button */}
            <button
              className="group p-3.5 rounded-2xl border-2 border-gray-200 
                               hover:border-pink-400 hover:bg-pink-50 
                               hover:-translate-y-1 hover:shadow-lg 
                               transition-all duration-300 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400 
                          group-hover:text-pink-500 group-hover:scale-110 
                          transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 
                         4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsDetailsCard;
