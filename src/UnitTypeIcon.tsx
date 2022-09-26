import styled from "styled-components/macro";

const IMG = styled.img`
    height: 40px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.9));
`;

interface UnitTypeIconProps {
    type: string;
}

function UnitTypeIcon({ type }: UnitTypeIconProps): JSX.Element {
    return (
        <IMG
            alt={type}
            src={`./UnitType${type.replace(" ", "")}.png`}
            title={type}
        />
    );
}

export default UnitTypeIcon;
