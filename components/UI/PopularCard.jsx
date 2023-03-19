import React from "react";
import TimerIcon from "@mui/icons-material/Timer";
import GroupsIcon from "@mui/icons-material/Groups";
import Button from "@mui/material/Button";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Image from "next/image";

const PopularCard = ({ recipe }) => {
  return (
    <div className=" w-[21rem] h-[25rem] flex flex-col justify-between bg-white text-black rounded-lg mx-auto">
      <div>
        {/* Image wrapper */}
        <div className="img-wrapper max-w-lg h-[15rem]">
          <Image
            src={recipe.image != null ? recipe.image : "/images/explore-bg.jpg"}
            height={1000}
            width={1000}
            alt={recipe.title}
            className="rounded-lg"
          />
          {/* <img src="/images/explore-bg.jpg" alt="" className="rounded-lg" /> */}
        </div>

        {/* Content */}
        <div className="p-5 pb-0 ">
          <div>
            <div className="flex items-center gap-x-2  opacity-[.5]">
              <p className="flex items-center gap-x-1 text-xs">
                <span className="">
                  <TimerIcon sx={{ fontSize: "1rem" }} />
                </span>
                {recipe.readyInMinutes} mins.
              </p>

              <p className="flex items-center gap-x-2 text-xs">
                <span>
                  <GroupsIcon sx={{ fontSize: "1rem" }} />
                </span>
                {recipe.servings}
              </p>
            </div>

            <h3 className="mt-1">
              {recipe.title.length < 30
                ? recipe.title
                : recipe.title.substr(0, 30) + "..."}
            </h3>
          </div>
        </div>
      </div>

      <div className="px-5 mb-2">
        <Button
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "#006F60 !important",
            ":hover": {
              backgroundColor: "#01907E !important",
            },
          }}
        >
          <a href="/foods/1">View Recipe</a>
          <LocalDiningIcon sx={{ marginLeft: ".5rem", fontSize: "1.3rem" }} />
        </Button>
      </div>
    </div>
  );
};

export default PopularCard;
