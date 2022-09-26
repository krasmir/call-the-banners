import styled from "styled-components/macro";
import { NCU } from "./types";
import { addNCU } from "./store/userArmy/userArmySlice";
import { useDispatch } from "react-redux";
import { Button } from "./Button";

const TR = styled.tr`
    border-bottom: 1px solid #f7af14;
`;

const IMG = styled.img`
    height: 40px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.9));
`;
interface DisplayNonCombatUnitsProps {
    factionNCUS: NCU[];
    selectedCharacters: string[];
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
                <TR
                    key={ncu.id}
                    style={{
                        opacity: selectedCharacters.includes(ncu.character)
                            ? "0.2"
                            : "1",
                    }}
                >
                    <td>{ncu.name}</td>
                    <td>
                        <IMG
                            alt={ncu.character}
                            src={`./UnitTypeNCU.png`}
                            title="Non Combat Unit"
                        />
                    </td>
                    <td>{ncu.cost}</td>
                    <td>
                        <Button
                            onClick={() => {
                                handleAddNCU({ ...ncu });
                            }}
                        >
                            Add
                        </Button>
                    </td>
                </TR>
            ))}
        </>
    );
}

export default DisplayNonCombatUnits;
