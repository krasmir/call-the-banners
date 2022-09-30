import { ArmyNCU, NCU } from "./types";
import { addNCU } from "./store/userArmy/userArmySlice";
import { useDispatch } from "react-redux";
import { Button } from "./Button";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";
import useCurrentFaction from "./hooks/useCurrentFaction";
import { v4 as uuid } from "uuid";

interface DisplayNonCombatUnitsProps {
    factionNCUS: NCU[];
    selectedCharacters: Set<string>;
}

function DisplayNonCombatUnits({
    factionNCUS,
    selectedCharacters,
}: DisplayNonCombatUnitsProps): JSX.Element {
    const dispatch = useDispatch();
    const currentFaction = useCurrentFaction();

    const handleAddNCU = (attachment: ArmyNCU): void => {
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
                            handleAddNCU({
                                ...ncu,
                                uuid: uuid(),
                                currentFaction,
                            });
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
