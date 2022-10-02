import styled from "styled-components/macro";
import { Attachment, CombatUnit, NCU } from "./types";
import UnitTypeIcon from "./UnitTypeIcon";

const TR = styled.tr`
    border-bottom: ${(props) => props.theme.colors.secondary} solid 1px;
`;

interface DisplayUnitsTableRowProps {
    children?: React.ReactNode;
    unit: CombatUnit | Attachment | NCU;
    canUnitBeChosen: boolean;
}

function DisplayUnitsTableRow({
    children,
    unit,
    canUnitBeChosen,
}: DisplayUnitsTableRowProps): JSX.Element {
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
