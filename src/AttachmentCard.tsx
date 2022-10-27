import { Attachment } from "./types";
import styled from "styled-components/macro";
import DisplayAbilities from "./DisplayAbilities";
import UnitTypeIcon from "./UnitTypeIcon";
import CostIcon from "./CostIcon";

const Card = styled.div`
    height: 420px;
    width: 300px;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    text-align: center;
`;

const Content = styled.div`
    height: 406px;
    width: 272px;
    position: relative;
    top: 14px;
    left: 14px;
    border: 3px solid grey;
    border-bottom: none;
`;

const TitleDiv = styled.div`
    height: 78px;
    position: relative;
    padding: 6px 6px 0;
    border-bottom: 3px solid grey; ;
`;

const CrestImg = styled.img`
    height: 40px;
    position: absolute;
    left: 6px;
    top: 16px;
`;

const Cost = styled.div`
    height: 30px;
    position: absolute;
    top: 2px;
    left: 46px;
`;

const AttType = styled.div`
    height: 34px;
    position: absolute;
    bottom: 0;
    left: 52px;
`;

const NameDiv = styled.div`
    height: 74px;
    width: 180px;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 6px;
`;

const H3 = styled.h3`
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 18px;
    font-family: "Courier New", Courier, monospace;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8),
        -1px -1px 2px rgba(0, 0, 0, 0.8);
    color: white;
    margin: 2px;
`;

const Title = styled.h4`
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 12px;
    font-family: "Courier New", Courier, monospace;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8),
        -1px -1px 2px rgba(0, 0, 0, 0.8);
    color: white;
    margin: 2px;
`;

const CardText = styled.div`
    width: 254px;
    height: 320px;
    position: absolute;
    color: #2f2f2f;
    right: 0;
    bottom: 0;
`;

function TacticsCard({ attachment }: { attachment: Attachment }): JSX.Element {
    const { name, faction, abilities, type, cost } = attachment;
    const [attName, attTitle] = name.split(", ");

    return (
        <Card
            style={{
                backgroundImage: `url(
                    "./Bg_${faction.replace(/[' ]/g, "")}.jpg"
                )`,
            }}
        >
            <Content>
                <TitleDiv>
                    <CrestImg
                        src={`./Crest${faction.replace(/[' ]/g, "")}.webp`}
                    />
                    <Cost>
                        <CostIcon value={cost} />
                    </Cost>
                    <AttType>
                        <UnitTypeIcon type={type} />
                    </AttType>
                    <NameDiv>
                        <H3>{attName}</H3>
                        <br />
                        {attTitle !== undefined && <Title>{attTitle}</Title>}
                    </NameDiv>
                </TitleDiv>

                <CardText>
                    <DisplayAbilities abilities={abilities} />
                </CardText>
            </Content>
        </Card>
    );
}

export default TacticsCard;
