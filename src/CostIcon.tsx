import styled from "styled-components/macro";

const IconDiv = styled.div`
    height: 34px;
    width: 34px;
    position: relative;
    color: #cdcdcd;
    background-image: url("./Cost.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const CommanderIconDiv = styled(IconDiv)`
    background-image: url("./CommanderCost.png");
`;

const ValueDiv = styled.div`
    position: absolute;
    left: 11px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
`;

const CommanderValue = styled(ValueDiv)`
    left: 10px;
`;

interface IconProps {
    value: string;
}

function CostIcon({ value }: IconProps): JSX.Element {
    return value === "C" ? (
        <CommanderIconDiv>
            <CommanderValue>{value}</CommanderValue>
        </CommanderIconDiv>
    ) : (
        <IconDiv>
            <ValueDiv>{value}</ValueDiv>
        </IconDiv>
    );
}

export default CostIcon;
