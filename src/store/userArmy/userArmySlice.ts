import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CombatUnit, NCU, Attachment } from "../../types";
export interface userArmyState {
    Lannister: Army;
    Stark?: Army;
}

export interface Army {
    id?: string;
    units?: CombatUnit[];
    ncus?: NCU[];
    attachments?: Attachment[];
}

const initialState: userArmyState = {
    Lannister: {
        id: "army",
        units: [],
        ncus: [],
        attachments: [],
    },
};

export const userArmySlice = createSlice({
    name: "userArmy",
    initialState,
    reducers: {
        addUnit: (state, action: PayloadAction<CombatUnit>) => {
            state.Lannister?.units?.push(action.payload);
        },
        deleteUnit: (state, action: PayloadAction<string>) => {
            const newUnits = state.Lannister?.units?.filter(
                (unit) => unit.uuid !== action.payload
            );
            state.Lannister.units = newUnits;
        },
        addNCU: (state, action: PayloadAction<NCU>) => {
            state.Lannister?.ncus?.push(action.payload);
        },
        deleteNCU: (state, action: PayloadAction<string>) => {
            const newNcus = state.Lannister?.ncus?.filter(
                (unit) => unit.id !== action.payload
            );
            state.Lannister.ncus = newNcus;
        },
        addAttachment: (state, action: PayloadAction<Attachment>) => {
            state.Lannister?.attachments?.push(action.payload);
        },
        deleteAttachment: (state, action: PayloadAction<string>) => {
            const newAttachments = state.Lannister?.attachments?.filter(
                (unit) => unit.uuid !== action.payload
            );
            state.Lannister.attachments = newAttachments;
        },
    },
});

export const {
    addUnit,
    deleteUnit,
    addNCU,
    deleteNCU,
    addAttachment,
    deleteAttachment,
} = userArmySlice.actions;

export default userArmySlice.reducer;
