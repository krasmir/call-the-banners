import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ArmyAttachment, ArmyCombatUnit, Faction } from "../types";

interface SelectedUnits {
    selectedCommander: ArmyAttachment | undefined;
    selectedCombatUnits: Map<string, ArmyCombatUnit[]> | undefined;
    selectedCharacters: Set<string>;
    selectedLoyalty: string;
}

function useSelectedUnits(faction: Faction): SelectedUnits {
    const { attachments, combatUnits, ncus } = useSelector(
        (state: RootState) =>
            state.userArmy[faction as keyof RootState["userArmy"]]
    );

    // check and set Loyalty of Baratheon Faction
    let selectedLoyalty = "";
    if (faction === Faction.Baratheon) {
        const getLoyalty = (str: string): string => {
            return (str.match(/(?<=Loyalty: )\w+ \w+/i) ?? [""])[0];
        };
        const loyalty = [
            ...attachments.map(({ abilities }) => abilities),
            ...combatUnits.map(({ abilities }) => abilities),
            ...ncus.map(({ names }) => names),
        ]
            .map((str) => getLoyalty(str))
            .filter((str) => str !== "");
        if (loyalty.length > 0) selectedLoyalty = loyalty[0];
    }

    const attachmentCharacters = attachments?.map(
        ({ character }) => character
    ) ?? [""];
    const unitsCharacters = combatUnits?.reduce(
        (arr, { character }) => {
            return character.includes(", ") // unit may include several characters seperated by comma
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
        selectedLoyalty,
    };
}

export default useSelectedUnits;
