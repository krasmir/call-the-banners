import styled from "styled-components/macro";

const IconDiv = styled.div`
    height: 90px;
    position: relative;
    top: -10px;
    left: 4px;
`;

const IMG = styled.img`
    height: 100%;
    position: absolute;
    z-index: 2;
`;

const ValueDiv = styled.div`
    position: absolute;
    top: 52px;
    left: 6px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    width: 30px;
    height: 30px;
    color: #cdcdcd;
    background-image: url("./Cost.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

function MoraleVertIcon(): JSX.Element {
    return (
        <IconDiv>
            <IMG alt="Morale" src="./IconMorale.png" title="Morale" />
            <ValueDiv>{"5+"}</ValueDiv>
        </IconDiv>
    );
}

export default MoraleVertIcon;
