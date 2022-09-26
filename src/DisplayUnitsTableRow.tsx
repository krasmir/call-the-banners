import styled from "styled-components/macro";

const TR = styled.tr`
    border-bottom: 1px solid #f7af14;
`;

interface DisplayUnitsTableRowProps {
    children?: React.ReactNode;
    character: string;
    selectedCharacters: string[];
}

function DisplayUnitsTableRow({
    children,
    character,
    selectedCharacters,
}: DisplayUnitsTableRowProps): JSX.Element {
    return (
        <TR
            style={{
                opacity: selectedCharacters.includes(character) ? "0.2" : "1",
            }}
        >
            {children}
        </TR>
    );
}

export default DisplayUnitsTableRow;
