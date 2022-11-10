import { TacticCard } from "./types";
import styled from "styled-components/macro";
import ProcessCardText from "./ProcessCardText";

const Card = styled.div`
    height: 100%;
    width: 100px;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
    padding: 0 5px;
    text-align: center;
    font-size: 5px;

    &:hover {
        transform: scale(4) translate(-35%, 20%);
        z-index: 5;
    }
`;

const TitleDiv = styled.div`
    height: 16%;
    display: flex;
    margin: 2%;
`;

const CrestImg = styled.img`
    height: 100%;
`;

const H3 = styled.h3`
    letter-spacing: 1px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: bold;
    font-size: 5px;
    font-family: "Courier New", Courier, monospace;
    color: white;
    margin: 2px;
`;

const Deck = styled(H3)`
    font-size: 4px;
    margin: 0 auto;
`;

const CardText = styled.div`
    width: 90%;
    height: 70%;
    position: absolute;
    top: 26%;
    padding: 0 1%;
    font-family: Georgia, "Times New Roman", Times, serif;
    color: black;
    border: 1px inset grey;
    background-image: url("./Bg2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

function SmallTacticsCard({ card }: { card: TacticCard }): JSX.Element {
    const { name, text, deck, faction } = card;

    return (
        <Card
            style={{
                backgroundImage: `url(
                    "./Bg_${card.faction.replace(/[' ]/g, "")}.jpg"
                )`,
            }}
        >
            <TitleDiv>
                <CrestImg
                    src={`./Crest${card.faction.replace(/[' ]/g, "")}.webp`}
                />
                <H3>{name}</H3>
            </TitleDiv>
            {!deck.includes("Basic Deck") && <Deck>{deck}</Deck>}

            <CardText>
                <ProcessCardText factionColor={faction} cardText={text} />
            </CardText>
        </Card>
    );
}

export default SmallTacticsCard;
