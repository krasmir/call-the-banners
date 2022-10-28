import styled from "styled-components/macro";
import ncus from "./data/ncus.json";
import useCurrentFaction from "./hooks/useCurrentFaction";
import NCUCard from "./NCUCard";
import SelectFactionForm from "./SelectFactionForm";
import { Faction, NCU } from "./types";

const NCUDiv = styled.div`
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

function DisplayAttachmentCards(): JSX.Element {
    const currentFaction = useCurrentFaction();
    const allFactionAttachmentCards = ncus[currentFaction as Faction] as NCU[];
    return (
        <NCUDiv>
            <SelectFactionForm></SelectFactionForm>
            {allFactionAttachmentCards.map((ncu) => (
                <NCUCard key={ncu.id} ncu={ncu} />
            ))}
        </NCUDiv>
    );
}
export default DisplayAttachmentCards;
