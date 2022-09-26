import styled from "styled-components/macro";

const Units = styled.div`
    overflow-y: scroll;
    scrollbar-width: thin;

    text-align: center;
    font-weight: bold;
    border: #f7af14 solid 2px;
`;

const Div = styled.div`
    background-color: ${(props) => props.theme.bg};
    position: sticky;
    top: 0;
    z-index: 2;
`;

const TableDiv = styled.div`
    width: 100%;
`;

const Table = styled.table`
    width: 100%;
`;

const TH = styled.th`
    background-color: grey;
    color: darkmagenta;
    position: sticky;
    top: 18px;
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
            <TableDiv>
                <Table>
                    <thead>
                        <tr>
                            <TH>Name</TH>
                            <TH>Type</TH>
                            <TH>Cost</TH>
                            <TH>Add</TH>
                        </tr>
                    </thead>
                    <tbody>{children}</tbody>
                </Table>
            </TableDiv>
        </Units>
    );
}

export default UnitsTable;
