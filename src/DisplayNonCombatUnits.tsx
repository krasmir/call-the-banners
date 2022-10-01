import { useDispatch } from "react-redux";
import { addNCU } from "./store/userArmy/userArmySlice";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";
import { ArmyNCU, NCU } from "./types";
import { Button } from "./Button";
import useCurrentFaction from "./hooks/useCurrentFaction";
import { v4 as uuid } from "uuid";

interface DisplayNonCombatUnitsProps {
    factionNCUS: NCU[];
}

function DisplayNonCombatUnits({
    factionNCUS,
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
