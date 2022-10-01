import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArmyAttachment, ArmyCombatUnit, ArmyNCU } from "../../types";
export interface UserArmyState {
    [key: string]: Army;
}

export interface Army {
    combatUnits: ArmyCombatUnit[];
    ncus: ArmyNCU[];
    attachments: ArmyAttachment[];
}

type Unit = ArmyCombatUnit & ArmyAttachment & ArmyNCU;

export type UnitType = "combatUnits" | "ncus" | "attachments";

interface DeletePayload {
    unitType: UnitType;
    id: string;
    currentFaction: string;
}

const emptyState: Army = {
    combatUnits: [],
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
        addCombatUnit: (state, action: PayloadAction<ArmyCombatUnit>) => {
            state[action.payload.currentFaction].combatUnits?.push(
                action.payload
            );
        },
        deleteUnit: (state, action: PayloadAction<DeletePayload>) => {
            const { id, currentFaction, unitType } = action.payload;
            const newUnits: Unit[] = (
                state[currentFaction][unitType] as Unit[]
            ).filter((unit: Unit) => unit.uuid !== id);

            if (unitType === "combatUnits") {
                const newAttachments = state[currentFaction].attachments.filter(
                    (unit) => unit.attachedTo !== id
                );
                state[currentFaction].attachments = newAttachments;
            }

            state[currentFaction][unitType] = newUnits;
        },
        addNCU: (state, action: PayloadAction<ArmyNCU>) => {
            state[action.payload.currentFaction].ncus?.push(action.payload);
        },
        addAttachment: (state, action: PayloadAction<ArmyAttachment>) => {
            state[action.payload.currentFaction].attachments?.push(
                action.payload
            );
        },
    },
});

export const { addCombatUnit, deleteUnit, addNCU, addAttachment } =
    userArmySlice.actions;

export default userArmySlice.reducer;
