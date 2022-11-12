import styled from "styled-components/macro";
import AttackBar from "./AttackBar";
import CostIcon from "./CostIcon";
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
    position: relative;
`;

const InfoDiv = styled.div`
    position: absolute;
    left: 8px;
    top: 12px;
    display: grid;
    grid-template-columns: 110px 110px;
    grid-template-rows: 64px 156px 64px 80px;
    grid-gap: 4px;
    grid-template-areas:
        "speed cost"
        "attacks attacks"
        "defence morale "
        "typeName typeName";
    padding-left: 6px;
`;

const SpeedDiv = styled.div`
    grid-area: speed;
`;
const CostDiv = styled.div`
    grid-area: cost;
    padding-top: 4px;
    font-size: 18px;
    text-transform: uppercase;
    color: #cdcdcd;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const AttacksDiv = styled.div`
    grid-area: attacks;
`;
const MoraleDiv = styled.div`
    grid-area: morale;
`;
const DefenceDiv = styled.div`
    grid-area: defence;
`;
const TypeNameDiv = styled.div`
    grid-area: typeName;
    position: relative;
`;

const Type = styled.div`
    height: 40px;
    position: absolute;
    left: 12px;
    top: 20px;
`;

const NameDiv = styled.div`
    height: 100%;
    width: 170px;
    position: absolute;
    right: 4px;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #cdcdcd;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
`;

const SkillsDiv = styled.div`
    position: absolute;
    top: 12px;
    right: 0;
    height: 100%;
    width: 60%;
    padding: 6px 0;
`;

function CombatUnitCard({
    combatUnit,
}: {
    combatUnit: CombatUnit;
}): JSX.Element {
    return (
        <UnitCard
            style={{
                backgroundImage: `url(
                    "./Bg_${combatUnit.faction.replace(/[' ]/g, "")}.jpg"
                )`,
            }}
        >
            <InfoDiv>
                <SpeedDiv>
                    <Icon icon="Movement" value={combatUnit.speed} />
                </SpeedDiv>
                <CostDiv>
                    Value
                    <CostIcon value={combatUnit.cost} />
                </CostDiv>
                <AttacksDiv>
                    <AttackBar attackProfile={combatUnit.attack1} />
                    {combatUnit.attack2.filter((val) => val).length > 0 && (
                        <AttackBar attackProfile={combatUnit.attack2} />
                    )}
                </AttacksDiv>
                <DefenceDiv>
                    <Icon icon="Defense" value={combatUnit.defence} />
                </DefenceDiv>
                <MoraleDiv>
                    <Icon icon="Morale" value={combatUnit.morale} />
                </MoraleDiv>
                <TypeNameDiv>
                    <Type>
                        <UnitTypeIcon type={combatUnit.type} />
                    </Type>
                    <NameDiv>{combatUnit.name}</NameDiv>
                </TypeNameDiv>
            </InfoDiv>
            <SkillsDiv>
                <DisplayAbilities
                    faction={combatUnit.faction}
                    abilities={combatUnit.abilities}
                />
            </SkillsDiv>
        </UnitCard>
    );
}
export default CombatUnitCard;
