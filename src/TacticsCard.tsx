import { TacticCard } from "./types";
import styled from "styled-components/macro";
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

const TitleDiv = styled.div`
    height: 74px;
    display: flex;
    padding: 16px 16px 0;
`;

const CrestImg = styled.img`
    height: 60px;
`;

const H3 = styled.h3`
    letter-spacing: 1px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 6px;
    font-size: 18px;
    font-family: "Courier New", Courier, monospace;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8),
        -1px -1px 2px rgba(0, 0, 0, 0.8);
    color: white;
    margin: 2px;
`;

const Deck = styled(H3)`
    font-size: 14px;
    width: 100%;
    height: 30px;
    padding: 0 16px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8),
        -1px -1px 2px rgba(0, 0, 0, 0.8);
`;

const CardText = styled.div`
    width: 268px;
    height: 70%;
    position: absolute;
    left: 16px;
    bottom: 16px;
    padding: 0 4%;
    font-size: 15px;
    font-family: Georgia, "Times New Roman", Times, serif;
    color: black;
    border: 3px inset grey;
    background-image: url("./Bg2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

function TacticsCard({ card }: { card: TacticCard }): JSX.Element {
    const { name, text, deck } = card;

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
                <ProcessCardText cardText={text} />
            </CardText>
        </Card>
    );
}

export default TacticsCard;
