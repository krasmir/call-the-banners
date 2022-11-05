import { useMemo } from "react";
import styled from "styled-components/macro";
import FilteringOptionsForm from "./FilteringOptionsForm";
// import ncus from "./data/ncus.json";
import useCurrentFaction from "./hooks/useCurrentFaction";
import useFilteringOptions from "./hooks/useFilteringOptions";
import NCUCard from "./NCUCard";
import SelectFactionForm from "./SelectFactionForm";
import { Faction } from "./types";
import getUnits from "./utils/getUnits";

const NCUDiv = styled.div`
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

function DisplayAttachmentCards(): JSX.Element {
    const currentFaction = useCurrentFaction();
    const filteringOptions = useFilteringOptions();

    const { factionNCUS } = useMemo(
        () => getUnits(currentFaction as Faction, filteringOptions),
        [currentFaction, filteringOptions]
    );
    // const allFactionAttachmentCards = ncus[currentFaction as Faction] as NCU[];

    return (
        <NCUDiv>
            <SelectFactionForm></SelectFactionForm>
            <FilteringOptionsForm></FilteringOptionsForm>
            {factionNCUS.map((ncu) => (
                <NCUCard key={ncu.id} ncu={ncu} />
            ))}
        </NCUDiv>
    );
}
export default DisplayAttachmentCards;
