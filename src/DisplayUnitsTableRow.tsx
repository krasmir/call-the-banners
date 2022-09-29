import styled from "styled-components/macro";
import { Attachment, CombatUnit, NCU } from "./types";
import UnitTypeIcon from "./UnitTypeIcon";

const TR = styled.tr`
    border-bottom: ${(props) => props.theme.colors.secondary} solid 1px;
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
        const visible = "1";
        const transparent = "0.4";
        if (selectedCommander !== undefined) return transparent;
        if (character.includes(", ")) {
            const characterArr = character.split(", ");
            return characterArr.some((char) => selectedCharacters.has(char))
                ? transparent
                : visible;
        } else return selectedCharacters.has(character) ? transparent : visible;
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
