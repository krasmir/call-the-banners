import { useSelector } from "react-redux";
import { RootState } from "../store";
import { FilteringOptionsState } from "../store/filteringOptions/filteringOptions";

function useFilteringOptions(): FilteringOptionsState {
    const filteringOptions = useSelector(
        (state: RootState) => state.filteringOptions
    );

    return filteringOptions;
}

export default useFilteringOptions;
