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

export type Unit = ArmyCombatUnit & ArmyAttachment & ArmyNCU;

export type UnitType = "combatUnits" | "ncus" | "attachments";

interface AddUnitPayload {
    unitType: UnitType;
    unit: Unit;
    currentFaction: string;
}

interface DeleteUnitPayload {
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
        addUnit: (state, action: PayloadAction<AddUnitPayload>) => {
            const { unit, currentFaction, unitType } = action.payload;
            state[currentFaction][unitType].push(unit);
        },
        deleteUnit: (state, action: PayloadAction<DeleteUnitPayload>) => {
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
    },
});

export const { addUnit, deleteUnit } = userArmySlice.actions;

export default userArmySlice.reducer;
