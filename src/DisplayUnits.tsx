import { useMemo } from "react";
import UnitsTable from "./UnitsTable";
import DisplayAttachments from "./DisplayAttachments";
import DisplayCombatUnits from "./DisplayCombatUnits";
import DisplayNonCombatUnits from "./DisplayNonCombatUnits";
import getUnits from "./utils/getUnits";
import useCurrentFaction from "./hooks/useCurrentFaction";
import { Faction } from "./types";

function DisplayUnits(): JSX.Element {
    const currentFaction = useCurrentFaction();

    const { factionAttachments, factionCommanders, factionNCUS, factionUnits } =
        useMemo(() => getUnits(currentFaction as Faction), [currentFaction]);

    return (
        <>
            <UnitsTable typeOfUnits="Combat Units">
                <DisplayCombatUnits factionUnits={factionUnits} />
            </UnitsTable>
            <UnitsTable typeOfUnits="Commanders">
                <DisplayAttachments factionAttachments={factionCommanders} />
            </UnitsTable>
            <UnitsTable typeOfUnits="Non-Combat Units">
                <DisplayNonCombatUnits factionNCUS={factionNCUS} />
            </UnitsTable>
            <UnitsTable typeOfUnits="Attachments">
                <DisplayAttachments factionAttachments={factionAttachments} />
            </UnitsTable>
        </>
    );
}

export default DisplayUnits;
