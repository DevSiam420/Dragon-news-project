import React, { use } from "react";
import { NavLink } from "react-router";
//  Data fetch ---
const categoriedPromis = fetch("/public/categories.json").then((response) =>
  response.json(),
);

const Categories = () => {
  console.log(categoriedPromis);

  const category = use(categoriedPromis);
  return (
    <>
      <div>
        <h1 className="font-bold pb-3"> All categories</h1>
      </div>
      {/*  all categories  */}
      <div className="w-60 bg-gray-100 p-3 rounded-md ">
        {category.map((item) => (
          <NavLink
            key={item.id}
            to={`/category/${item.id}`}
            className={({ isActive }) =>
              `block text-center py-3 rounded-md  text-sm font-bold transition ${
                isActive
                  ? "bg-gray-300 text-gray-800"
                  : "text-gray-500 hover:bg-gray-200"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Categories;
