const Header = () => {
  return (
    <header className="bg-white py-10 border-b border-gray-200">

      {/* Logo Image */}
      <div className="flex justify-center">
        <div className="relative group">

          {/* Soft Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-20 group-hover:opacity-40 transition duration-500 rounded-full"></div>

          <img
            src="/assets/logo.png"
            alt="The Dragon News"
            className="relative w-72 md:w-96 object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-center text-gray-500 mt-6 tracking-[0.3em] uppercase text-xs md:text-sm animate-fadeIn">
        Journalism Without Fear or Favour
      </p>

      {/* Date */}
      <p className="text-center text-gray-700 mt-3 font-medium text-sm">
        Sunday, November 27, 2025
      </p>

      {/* Breaking News Bar */}
      <div className="max-w-5xl mx-auto mt-8 flex items-center rounded-xl overflow-hidden shadow-md border border-gray-200">

        <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 font-semibold uppercase text-sm tracking-wide animate-pulse">
          Latest
        </span>

        <div className="overflow-hidden flex-1 bg-gray-50">
          <p className="px-6 py-3 text-gray-700 whitespace-nowrap animate-marquee">
            🚀 Match Highlights: Germany vs Spain — as it happened !
            &nbsp;&nbsp;&nbsp; ⚽ Match Highlights: Germany vs Spain as...
          </p>
        </div>

      </div>

    </header>
  );
};

export default Header;