import styled from "styled-components/macro";
import Army from "./Army";
import DisplayDeck from "./DisplayDeck";
import DisplayUnits from "./DisplayUnits";
import SelectFactionForm from "./SelectFactionForm";

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.bg};
    padding: 10px 20px;
    display: grid;
    grid-template-rows: 100px 150px 300px 300px;
    grid-template-columns: 160px 540px 1fr 200px;
    grid-gap: 10px;
    grid-template-areas:
        "logo heading nav themeButton"
        "form form deck deck"
        "army army units units"
        "army army units units";
`;

const Nav = styled.nav`
    grid-area: nav;
    height: 100%;
`;

const H1 = styled.h1`
    grid-area: heading;
    height: 100%;
    text-align: center;
    font-size: 1.8em;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const Span = styled.span`
    font-size: 0.7em;
    text-transform: none;
    letter-spacing: unset;
`;

const Logo = styled.div`
    grid-area: logo;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Img = styled.img`
    height: 100px;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.9));
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
interface LayoutProps {
    children?: React.ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <Div>
            <H1>
                Call the banners <br />
                <Span>A Song of Ice and Fire TMG army builder</Span>
            </H1>
            <Nav></Nav>
            {children}
            <Logo>
                <Img src="./Logo.png" alt="A Song of Ice and Fire logo" />
            </Logo>
            <FormDiv>
                <SelectFactionForm />
            </FormDiv>
            <DeckDiv>
                <DisplayDeck></DisplayDeck>
            </DeckDiv>
            <ArmyDiv>
                <Army />
            </ArmyDiv>
            <UnitDiv>
                <DisplayUnits />
            </UnitDiv>
        </Div>
    );
}

export default Layout;
