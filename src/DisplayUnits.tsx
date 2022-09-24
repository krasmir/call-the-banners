import styled from "styled-components/macro";

const Units = styled.div`
    overflow-y: scroll;
    /* scrollbar-color: darkgrey ${(props) => props.theme.bg}; */
    scrollbar-width: thin;

    /* color: beige; */
    text-align: center;
    font-weight: bold;
    border: #f7af14 solid 2px;
    /* box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.9); */
`;

const Div = styled.div`
    top: 0;
    /* z-index: 5; */
`;

const TableDiv = styled.div`
    width: 100%;
`;

const UnitsTable = styled.table`
    width: 100%;
`;

const TH = styled.th`
    background-color: lightgrey;
    color: darkmagenta;
    position: sticky;
    top: 0;
    z-index: 2;
    padding: 8px;
`;

interface DisplayUnitsProps {
    children?: React.ReactNode;
    typeOfUnits: string;
}

function DisplayUnits({
    children,
    typeOfUnits,
}: DisplayUnitsProps): JSX.Element {
    return (
        <Units>
            <Div>{typeOfUnits}</Div>
            <TableDiv>
                <UnitsTable>
                    <thead>
                        <tr>
                            <TH>Name</TH>
                            <TH>Type</TH>
                            <TH>Cost</TH>
                            <TH>Add</TH>
                        </tr>
                    </thead>
                    <tbody>{children}</tbody>
                </UnitsTable>
            </TableDiv>
        </Units>
    );
}

export default DisplayUnits;
