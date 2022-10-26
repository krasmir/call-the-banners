import styled from "styled-components/macro";
import tactics from "./data/tactics.json";
import useCurrentFaction from "./hooks/useCurrentFaction";
import TacticsCard from "./TacticsCard";
import { Faction, TacticCard } from "./types";

const TacticsDiv = styled.div`
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

function Tactics(): JSX.Element {
    const currentFaction = useCurrentFaction();
    const allFactionTacticsCards = tactics[
        currentFaction as Faction
    ] as TacticCard[];
    return (
        <TacticsDiv>
            {allFactionTacticsCards.map((card) => (
                <TacticsCard key={card.id} card={card} />
            ))}
        </TacticsDiv>
    );
}
export default Tactics;
