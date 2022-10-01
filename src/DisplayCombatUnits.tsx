import { Button } from "./Button";
import { ArmyCombatUnit, CombatUnit } from "./types";
import { useDispatch } from "react-redux";
import { addCombatUnit } from "./store/userArmy/userArmySlice";
import { v4 as uuid } from "uuid";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";
import useCurrentFaction from "./hooks/useCurrentFaction";

interface DisplayCombatUnitsProps {
    factionUnits: CombatUnit[];
}

function DisplayCombatUnits({
    factionUnits,
}: DisplayCombatUnitsProps): JSX.Element {
    const dispatch = useDispatch();
    const currentFaction = useCurrentFaction();

    const handleAddCombatUnit = (combatUnit: ArmyCombatUnit): void => {
        dispatch(addCombatUnit(combatUnit));
    };

    return (
        <>
            {factionUnits.map((unit) => (
                <DisplayUnitsTableRow
                    key={unit.id}
                    character={unit.character}
                    unit={unit}
                >
                    <Button
                        onClick={() =>
                            handleAddCombatUnit({
                                ...unit,
                                uuid: uuid(),
                                currentFaction,
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
