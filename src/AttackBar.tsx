import styled from "styled-components/macro";

const AttackDiv = styled.div`
    height: 78px;
    width: 160px;
    position: relative;
`;

const IMG = styled.img`
    height: 64px;
    position: relative;
    z-index: 2;
`;

const NameDiv = styled.div`
    position: absolute;
    top: 6px;
    left: 56px;
    width: 100px;
    height: 40px;
    padding: 0 3px;
    border: 2px inset grey;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-style: italic;
    font-weight: bold;
    color: black;
    background-image: url("./Bg2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ProfileDiv = styled.div`
    position: absolute;
    width: 120px;
    height: 38px;
    top: 36px;
    left: 36px;
    display: flex;
    align-items: center;
    z-index: 3;
`;

const ValueDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    width: 38px;
    height: 38px;
    background-image: url("./Cost.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 4;
`;

const DicesDiv = styled.div`
    position: absolute;
    left: 32px;
    padding-left: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 28px;
    width: 88px;
    border: 2px inset grey;
    background-color: silver;
`;

const DiceValue = styled.div`
    background-color: green;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    height: 18px;
    width: 18px;
    border-radius: 3px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8),
        -1px -1px 2px rgba(0, 0, 0, 0.8);
`;

interface AttackBarProps {
    attackProfile: string[];
}

function AttackBar({ attackProfile }: AttackBarProps): JSX.Element {
    const [attack, toHitValue, dices] = attackProfile;
    const type = attack.match(/M|RS|RL|R/g);
    const name = attack.replace(/\[\w+\]/, "");

    let typeCode = "";
    if (type !== null) {
        typeCode = type[0];
    }
    let icon = "";
    if (typeCode === "M") icon = "Melee";
    else if (typeCode.includes("R")) {
        icon = "Ranged";
    }

    const [first, second, third] = dices.split(".");

    return (
        <AttackDiv>
            <IMG alt={icon} src={`./Icon${icon}.png`} title={icon} />
            <NameDiv>{name}</NameDiv>
            <ProfileDiv>
                <ValueDiv>{toHitValue}</ValueDiv>
                <DicesDiv>
                    <DiceValue>{first}</DiceValue>

                    {second !== undefined && (
                        <DiceValue style={{ backgroundColor: "orange" }}>
                            {second}
                        </DiceValue>
                    )}
                    {third !== undefined && (
                        <DiceValue style={{ backgroundColor: "red" }}>
                            {third}
                        </DiceValue>
                    )}
                </DicesDiv>
            </ProfileDiv>
        </AttackDiv>
    );
}

export default AttackBar;
