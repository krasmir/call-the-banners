import styled from "styled-components/macro";
import AttackBar from "./AttackBar";
import DisplayAbilities from "./DisplayAbilities";
import Icon from "./Icon";
import { CombatUnit } from "./types";
import UnitTypeIcon from "./UnitTypeIcon";

const UnitCard = styled.div`
    width: 600px;
    height: 400px;
    border-radius: 8px;
    background-color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
`;

const InfoDiv = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    padding-left: 6px;
`;

const SpeedDiv = styled.div`
    margin: 6px;
    height: 20%;
`;
const AttacksDiv = styled.div`
    margin: 6px;
    height: 40%;
`;
const MoraleDefenceDiv = styled.div`
    margin: 6px;
    height: 20%;
    display: flex;
`;
const TypeNameDiv = styled.div`
    margin: 6px;
    height: 20%;
    font-size: 1.2em;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #cdcdcd;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
`;

const Type = styled.div`
    height: 40px;
`;

const SkillsDiv = styled.div`
    height: 100%;
    width: 60%;
    padding: 6px 0;
`;

function Unit({ unit }: { unit: CombatUnit }): JSX.Element {
    return (
        <UnitCard
            style={{
                backgroundImage: `url(
                    "./Bg_${unit.faction.replace(/[' ]/g, "")}.jpg"
                )`,
            }}
        >
            <InfoDiv>
                <SpeedDiv>
                    <Icon icon="Movement" value={unit.speed} />
                </SpeedDiv>
                <AttacksDiv>
                    <AttackBar attackProfile={unit.attack1} />
                    {unit.attack2.filter((val) => val).length > 0 && (
                        <AttackBar attackProfile={unit.attack2} />
                    )}
                </AttacksDiv>
                <MoraleDefenceDiv>
                    <Icon icon="Defense" value={unit.defence} />
                    <Icon icon="Morale" value={unit.morale} />
                </MoraleDefenceDiv>
                <TypeNameDiv>
                    <Type>
                        <UnitTypeIcon type={unit.type} />
                    </Type>
                    {unit.name}
                </TypeNameDiv>
            </InfoDiv>
            <SkillsDiv>
                <DisplayAbilities abilities={unit.abilities} />
            </SkillsDiv>
        </UnitCard>
    );
}
export default Unit;
