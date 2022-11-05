import styled from "styled-components/macro";
import AttachmentCard from "./AttachmentCard";
import SelectFactionForm from "./SelectFactionForm";
import FilteringOptionsForm from "./FilteringOptionsForm";
import SortingOptionsForm from "./SortingOptionsForm";
import useGetUnits from "./hooks/useGetUnits";

const AttachmentDiv = styled.div`
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

function DisplayAttachmentCards(): JSX.Element {
    const { factionCommanders, factionAttachments } = useGetUnits();

    const allFactionAttachmentCards = [
        ...factionCommanders,
        ...factionAttachments,
    ];

    return (
        <AttachmentDiv>
            <SelectFactionForm></SelectFactionForm>
            <FilteringOptionsForm></FilteringOptionsForm>
            <SortingOptionsForm></SortingOptionsForm>
            {allFactionAttachmentCards.map((attachment) => (
                <AttachmentCard key={attachment.id} attachment={attachment} />
            ))}
        </AttachmentDiv>
    );
}
export default DisplayAttachmentCards;
