import { configureStore } from "@reduxjs/toolkit";
import userArmyReducer from "./userArmy/userArmySlice";
export const store = configureStore({
    reducer: { userArmy: userArmyReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
