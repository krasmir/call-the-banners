import styled from "styled-components/macro";
import ProcessCardText from "./ProcessCardText";
import { Skill } from "./types";

const IconsDiv = styled.div`
    position: absolute;
    left: -46px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 56px;
`;

const WoundDiv = styled.div`
    height: 56px;
    width: 56px;
    position: relative;
    color: white;
    font-weight: bold;
    background-image: url("./IconWound.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ValueDiv = styled.span`
    position: relative;
    top: 19px;
    left: 24px;
    font-size: 15px;
    font-family: sans-serif;
`;

const IMG = styled.img`
    height: 56px;
    position: relative;
    z-index: 2;
`;

const AbilityDiv = styled.div`
    width: 90%;
    position: relative;
    right: 0;
    margin-left: auto;
    margin-bottom: 10px;
    padding: 0 12px 4px;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 15px;
    color: black;
    border: 3px inset grey;
    border-right: none;
    background-image: url("./Bg2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const NameDiv = styled.div`
    padding-top: 6px;
    width: 100%;
    font-size: 14px;
    text-transform: uppercase;
    color: maroon;
`;

interface AbilityProps extends Skill {}

function Ability({ description, icons, name }: AbilityProps): JSX.Element {
    const Icons: { [key: string]: string } = {
        M: "Melee",
        R: "Ranged",
        O: "Order",
        P: "Pillage",
        W: "Wound",
        F: "Faith",
        V: "Venom",
        Fire: "Fire",
    };
    const iconsArr = icons.split(",");

    name.includes("Order") && iconsArr.push("O");
    let numOfWounds = "";
    if (/has \d Wounds/.test(description)) {
        const match = description.match(/\d Wounds/);
        if (match !== null) numOfWounds = match[0].replace(/[^\d]/g, "");
    }

    return (
        <AbilityDiv>
            <IconsDiv>
                {iconsArr.map((val, ind) => {
                    if (val === "") return null;
                    const icon = Icons[val];
                    if (icon === "Wound" && numOfWounds !== "") {
                        return (
                            <WoundDiv key={ind}>
                                <ValueDiv>{numOfWounds}</ValueDiv>
                            </WoundDiv>
                        );
                    } else
                        return (
                            <IMG
                                alt={icon}
                                src={`./Icon${icon}.png`}
                                title={icon}
                                key={ind}
                            />
                        );
                })}
            </IconsDiv>
            <NameDiv>{name}</NameDiv>
            <ProcessCardText cardText={description} />
        </AbilityDiv>
    );
}

export default Ability;
