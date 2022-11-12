import styled from "styled-components/macro";
import { Attachment, CombatUnit, NCU } from "./types";
import UnitTypeIcon from "./UnitTypeIcon";

const TR = styled.tr`
    border-bottom: ${(props) => props.theme.colors.secondary} solid 1px;
`;

const Type = styled.div`
    height: 40px;
`;

interface DisplayUnitsTableRowProps {
    unit: CombatUnit | Attachment | NCU;
    canUnitBeChosen: boolean;
    addUnitButton: React.ReactNode;
    showUnitButton: React.ReactNode;
}

function DisplayUnitsTableRow({
    unit,
    canUnitBeChosen,
    addUnitButton,
    showUnitButton,
}: DisplayUnitsTableRowProps): JSX.Element {
    const calculateOpacity = canUnitBeChosen ? "1" : "0.4";

    const type = unit.type ?? "NCU";

    return (
        <TR>
            <td
                style={{
                    opacity: calculateOpacity,
                }}
            >
                {unit.name}
            </td>
            <td
                style={{
                    opacity: calculateOpacity,
                }}
            >
                <Type>
                    <UnitTypeIcon type={type} />
                </Type>
            </td>
            <td
                style={{
                    opacity: calculateOpacity,
                }}
            >
                {unit.cost}
            </td>
            <td>{showUnitButton}</td>
            <td>{canUnitBeChosen && addUnitButton}</td>
        </TR>
    );
}

export default DisplayUnitsTableRow;
