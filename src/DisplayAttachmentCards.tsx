import { useMemo } from "react";
import styled from "styled-components/macro";
import AttachmentCard from "./AttachmentCard";
// import attachments from "./data/attachments.json";
import useCurrentFaction from "./hooks/useCurrentFaction";
import useFilteringOptions from "./hooks/useFilteringOptions";
import SelectFactionForm from "./SelectFactionForm";
import { Faction } from "./types";
import getUnits from "./utils/getUnits";
import FilteringOptionsForm from "./FilteringOptionsForm";

const AttachmentDiv = styled.div`
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

function DisplayAttachmentCards(): JSX.Element {
    const currentFaction = useCurrentFaction();

    const filteringOptions = useFilteringOptions();

    const { factionCommanders, factionAttachments } = useMemo(
        () => getUnits(currentFaction as Faction, filteringOptions),
        [currentFaction, filteringOptions]
    );

    const allFactionAttachmentCards = [
        ...factionCommanders,
        ...factionAttachments,
    ];

    return (
        <AttachmentDiv>
            <SelectFactionForm></SelectFactionForm>
            <FilteringOptionsForm></FilteringOptionsForm>
            {allFactionAttachmentCards.map((attachment) => (
                <AttachmentCard key={attachment.id} attachment={attachment} />
            ))}
        </AttachmentDiv>
    );
}
export default DisplayAttachmentCards;
