import { configureStore } from "@reduxjs/toolkit";
import userArmyReducer from "./userArmy/userArmySlice";
import currentFactionReducer from "./currentFaction/currentFaction";
export const store = configureStore({
    reducer: {
        userArmy: userArmyReducer,
        currentFaction: currentFactionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
