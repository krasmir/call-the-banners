import ncus from "./data/ncus.json";
import styled from "styled-components/macro";
import { Faction, NCU, NCUS } from "./types";
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
    faction: Faction;
}

function DisplayNonCombatUnits({
    faction,
}: DisplayNonCombatUnitsProps): JSX.Element {
    let factionNCUS = (ncus as NCUS)[faction];

    // Free Folk can't have neutral units in their army
    if (faction !== "Free Folk" && faction !== "Neutral") {
        const neutralNCUs = (ncus as NCUS).Neutral;
        factionNCUS = factionNCUS.concat(neutralNCUs);
    }
    factionNCUS.sort((a, b) => +a.cost - +b.cost);

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
                    // style={{
                    //     opacity: characters.includes(ncu.character)
                    //         ? "0.2"
                    //         : "1",
                    // }}
                >
                    <td>{ncu.name}</td>
                    <td>
                        <IMG
                            alt={ncu.character}
                            src={`/assets/UnitTypeNCU.png`}
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
