import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import {
    FilteringOptionsState,
    setfilteringOptions,
} from "./store/filteringOptions/filteringOptions";
import useFilteringOptions from "./hooks/useFilteringOptions";

const Label = styled.label`
    font-weight: bold;
    border-radius: 3px;
    padding: 6px;
    margin: 12px;
`;

function FilteringOptionsForm(): JSX.Element {
    const { includeNeutrals, loyaltyRenly, loyaltyStannis } =
        useFilteringOptions();

    const dispatch = useDispatch();

    const handleChange = (
        opt: keyof FilteringOptionsState,
        currState: boolean
    ): void => {
        dispatch(
            setfilteringOptions({
                option: opt,
                payload: !currState,
            })
        );
    };

    return (
        <>
            <div>
                <Label htmlFor="includeNeutrals">Include neutral units:</Label>
                <input
                    type="checkbox"
                    id="includeNeutrals"
                    checked={includeNeutrals}
                    onChange={() =>
                        handleChange("includeNeutrals", includeNeutrals)
                    }
                />
            </div>
            <div>
                <Label htmlFor="loyaltyRenly">Include Renly units:</Label>
                <input
                    type="checkbox"
                    id="loyaltyRenly"
                    checked={loyaltyRenly}
                    onChange={() => handleChange("loyaltyRenly", loyaltyRenly)}
                />
            </div>
            <div>
                <Label htmlFor="loyaltyStannis">Include Stannis units:</Label>
                <input
                    type="checkbox"
                    id="loyaltyStannis"
                    checked={loyaltyStannis}
                    onChange={() =>
                        handleChange("loyaltyStannis", loyaltyStannis)
                    }
                />
            </div>
        </>
    );
}
export default FilteringOptionsForm;
