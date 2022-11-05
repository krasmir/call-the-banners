import { configureStore } from "@reduxjs/toolkit";
import userArmyReducer from "./userArmy/userArmySlice";
import currentFactionReducer from "./currentFaction/currentFaction";
import filteringOptionsReducer from "./filteringOptions/filteringOptions";
import sortingOptionsReducer from "./sortingOptions/sortingOptions";

export const store = configureStore({
    reducer: {
        userArmy: userArmyReducer,
        currentFaction: currentFactionReducer,
        filteringOptions: filteringOptionsReducer,
        sortingOptions: sortingOptionsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
