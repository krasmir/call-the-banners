import { createSlice } from "@reduxjs/toolkit";

export interface userArmyState {
    id: string;
    units: string[];
    ncus: string[];
    commander: string;
}

const initialState: userArmyState = {
    id: "army",
    units: ["guards", "bowman"],
    ncus: ["varys", "tyrion"],
    commander: "bob",
};

export const userArmySlice = createSlice({
    name: "userArmy",
    initialState,
    reducers: {},
});

export default userArmySlice.reducer;
