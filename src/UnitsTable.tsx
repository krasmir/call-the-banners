import styled from "styled-components/macro";

const Units = styled.div`
    border: ${(props) => props.theme.colors.secondary} solid 2px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    scrollbar-width: thin;
    text-align: center;
    overflow-y: scroll;
`;

const Div = styled.div`
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.tableTitle};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 6px;
    position: sticky;
    top: 0;
    z-index: 2;
`;

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const TH = styled.th`
    background-color: ${(props) => props.theme.colors.secondary};
    position: sticky;
    top: 30px;
    z-index: 2;
    padding: 8px;
`;

interface UnitsTableProps {
    children?: React.ReactNode;
    typeOfUnits: string;
}

function UnitsTable({ children, typeOfUnits }: UnitsTableProps): JSX.Element {
    return (
        <Units>
            <Div>{typeOfUnits}</Div>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <TH>Name</TH>
                            <TH>Type</TH>
                            <TH>Cost</TH>
                            <TH>Details</TH>
                            <TH>Add</TH>
                        </tr>
                    </thead>
                    <tbody>{children}</tbody>
                </Table>
            </div>
        </Units>
    );
}

export default UnitsTable;
