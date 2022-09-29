import styled from "styled-components/macro";
import { Attachment, CombatUnit, NCU } from "./types";
import UnitTypeIcon from "./UnitTypeIcon";

const TR = styled.tr`
    border-bottom: 1px solid #f7af14;
`;

interface DisplayUnitsTableRowProps {
    children?: React.ReactNode;
    character: string;
    selectedCharacters: Set<string>;
    selectedCommander?: Attachment | undefined;
    unit: CombatUnit | Attachment | NCU;
}

function DisplayUnitsTableRow({
    children,
    character,
    selectedCharacters,
    selectedCommander,
    unit,
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

    const type = unit.type ?? "NCU";

    return (
        <TR
            style={{
                opacity: calculateOpacity(character),
            }}
        >
            <td>{unit.name}</td>
            <td>
                <UnitTypeIcon type={type} />
            </td>
            <td>{unit.cost}</td>
            <td>{children}</td>
        </TR>
    );
}

export default DisplayUnitsTableRow;
