import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPopularRecipes,
  fetchedPopularRecipes,
} from "@/features/slices/foodSlices";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PopularCard from "@/components/UI/PopularCard";

const Popular = () => {
  const popularRecipes = useSelector(fetchedPopularRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularRecipes());
  }, []);

  return (
    <div className="flex items-center justify-around h-[50v] py-[7rem] px-3 bg-c-quinary">
      <div className="container mx-auto">
        <div className="section-title flex flex-col items-center">
          <h4 className="opacity-[.5] mb-[-.7rem]">Look at the best</h4>
          <h2>Popular Recipes</h2>
          <span>
            <LocalDiningIcon sx={{ color: "white" }} />
          </span>
        </div>

        {Object.keys(popularRecipes).length === 0 ? (
          <h1>Recipe Loading....</h1>
        ) : (
          <Splide
            options={{
              rewind: true,
              focus: "center",
              arrows: true,
              pagination: false,
              drag: "free",
              perPage: 3,
              breakpoints: {
                935: {
                  perPage: 1,
                  perMove: 1,
                  arrows: false,
                  pagination: true,
                },
                1200: {
                  perPage: 2,
                  perMove: 2,
                },
              },
            }}
          >
            {popularRecipes.map((recipe) => (
              <SplideSlide>
                <PopularCard recipe={recipe} key={recipe.id} />
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>

      {/* {popularRecipes.map((recipe) => (
        <p>{recipe.title}</p>
      ))} */}
    </div>
  );
};

export default Popular;
