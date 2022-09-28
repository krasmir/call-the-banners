import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Army } from "../store/userArmy/userArmySlice";
import { ArmyAttachment, ArmyCombatUnit, Faction } from "../types";

interface SelectedUnits {
    selectedCommander: ArmyAttachment | undefined;
    selectedCombatUnits: Map<string, ArmyCombatUnit[]> | undefined;
    selectedCharacters: Set<string>;
}

function useSelectedUnits(faction: Faction): SelectedUnits {
    const { attachments, units, ncus } = useSelector(
        (state: RootState) =>
            state.userArmy[faction as keyof RootState["userArmy"]] as Army
    );

    const attachmentCharacters = attachments?.map(
        ({ character }) => character
    ) ?? [""];
    const unitsCharacters = units?.reduce(
        (arr, { character }) => {
            return character.includes(", ")
                ? [...arr, ...character.split(", ")]
                : [...arr, character];
        },
        [""]
    ) ?? [""];
    const ncusCharacters = ncus?.map(({ character }) => character) ?? [""];

    const selectedCharacters = new Set(
        [...attachmentCharacters, ...unitsCharacters, ...ncusCharacters].filter(
            (character) => character.length > 1
        )
    );

    const selectedCommander = (attachments as ArmyAttachment[])?.find(
        (att) => att.cost === "C"
    );

    const selectedCombatUnits = (units as ArmyCombatUnit[])
        ?.filter((unit) => unit.requirements !== "Solo")
        .reduce((unitMap, unit) => {
            if (unitMap.has(unit.type)) {
                const currentUnits = unitMap.get(unit.type) as ArmyCombatUnit[];
                currentUnits.push(unit);
                unitMap.set(unit.type, currentUnits);
            } else unitMap.set(unit.type, [unit]);
            return unitMap;
        }, new Map<string, ArmyCombatUnit[]>());

    console.log("use selected unit");

    return {
        selectedCombatUnits,
        selectedCharacters,
        selectedCommander,
    };
}

export default useSelectedUnits;
