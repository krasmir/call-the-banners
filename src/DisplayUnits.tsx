import { useMemo } from "react";
import styled from "styled-components/macro";
import useCurrentFaction from "./hooks/useCurrentFaction";
import { Faction } from "./types";
import CombatUnitCard from "./CombatUnitCard";
import getUnits from "./utils/getUnits";

const UnitsDiv = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
`;

function DisplayUnits(): JSX.Element {
    const currentFaction = useCurrentFaction();
    const { factionCombatUnits } = useMemo(
        () => getUnits(currentFaction as Faction),
        [currentFaction]
    );

    return (
        <UnitsDiv>
            {factionCombatUnits.map((unit) => {
                return <CombatUnitCard key={unit.id} combatUnit={unit} />;
            })}
        </UnitsDiv>
    );
}
export default DisplayUnits;
