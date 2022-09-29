import { NCU } from "./types";
import { addNCU } from "./store/userArmy/userArmySlice";
import { useDispatch } from "react-redux";
import { Button } from "./Button";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";

interface DisplayNonCombatUnitsProps {
    factionNCUS: NCU[];
    selectedCharacters: Set<string>;
}

function DisplayNonCombatUnits({
    factionNCUS,
    selectedCharacters,
}: DisplayNonCombatUnitsProps): JSX.Element {
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
                    unit={ncu}
                >
                    <Button
                        onClick={() => {
                            handleAddNCU({ ...ncu });
                        }}
                    >
                        Add
                    </Button>
                </DisplayUnitsTableRow>
            ))}
        </>
    );
}

export default DisplayNonCombatUnits;
