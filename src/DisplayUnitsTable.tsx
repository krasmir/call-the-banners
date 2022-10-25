import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { addUnit, Unit, UnitType } from "./store/userArmy/userArmySlice";
import UnitsTable from "./UnitsTable";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";
import getUnits from "./utils/getUnits";
import useCurrentFaction from "./hooks/useCurrentFaction";
import useSelectedUnits from "./hooks/useSelectedUnits";
import { Faction } from "./types";
import { Button } from "./Button";
import AttachButton from "./AttachButton";
import { v4 as uuid } from "uuid";

function DisplayUnitsTable(): JSX.Element {
    const currentFaction = useCurrentFaction();
    const {
        factionAttachments,
        factionCommanders,
        factionNCUS,
        factionCombatUnits,
    } = useMemo(() => getUnits(currentFaction as Faction), [currentFaction]);

    const { selectedCharacters, selectedCommander } = useSelectedUnits(
        currentFaction as Faction
    );

    const checkIfUnitCanBeChosen = (unit: Unit, character: string): boolean => {
        if (unit.cost === "C" && selectedCommander !== undefined) return false;
        if (character.includes(", ")) {
            const characterArr = character.split(", ");
            return !characterArr.some((char) => selectedCharacters.has(char));
        } else return !selectedCharacters.has(character);
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
                            unit.character
                        )}
                    >
                        {type === "attachments" ? (
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
                        )}
                    </DisplayUnitsTableRow>
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