import { useDispatch } from "react-redux";
import { addUnit, Unit, UnitType } from "./store/userArmy/userArmySlice";
import UnitsTable from "./UnitsTable";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";
import useCurrentFaction from "./hooks/useCurrentFaction";
import useSelectedUnits from "./hooks/useSelectedUnits";
import { Faction } from "./types";
import { Button } from "./Button";
import AttachButton from "./AttachButton";
import { v4 as uuid } from "uuid";
import ShowUnitButton from "./ShowUnitButton";
import { getLoyalty } from "./utils/getLoyalty";
import useGetUnits from "./hooks/useGetUnits";

function DisplayUnitsTable(): JSX.Element {
    const currentFaction = useCurrentFaction();

    const {
        factionAttachments,
        factionCommanders,
        factionNCUS,
        factionCombatUnits,
    } = useGetUnits();

    const { selectedCharacters, selectedCommander, selectedLoyalty } =
        useSelectedUnits(currentFaction as Faction);

    const checkIfUnitCanBeChosen = (
        unit: Unit,
        character: string,
        type: UnitType
    ): boolean => {
        if (selectedCharacters.has(character)) return false;

        if (character.includes(", ")) {
            const characterArr = character.split(", ");
            return !characterArr.some((char) => selectedCharacters.has(char));
        }

        if (unit.cost === "C" && selectedCommander !== undefined) return false;

        if (currentFaction === Faction.Baratheon && selectedLoyalty !== "") {
            const unitLoyalty = getLoyalty(unit, type);
            if (unitLoyalty !== "" && unitLoyalty !== selectedLoyalty)
                return false;
        }
        if (unit.abilities?.includes("Must be attached to ")) {
            const neededCharacter = (unit.abilities.match(
                /(?<=Must be attached to ').*(?=')/
            ) ?? [""])[0];
            if (selectedCharacters.has(neededCharacter)) return true;
            return false;
        }
        if (unit.requirementText?.includes("May only be fielded ")) {
            const neededCharacter = (unit.requirementText.match(
                /(?<=May only be fielded in an army including )[^.]*(?=.)/
            ) ?? [""])[0];
            if (selectedCharacters.has(neededCharacter)) return true;
            return false;
        }
        return true;
    };

    const dispatch = useDispatch();
    const handleAddUnit = (unit: Unit, unitType: UnitType): void => {
        dispatch(addUnit({ unit, currentFaction, unitType }));
    };

    const displayUnits = (units: Unit[], type: UnitType): JSX.Element => {
        return (
            <>
                {units.map((unit) => (
                    <DisplayUnitsTableRow
                        key={unit.id}
                        unit={unit}
                        canUnitBeChosen={checkIfUnitCanBeChosen(
                            unit,
                            unit.character,
                            type
                        )}
                        addUnitButton={
                            type === "attachments" ? (
                                <AttachButton attachment={unit} />
                            ) : (
                                <Button
                                    onClick={() =>
                                        handleAddUnit(
                                            {
                                                ...unit,
                                                uuid: uuid(),
                                            },
                                            type
                                        )
                                    }
                                >
                                    Add
                                </Button>
                            )
                        }
                        showUnitButton={
                            <ShowUnitButton
                                unit={unit}
                                type={type}
                            ></ShowUnitButton>
                        }
                    />
                ))}
            </>
        );
    };

    return (
        <>
            <UnitsTable typeOfUnits="Combat Units">
                {displayUnits(factionCombatUnits as Unit[], "combatUnits")}
            </UnitsTable>
            <UnitsTable typeOfUnits="Commanders">
                {displayUnits(factionCommanders as Unit[], "attachments")}
            </UnitsTable>
            <UnitsTable typeOfUnits="Non-Combat Units">
                {displayUnits(factionNCUS as Unit[], "ncus")}
            </UnitsTable>
            <UnitsTable typeOfUnits="Attachments">
                {displayUnits(factionAttachments as Unit[], "attachments")}
            </UnitsTable>
        </>
    );
}

export default DisplayUnitsTable;
