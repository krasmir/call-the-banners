import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { currentFaction: string } = {
    currentFaction: "Lannister",
};

export const currentFactionSlice = createSlice({
    name: "currentFaction",
    initialState,
    reducers: {
        setCurrentFaction: (state, action: PayloadAction<string>) => {
            state.currentFaction = action.payload;
        },
    },
});

export const { setCurrentFaction } = currentFactionSlice.actions;

export default currentFactionSlice.reducer;
