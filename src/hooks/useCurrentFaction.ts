import { useSelector } from "react-redux";
import { RootState } from "../store";

function useCurrentFaction(): string {
    const { currentFaction } = useSelector(
        (state: RootState) => state.currentFaction
    );

    return currentFaction;
}

export default useCurrentFaction;
