import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SortingOptionsState {
    order: "asc" | "desc";
    orderBy: "cost" | "name";
}

const initialState: SortingOptionsState = {
    order: "asc",
    orderBy: "cost",
};

export const sortingOptionsSlice = createSlice({
    name: "sortingOptions",
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<"asc" | "desc">) => {
            state.order = action.payload;
        },
        setOrderBy: (state, action: PayloadAction<"cost" | "name">) => {
            state.orderBy = action.payload;
        },
    },
});

export const { setOrder, setOrderBy } = sortingOptionsSlice.actions;

export default sortingOptionsSlice.reducer;
