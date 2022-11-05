import { Unit, UnitType } from "../store/userArmy/userArmySlice";

export const getLoyalty = (unit: Unit, unitType: UnitType): string => {
    const matchLoyalty = (str: string): string => {
        return (str.match(/(?<=Loyalty: )\w+ \w+/i) ?? [""])[0];
    };
    if (unitType === "ncus") {
        return matchLoyalty(unit.names);
    } else return matchLoyalty(unit.abilities);
};
