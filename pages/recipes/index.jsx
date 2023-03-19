import React from "react";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const Recipes = () => {
  return (
    <div className="h-screen py-[7rem] px-2">
      {/* Content */}
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="section-title flex flex-col items-center">
          <h4 className="opacity-[.5] mb-[-.7rem]">Discover new recipe</h4>
          <h2>Recipes</h2>
          <span>
            <LocalDiningIcon sx={{ color: "white" }} />
          </span>
        </div>

        {/* Contents */}
        <div className="flex items-center gap-x-20  mt-[5rem] flex-col gap-5 md:flex-row md:justify-center">
          {/* Choices/Search bar */}
          <div className="dropdown-list-wrapper text-black grid grid-cols-3 md:place-items-center gap-x-2 order-2 lg:order-1 ">
            <h4 className="text-white">Cuisines:</h4>
            <select className="rounded-md px-2 py-1 col-span-2">
              <option value="asdas">Filter by Category:</option>
              <option value="all">All</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="American">American</option>
              <option value="Thai">Thai</option>
            </select>
          </div>

          <div className="search-item text-black grid md:place-items-center grid-cols-3 gap-x-2 ">
            <h4 className="text-white">Search:</h4>
            <input
              type="text"
              placeholder="Find your recipe"
              className="rounded-md px-2 py-1  col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
