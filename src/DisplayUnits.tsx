import DisplayAttachments from "./DisplayAttachments";
import DisplayCombatUnits from "./DisplayCombatUnits";
import DisplayNonCombatUnits from "./DisplayNonCombatUnits";
import useSelectedUnits from "./hooks/useSelectedUnits";
import getUnits from "./utils/getUnits";
import { Faction } from "./types";
import UnitsTable from "./UnitsTable";
import { useMemo } from "react";
import useCurrentFaction from "./hooks/useCurrentFaction";

function DisplayUnits(): JSX.Element {
    const currentFaction = useCurrentFaction();
    const { selectedCharacters, selectedCombatUnits, selectedCommander } =
        useSelectedUnits(currentFaction as Faction);
    const { factionAttachments, factionCommanders, factionNCUS, factionUnits } =
        useMemo(() => getUnits(currentFaction as Faction), [currentFaction]);

    return (
        <>
            <UnitsTable typeOfUnits="Combat Units">
                <DisplayCombatUnits
                    factionUnits={factionUnits}
                    selectedCharacters={selectedCharacters}
                />
            </UnitsTable>
            <UnitsTable typeOfUnits="Commanders">
                <DisplayAttachments
                    selectedCommander={selectedCommander}
                    factionAttachments={factionCommanders}
                    selectedCharacters={selectedCharacters}
                    selectedCombatUnits={selectedCombatUnits}
                />
            </UnitsTable>
            <UnitsTable typeOfUnits="Non-Combat Units">
                <DisplayNonCombatUnits
                    factionNCUS={factionNCUS}
                    selectedCharacters={selectedCharacters}
                />
            </UnitsTable>
            <UnitsTable typeOfUnits="Attachments">
                <DisplayAttachments
                    factionAttachments={factionAttachments}
                    selectedCharacters={selectedCharacters}
                    selectedCombatUnits={selectedCombatUnits}
                />
            </UnitsTable>
        </>
    );
}

export default DisplayUnits;
