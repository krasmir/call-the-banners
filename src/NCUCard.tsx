import { NCU } from "./types";
import styled from "styled-components/macro";
import UnitTypeIcon from "./UnitTypeIcon";
import CostIcon from "./CostIcon";
import ProcessCardText from "./ProcessCardText";

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
    height: 392px;
    width: 272px;
    position: relative;
    top: 14px;
    left: 14px;
    border: 3px solid grey;
    /* border-bottom: none; */
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
    text-align: center;
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
    width: 266px;
    height: 308px;
    padding: 2% 4%;
    position: relative;
    font-size: 14px;
    color: #2f2f2f;
    top: -2px;
    left: 0;
    background-image: url("./Bg2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    line-height: 12px;
`;

function NCUCard({ ncu }: { ncu: NCU }): JSX.Element {
    const { name, names, descriptions, faction, cost } = ncu;
    const [ncuName, ncuTitle] = name.split(", ");

    const abilitiesNames = names
        .split(/ \/\s*/)
        .map((name) => "**" + name + "**");
    const abilitiesDescription = descriptions
        .split(/ \/\s*/)
        .map((desc) => desc.replace(/\n/g, "\n\n"));

    const abilitiesArr = [abilitiesNames[0], abilitiesDescription[0]];

    if (abilitiesNames.length > 1 && abilitiesDescription.length > 1) {
        abilitiesArr.push(" /\n" + abilitiesNames[1], abilitiesDescription[1]);
    }

    const abilities = abilitiesArr.join("");

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
                        <UnitTypeIcon type="NCU" />
                    </AttType>
                    <NameDiv>
                        <H3>{ncuName}</H3>
                        {ncuTitle !== undefined && <Title>{ncuTitle}</Title>}
                    </NameDiv>
                </TitleDiv>

                <CardText>
                    <ProcessCardText
                        factionColor={faction}
                        cardText={abilities}
                    />
                </CardText>
            </Content>
        </Card>
    );
}

export default NCUCard;
