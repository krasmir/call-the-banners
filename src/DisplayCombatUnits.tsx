import { Button } from "./Button";
import { ArmyCombatUnit, CombatUnit } from "./types";
import { useDispatch } from "react-redux";
import { addUnit } from "./store/userArmy/userArmySlice";
import { v4 as uuid } from "uuid";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";
import UnitTypeIcon from "./UnitTypeIcon";

interface DisplayCombatUnitsProps {
    factionUnits: CombatUnit[];
    selectedCharacters: Set<string>;
}

function DisplayCombatUnits({
    factionUnits,
    selectedCharacters,
}: DisplayCombatUnitsProps): JSX.Element {
    const dispatch = useDispatch();

    const handleAddCombatUnit = (combatUnit: ArmyCombatUnit): void => {
        dispatch(addUnit(combatUnit));
    };

    console.log("COMBAT UNITS");

    return (
        <>
            {factionUnits.map((unit) => (
                <DisplayUnitsTableRow
                    key={unit.id}
                    selectedCharacters={selectedCharacters}
                    character={unit.character}
                >
                    <td>{unit.name}</td>
                    <td>
                        <UnitTypeIcon type={unit.type} />
                    </td>
                    <td>{unit.cost}</td>
                    <td>
                        {!selectedCharacters.has(unit.character) && (
                            <Button
                                onClick={() =>
                                    handleAddCombatUnit({
                                        ...unit,
                                        uuid: uuid(),
                                    })
                                }
                            >
                                Add
                            </Button>
                        )}
                    </td>
                </DisplayUnitsTableRow>
            ))}
        </>
    );
}

export default DisplayCombatUnits;
