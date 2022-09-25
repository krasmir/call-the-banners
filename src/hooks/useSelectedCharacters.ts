import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Army } from "../store/userArmy/userArmySlice";
import { Faction } from "../types";

function useSelectedCharacters(faction: Faction): string[] {
    const { attachments, units, ncus } = useSelector(
        (state: RootState) =>
            state.userArmy[faction as keyof RootState["userArmy"]] as Army
    );

    const attachmentCharacters = attachments?.map(
        ({ character }) => character
    ) ?? [""];
    const unitsCharacters = units?.map(({ character }) => character) ?? [""];
    const ncusCharacters = ncus?.map(({ character }) => character) ?? [""];

    return [
        ...attachmentCharacters,
        ...unitsCharacters,
        ...ncusCharacters,
    ].filter((character) => character);
}

export default useSelectedCharacters;
