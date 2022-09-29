import DisplayAttachments from "./DisplayAttachments";
import DisplayCombatUnits from "./DisplayCombatUnits";
import DisplayNonCombatUnits from "./DisplayNonCombatUnits";
import useSelectedUnits from "./hooks/useSelectedUnits";
import getUnits from "./utils/getUnits";
import { Faction } from "./types";
import UnitsTable from "./UnitsTable";
import { useMemo } from "react";

interface DisplayUnitsProps {
    faction: Faction;
}

function DisplayUnits({ faction }: DisplayUnitsProps): JSX.Element {
    const { selectedCharacters, selectedCombatUnits, selectedCommander } =
        useSelectedUnits(faction);
    const { factionAttachments, factionCommanders, factionNCUS, factionUnits } =
        useMemo(() => getUnits(faction), [faction]);

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
