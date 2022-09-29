import { Button } from "./Button";
import { ArmyCombatUnit, CombatUnit } from "./types";
import { useDispatch } from "react-redux";
import { addUnit } from "./store/userArmy/userArmySlice";
import { v4 as uuid } from "uuid";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";

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

    return (
        <>
            {factionUnits.map((unit) => (
                <DisplayUnitsTableRow
                    key={unit.id}
                    selectedCharacters={selectedCharacters}
                    character={unit.character}
                    unit={unit}
                >
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
                </DisplayUnitsTableRow>
            ))}
        </>
    );
}

export default DisplayCombatUnits;
