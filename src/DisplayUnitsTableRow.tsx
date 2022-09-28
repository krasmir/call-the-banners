import styled from "styled-components/macro";
import { Attachment } from "./types";

const TR = styled.tr`
    border-bottom: 1px solid #f7af14;
`;

interface DisplayUnitsTableRowProps {
    children?: React.ReactNode;
    character: string;
    selectedCharacters: Set<string>;
    selectedCommander?: Attachment | undefined;
}

function DisplayUnitsTableRow({
    children,
    character,
    selectedCharacters,
    selectedCommander,
}: DisplayUnitsTableRowProps): JSX.Element {
    const calculateOpacity = (character: string): string => {
        if (selectedCommander !== undefined) return "0.2";
        if (character.includes(", ")) {
            const characterArr = character.split(", ");
            return characterArr.some((char) => selectedCharacters.has(char))
                ? "0.2"
                : "1";
        } else return selectedCharacters.has(character) ? "0.2" : "1";
    };

    return (
        <TR
            style={{
                opacity: calculateOpacity(character),
            }}
        >
            {children}
        </TR>
    );
}

export default DisplayUnitsTableRow;
