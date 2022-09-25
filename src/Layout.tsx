import styled from "styled-components/macro";
import Army from "./Army";
import DisplayAttachments from "./DisplayAttachments";
import DisplayCombatUnits from "./DisplayCombatUnits";
import DisplayCommanders from "./DisplayCommanders";
import DisplayNonCombatUnits from "./DisplayNonCombatUnits";
import DisplayUnits from "./DisplayUnits";
import useSelectedCharacters from "./hooks/useSelectedCharacters";
import { Faction } from "./types";

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.colors.main};
    padding: 20px;
    display: grid;
    grid-template-rows: 100px 100px 300px 300px;
    /* grid-template-rows: 1fr 1fr 3fr 3fr; */
    grid-template-columns: 240px 1fr 1fr 240px;
    grid-gap: 10px;
    grid-template-areas:
        "logo1 form form logo2"
        "logo1 deck deck logo2"
        "army army units units"
        "army army units units";
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
    const faction = Faction.Lannister;

    const selectedCharacters = useSelectedCharacters(faction);

    return (
        <Div>
            {children}
            <ArmyDiv>
                <Army faction={faction} />
            </ArmyDiv>
            <UnitDiv>
                <DisplayUnits typeOfUnits="Units">
                    <DisplayCombatUnits
                        faction={faction}
                        selectedCharacters={selectedCharacters}
                    />
                </DisplayUnits>
                <DisplayUnits typeOfUnits="Commanders">
                    <DisplayCommanders
                        faction={faction}
                        selectedCharacters={selectedCharacters}
                    />
                </DisplayUnits>
                <DisplayUnits typeOfUnits="Non Combat Units">
                    <DisplayNonCombatUnits
                        faction={faction}
                        selectedCharacters={selectedCharacters}
                    />
                </DisplayUnits>
                <DisplayUnits typeOfUnits="Attachments">
                    <DisplayAttachments
                        faction={faction}
                        selectedCharacters={selectedCharacters}
                    />
                </DisplayUnits>
            </UnitDiv>
        </Div>
    );
}

export default Layout;
