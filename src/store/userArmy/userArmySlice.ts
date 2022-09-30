import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NCU, ArmyAttachment, ArmyCombatUnit } from "../../types";
export interface UserArmyState {
    [key: string]: Army;
}

export interface Army {
    units: ArmyCombatUnit[];
    ncus: NCU[];
    attachments: ArmyAttachment[];
}

const emptyState: Army = {
    units: [],
    ncus: [],
    attachments: [],
};

const factions = [
    "Lannister",
    "Stark",
    "Free Folk",
    "Neutral",
    "Night's Watch",
    "Baratheon",
    "Targaryen",
    "Greyjoy",
];

const userArmyState: UserArmyState = {};

const initialState: UserArmyState = factions.reduce((state, key) => {
    state[key] = emptyState;
    return state;
}, userArmyState);

export const userArmySlice = createSlice({
    name: "userArmy",
    initialState,
    reducers: {
        addUnit: (state, action: PayloadAction<ArmyCombatUnit>) => {
            state.Lannister?.units?.push(action.payload);
        },
        deleteUnit: (state, action: PayloadAction<string>) => {
            const newUnits = state.Lannister?.units?.filter(
                (unit) => unit.uuid !== action.payload
            );
            const newAttachments = state.Lannister?.attachments?.filter(
                (unit) => unit.attachedTo !== action.payload
            );
            state.Lannister.units = newUnits;
            state.Lannister.attachments = newAttachments;
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
        addAttachment: (state, action: PayloadAction<ArmyAttachment>) => {
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
