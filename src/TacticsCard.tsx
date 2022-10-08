import { TacticCard } from "./types";
import styled from "styled-components/macro";

const Card = styled.div`
    height: 100%;
    width: 100px;
    position: relative;
    background-color: ${(props) => props.theme.bg};
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

const H4 = styled.h4`
    font-weight: bold;
    font-size: 5px;
    margin: 2px;
`;

const CardText = styled.div`
    width: 90%;
    height: 70%;
    position: absolute;
    top: 26%;
    padding: 0 5%;
    font-size: 5px;
    font-family: Georgia, "Times New Roman", Times, serif;
    color: black;
    border: 1px inset grey;
    background-image: url("./Bg2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const IMG = styled.img`
    height: 1.5em;
    transform: translateY(20%);
`;

function TacticsCard({ card }: { card: TacticCard }): JSX.Element {
    const { name, text, deck } = card;
    let firstTrigger: string = "";
    let secondTrigger: string | undefined;

    const triggerMatch = text.match(/(?<=^|\/\s)\*\*[^*/]+?\*\*/g);

    if (triggerMatch !== null) {
        firstTrigger = triggerMatch[0].replace(/\*|\//g, "");
        if (triggerMatch.length > 1)
            secondTrigger = triggerMatch[1].replace(/\*|\//g, "");
    }

    const newText = text
        .split(/(?<=^|\/\s)\*\*[^*/]+?\*\*/g)
        .filter((val) => val)
        .map((val) => val.replace(/\*|\//g, ""));

    const icons = [
        "CROWN",
        "LETTER",
        "MONEY",
        "SWORDS",
        "HORSE",
        "MOVEMENT",
        "UNDYING",
        "OASIS",
    ];

    const processText = (text: string): JSX.Element => {
        const textArr = text.split(/\[|\]/g);
        console.log(textArr);
        return (
            <>
                {textArr.map((text, ind) =>
                    icons.includes(text) ? (
                        <IMG
                            key={ind}
                            alt={text}
                            src={`./${text}.png`}
                            title={text}
                            style={{
                                filter: ` ${
                                    text !== "MOVEMENT"
                                        ? "invert(100%)"
                                        : "none"
                                }`,
                            }}
                        />
                    ) : (
                        <span key={ind}>{text}</span>
                    )
                )}
            </>
        );
    };

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
                <H4>{processText(firstTrigger)}</H4>
                <p>{processText(newText[0])}</p>
                {secondTrigger !== undefined && (
                    <>
                        <hr />
                        <H4>{processText(secondTrigger)}</H4>
                        <p>{processText(newText[1])}</p>
                    </>
                )}
            </CardText>
        </Card>
    );
}

export default TacticsCard;
