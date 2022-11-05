import styled from "styled-components/macro";
import tactics from "./data/tactics.json";
import FilteringOptionsForm from "./FilteringOptionsForm";
import useCurrentFaction from "./hooks/useCurrentFaction";
import useFilteringOptions from "./hooks/useFilteringOptions";
// import useFilteringOptions from "./hooks/useFilteringOptions";
// import useSelectedUnits from "./hooks/useSelectedUnits";
import SelectFactionForm from "./SelectFactionForm";
import TacticsCard from "./TacticsCard";
import { Faction, TacticCard } from "./types";
import getUnits from "./utils/getUnits";

const TacticsDiv = styled.div`
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

function Tactics(): JSX.Element {
    const currentFaction = useCurrentFaction();
    const filteringOptions = useFilteringOptions();

    let allFactionTacticsCards = tactics[
        currentFaction as Faction
    ] as TacticCard[];

    if (currentFaction === Faction.Baratheon) {
        const { factionCommanders } = getUnits(
            currentFaction,
            filteringOptions
        );
        const commanderNames = factionCommanders.map(({ name }) => name);
        allFactionTacticsCards = allFactionTacticsCards.filter(
            ({ deck }) =>
                commanderNames.includes(deck) || deck.includes("Basic Deck")
        );
    }

    return (
        <TacticsDiv>
            <SelectFactionForm></SelectFactionForm>
            <FilteringOptionsForm></FilteringOptionsForm>
            {allFactionTacticsCards.map((card) => (
                <TacticsCard key={card.id} card={card} />
            ))}
        </TacticsDiv>
    );
}
export default Tactics;
