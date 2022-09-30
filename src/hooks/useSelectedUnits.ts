import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ArmyAttachment, ArmyCombatUnit, Faction } from "../types";

interface SelectedUnits {
    selectedCommander: ArmyAttachment | undefined;
    selectedCombatUnits: Map<string, ArmyCombatUnit[]> | undefined;
    selectedCharacters: Set<string>;
}

function useSelectedUnits(faction: Faction): SelectedUnits {
    const { attachments, combatUnits, ncus } = useSelector(
        (state: RootState) =>
            state.userArmy[faction as keyof RootState["userArmy"]]
    );

    const attachmentCharacters = attachments?.map(
        ({ character }) => character
    ) ?? [""];
    const unitsCharacters = combatUnits?.reduce(
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

    const selectedCommander = attachments?.find((att) => att.cost === "C");

    const selectedCombatUnits = combatUnits
        ?.filter((unit) => unit.requirements !== "Solo")
        .reduce((unitMap, unit) => {
            if (unitMap.has(unit.type)) {
                const currentUnits = unitMap.get(unit.type) as ArmyCombatUnit[];
                currentUnits.push(unit);
                unitMap.set(unit.type, currentUnits);
            } else unitMap.set(unit.type, [unit]);
            return unitMap;
        }, new Map<string, ArmyCombatUnit[]>());

    return {
        selectedCombatUnits,
        selectedCharacters,
        selectedCommander,
    };
}

export default useSelectedUnits;
