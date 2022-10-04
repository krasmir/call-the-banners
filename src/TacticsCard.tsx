import { TacticCard } from "./types";
import styled from "styled-components/macro";

const Card = styled.div`
    height: 100%;
    width: 100px;
    background-color: ${(props) => props.theme.bg};
    border: ${(props) => props.theme.colors.secondary} solid 1px;

    padding: 0 5px;
    text-align: center;
    font-size: 0.4em;
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

function TacticsCard({ card }: { card: TacticCard }): JSX.Element {
    const { name, text } = card;
    let trigger: string = "";
    // const triggerMatch = text.match(/(?<=\*\*)[^*/]+?(?=\*\*)/g);
    const triggerMatch = text.match(/^\*\*[^*/]+?\*\*/g);
    console.log(triggerMatch);
    if (triggerMatch !== null) {
        trigger = triggerMatch[0];
    }
    const newText = text.replace(/^\*\*[^*]+\*\*/, "");
    // console.log(text);
    // console.log(trigger);
    return (
        <Card>
            <H3>{name}</H3>
            <H4>{trigger}</H4>
            <p>{newText}</p>
        </Card>
    );
}

export default TacticsCard;
