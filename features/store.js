import { configureStore } from "@reduxjs/toolkit";

import foodSlices from "./slices/foodSlices";

const store = configureStore({
  reducer: {
    foods: foodSlices,
  },
});

export default store;
