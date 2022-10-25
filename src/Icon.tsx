import styled from "styled-components/macro";

const IconDiv = styled.div`
    height: 64px;
    width: 128px;
    position: relative;
`;

const IMG = styled.img`
    height: 100%;
    position: relative;
    z-index: 2;
`;

const ValueDiv = styled.div`
    position: absolute;
    left: 54px;
    top: 50%;
    transform: translateY(-50%);
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
`;

interface IconProps {
    icon: string;
    value: string;
}

function Icon({ icon, value }: IconProps): JSX.Element {
    return (
        <IconDiv>
            <IMG alt={icon} src={`./Icon${icon}.png`} title={icon} />
            <ValueDiv>{value}</ValueDiv>
        </IconDiv>
    );
}

export default Icon;
