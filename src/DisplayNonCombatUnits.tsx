import { NCU } from "./types";
import { addNCU } from "./store/userArmy/userArmySlice";
import { useDispatch } from "react-redux";
import { Button } from "./Button";
import UnitTypeIcon from "./UnitTypeIcon";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";

interface DisplayNonCombatUnitsProps {
    factionNCUS: NCU[];
    selectedCharacters: Set<string>;
}

function DisplayNonCombatUnits({
    factionNCUS,
    selectedCharacters,
}: DisplayNonCombatUnitsProps): JSX.Element {
    console.log("NCU");

    const dispatch = useDispatch();

    const handleAddNCU = (attachment: NCU): void => {
        dispatch(addNCU(attachment));
    };

    return (
        <>
            {factionNCUS.map((ncu) => (
                <DisplayUnitsTableRow
                    key={ncu.id}
                    selectedCharacters={selectedCharacters}
                    character={ncu.character}
                >
                    <td>{ncu.name}</td>
                    <td>
                        <UnitTypeIcon type="NCU" />
                    </td>
                    <td>{ncu.cost}</td>
                    <td>
                        {!selectedCharacters.has(ncu.character) && (
                            <Button
                                onClick={() => {
                                    handleAddNCU({ ...ncu });
                                }}
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

export default DisplayNonCombatUnits;
