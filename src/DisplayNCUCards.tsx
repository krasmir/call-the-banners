import styled from "styled-components/macro";
import FilteringOptionsForm from "./FilteringOptionsForm";
import useGetUnits from "./hooks/useGetUnits";
import NCUCard from "./NCUCard";
import SelectFactionForm from "./SelectFactionForm";
import SortingOptionsForm from "./SortingOptionsForm";

const NCUDiv = styled.div`
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

function DisplayAttachmentCards(): JSX.Element {
    const { factionNCUS } = useGetUnits();

    return (
        <NCUDiv>
            <SelectFactionForm></SelectFactionForm>
            <FilteringOptionsForm></FilteringOptionsForm>
            <SortingOptionsForm></SortingOptionsForm>
            {factionNCUS.map((ncu) => (
                <NCUCard key={ncu.id} ncu={ncu} />
            ))}
        </NCUDiv>
    );
}
export default DisplayAttachmentCards;
