import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { setOrder, setOrderBy } from "./store/sortingOptions/sortingOptions";
// import useFilteringOptions from "./hooks/useFilteringOptions";
import useSortingOptions from "./hooks/useSortingOptions";

const Select = styled.select`
    padding: 6px;
    border: none;
    cursor: pointer;
`;

const Option = styled.option`
    border: none;
`;

const Label = styled.label`
    font-weight: bold;
    border-radius: 3px;
    padding: 6px;
    margin: 12px;
`;

function SortingOptionsForm(): JSX.Element {
    const { order, orderBy } = useSortingOptions();

    const dispatch = useDispatch();

    const handleOrderChange = (chosenOrder: "asc" | "desc"): void => {
        dispatch(setOrder(chosenOrder));
    };

    const handleOrderByChange = (chosenOrderBy: "cost" | "name"): void => {
        dispatch(setOrderBy(chosenOrderBy));
    };

    return (
        <>
            <div>
                <Label htmlFor="orderBy">Order by:</Label>
                <Select
                    id="orderBy"
                    name="orderBy"
                    defaultValue={orderBy}
                    onChange={(e) =>
                        handleOrderByChange(e.target.value as "cost" | "name")
                    }
                >
                    <Option value="cost">Cost</Option>
                    <Option value="name">Name</Option>
                </Select>
            </div>
            <div>
                <Label htmlFor="order">Order:</Label>
                <Select
                    id="order"
                    name="order"
                    defaultValue={order}
                    onChange={(e) =>
                        handleOrderChange(e.target.value as "asc" | "desc")
                    }
                >
                    <Option value="asc">Ascending</Option>
                    <Option value="desc">Descending</Option>
                </Select>
            </div>
        </>
    );
}
export default SortingOptionsForm;
