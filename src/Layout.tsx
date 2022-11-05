import styled from "styled-components/macro";
import Army from "./Army";
import DisplayDeck from "./DisplayDeck";
import DisplayUnitsTable from "./DisplayUnitsTable";
import FilteringOptionsForm from "./FilteringOptionsForm";
import SelectFactionForm from "./SelectFactionForm";

const Div = styled.div`
    width: 100vw;
    height: 100%;
    background-color: ${(props) => props.theme.bg};
    padding: 10px 20px;
    display: grid;
    grid-template-rows: 150px 300px 300px;
    grid-template-columns: 160px 540px 1fr 200px;
    grid-gap: 10px;
    grid-template-areas:
        "form form deck deck"
        "army army units units"
        "army army units units";
`;

const FormDiv = styled.div`
    grid-area: form;
`;

const DeckDiv = styled.div`
    grid-area: deck;
    height: 150px;
    display: flex;
    justify-content: space-between;
`;

const ArmyDiv = styled.div`
    grid-area: army;
    overflow-y: auto;
`;

const UnitDiv = styled.div`
    grid-area: units;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

function Layout(): JSX.Element {
    return (
        <Div>
            <FormDiv>
                <SelectFactionForm />
                <FilteringOptionsForm />
            </FormDiv>
            <DeckDiv>
                <DisplayDeck />
            </DeckDiv>
            <ArmyDiv>
                <Army />
            </ArmyDiv>
            <UnitDiv>
                <DisplayUnitsTable />
            </UnitDiv>
        </Div>
    );
}

export default Layout;
