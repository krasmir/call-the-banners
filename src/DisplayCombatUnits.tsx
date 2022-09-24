import units from "./data/units.json";
import styled from "styled-components/macro";
import { Button } from "./Button";
import { Faction, CombatUnit, CombatUnits } from "./types";
import { useDispatch } from "react-redux";
import { addUnit } from "./store/userArmy/userArmySlice";
import { v4 as uuid } from "uuid";

const TR = styled.tr`
    border-bottom: 1px solid #f7af14;
`;

const IMG = styled.img`
    height: 40px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.9));
`;

interface DisplayCombatUnitsProps {
    faction: Faction;
}

function DisplayCombatUnits({ faction }: DisplayCombatUnitsProps): JSX.Element {
    let factionUnits = (units as CombatUnits)[faction];

    // Free Folk can't have neutral units in their army
    if (faction !== "Free Folk" && faction !== "Neutral") {
        const neutralUnits = (units as CombatUnits).Neutral;
        factionUnits = factionUnits.concat(neutralUnits);
    }

    factionUnits.sort((a, b) => +a.cost - +b.cost);

    const dispatch = useDispatch();

    const handleAddCombatUnit = (combatUnit: CombatUnit): void => {
        dispatch(addUnit(combatUnit));
    };

    console.log("COMBAT UNITS");

    return (
        <>
            {factionUnits.map((unit) => (
                <TR
                    key={unit.id}
                    // style={{
                    //   opacity: selectedCharacters[faction].includes(ncu.character)
                    //     ? "0.2"
                    //     : "1",
                    // }}
                >
                    <td>{unit.name}</td>
                    <td>
                        <IMG
                            alt={unit.type}
                            src={`./UnitType${unit.type.replace(" ", "")}.png`}
                            title={unit.type}
                        />
                    </td>
                    <td>{unit.cost}</td>
                    <td>
                        <Button
                            onClick={() =>
                                handleAddCombatUnit({ ...unit, uuid: uuid() })
                            }
                        >
                            Add
                        </Button>
                    </td>
                </TR>
            ))}
        </>
    );
}

export default DisplayCombatUnits;
