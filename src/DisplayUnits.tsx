import styled from "styled-components/macro";
import CombatUnitCard from "./CombatUnitCard";
import SelectFactionForm from "./SelectFactionForm";
import FilteringOptionsForm from "./FilteringOptionsForm";
import SortingOptionsForm from "./SortingOptionsForm";
import useGetUnits from "./hooks/useGetUnits";

const UnitsDiv = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
`;

function DisplayUnits(): JSX.Element {
    const { factionCombatUnits } = useGetUnits();
    return (
        <UnitsDiv>
            <SelectFactionForm></SelectFactionForm>
            <FilteringOptionsForm></FilteringOptionsForm>
            <SortingOptionsForm></SortingOptionsForm>
            {factionCombatUnits.map((unit) => {
                return <CombatUnitCard key={unit.id} combatUnit={unit} />;
            })}
        </UnitsDiv>
    );
}
export default DisplayUnits;
