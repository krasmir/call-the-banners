import { useMemo } from "react";
import { Faction } from "../types";
import getUnits, { Units } from "../utils/getUnits";
import useCurrentFaction from "./useCurrentFaction";
import useFilteringOptions from "./useFilteringOptions";
import useSortingOptions from "./useSortingOptions";

function useGetUnits(): Units {
    const currentFaction = useCurrentFaction();
    const filteringOptions = useFilteringOptions();
    const sortingOptions = useSortingOptions();

    const units = useMemo(
        () =>
            getUnits(
                currentFaction as Faction,
                filteringOptions,
                sortingOptions
            ),
        [currentFaction, filteringOptions, sortingOptions]
    );
    return units;
}

export default useGetUnits;
