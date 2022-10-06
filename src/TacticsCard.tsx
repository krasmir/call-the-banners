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
    border: ${(props) => props.theme.colors.secondary} solid 1px;

    padding: 0 5px;
    text-align: center;
    font-size: 6px;
    &:hover {
        transform: scale(3) translate(-35%, 20%);
        z-index: 5;
    }
`;
const H3 = styled.h3`
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: bold;
    margin: 2px;
`;

const H4 = styled.h4`
    font-weight: bold;
    margin: 2px;
`;

const CardText = styled.div`
    width: 90%;
    height: 60%;
    position: absolute;
    top: 30%;
    padding: 5%;
    font-size: 4px;
    color: black;
    background-image: url("./Bg2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

function TacticsCard({ card }: { card: TacticCard }): JSX.Element {
    const { name, text } = card;
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

    return (
        <Card
            style={{
                backgroundImage: `url(
                    "./Bg_${card.faction.replace(/[' ]/g, "")}.jpg"
                )`,
            }}
        >
            <H3>{name}</H3>
            <CardText>
                <H4>{firstTrigger}</H4>
                <p>{newText[0]}</p>
                {secondTrigger !== undefined && (
                    <>
                        <hr />
                        <H4>{secondTrigger}</H4>
                        <p>{newText[1]}</p>
                    </>
                )}
            </CardText>
        </Card>
    );
}

export default TacticsCard;
