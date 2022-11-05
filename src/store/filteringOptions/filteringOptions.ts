import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilteringOptionsState {
    includeNeutrals: boolean;
    loyaltyRenly: boolean;
    loyaltyStannis: boolean;
}

interface ChangeOption {
    option: keyof FilteringOptionsState;
    payload: boolean;
}

const initialState: FilteringOptionsState = {
    includeNeutrals: false,
    loyaltyRenly: true,
    loyaltyStannis: true,
};

export const filteringOptionsSlice = createSlice({
    name: "filteringOptions",
    initialState,
    reducers: {
        setfilteringOptions: (state, action: PayloadAction<ChangeOption>) => {
            const { option, payload } = action.payload;
            state[option] = payload;
        },
    },
});

export const { setfilteringOptions } = filteringOptionsSlice.actions;

export default filteringOptionsSlice.reducer;
