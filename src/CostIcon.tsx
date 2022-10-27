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

const ValueDiv = styled.div`
    position: absolute;
    left: 11px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
`;

interface IconProps {
    value: string;
}

function CostIcon({ value }: IconProps): JSX.Element {
    return (
        <IconDiv>
            <ValueDiv>{value}</ValueDiv>
        </IconDiv>
    );
}

export default CostIcon;
