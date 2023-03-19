import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import foodApi from "@/common/foodApi";

export const getPopularRecipes = createAsyncThunk(
  "foods/getPopularRecipes",
  async () => {
    const response = await foodApi.get(
      `/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=9`
    );

    return response.data;
  }
);
const initialState = {
  recipes: {},
  popular: [],
};

const foodSlices = createSlice({
  name: "foods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularRecipes.fulfilled, (state, { payload }) => {
        console.log(payload)
      return {
        ...state,
        popular: payload.recipes,
      };
    });
  },
});

export const fetchedPopularRecipes = (state) => state.foods.popular;

export default foodSlices.reducer;
