import styled from "styled-components/macro";
import useCurrentFaction from "./hooks/useCurrentFaction";
import useSelectedUnits from "./hooks/useSelectedUnits";
import { Attachment, CombatUnit, Faction, NCU } from "./types";
import UnitTypeIcon from "./UnitTypeIcon";

const TR = styled.tr`
    border-bottom: ${(props) => props.theme.colors.secondary} solid 1px;
`;

interface DisplayUnitsTableRowProps {
    children?: React.ReactNode;
    character: string;
    unit: CombatUnit | Attachment | NCU;
}

function DisplayUnitsTableRow({
    children,
    character,
    unit,
}: DisplayUnitsTableRowProps): JSX.Element {
    const currentFaction = useCurrentFaction();
    const { selectedCharacters, selectedCommander } = useSelectedUnits(
        currentFaction as Faction
    );

    const checkIfUnitCanBeChosen = (character: string): boolean => {
        if (unit.cost === "C" && selectedCommander !== undefined) return false;
        if (character.includes(", ")) {
            const characterArr = character.split(", ");
            return !characterArr.some((char) => selectedCharacters.has(char));
        } else return !selectedCharacters.has(character);
    };
    const canUnitBeChosen = checkIfUnitCanBeChosen(character);

    const calculateOpacity = canUnitBeChosen ? "1" : "0.4";

    const type = unit.type ?? "NCU";

    return (
        <TR
            style={{
                opacity: calculateOpacity,
            }}
        >
            <td>{unit.name}</td>
            <td>
                <UnitTypeIcon type={type} />
            </td>
            <td>{unit.cost}</td>
            <td>{canUnitBeChosen && children}</td>
        </TR>
    );
}

export default DisplayUnitsTableRow;
