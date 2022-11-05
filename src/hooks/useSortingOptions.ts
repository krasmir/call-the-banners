import { useSelector } from "react-redux";
import { RootState } from "../store";
import { SortingOptionsState } from "../store/sortingOptions/sortingOptions";

function useSortingOptions(): SortingOptionsState {
    const sortingOptions = useSelector(
        (state: RootState) => state.sortingOptions
    );

    return sortingOptions;
}

export default useSortingOptions;
