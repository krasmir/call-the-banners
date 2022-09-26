import DisplayAttachments from "./DisplayAttachments";
import DisplayCombatUnits from "./DisplayCombatUnits";
import DisplayCommanders from "./DisplayCommanders";
import DisplayNonCombatUnits from "./DisplayNonCombatUnits";
import useSelectedCharacters from "./hooks/useSelectedCharacters";
import useUnits from "./hooks/useUnits";
import { Faction } from "./types";
import UnitsTable from "./UnitsTable";

interface DisplayUnitsProps {
    children?: React.ReactNode;
    faction: Faction;
}

function DisplayUnits({ children, faction }: DisplayUnitsProps): JSX.Element {
    const selectedCharacters = useSelectedCharacters(faction);
    const { factionAttachments, factionCommanders, factionNCUS, factionUnits } =
        useUnits(faction);

    return (
        <>
            <UnitsTable typeOfUnits="Units">
                <DisplayCombatUnits
                    factionUnits={factionUnits}
                    selectedCharacters={selectedCharacters}
                />
            </UnitsTable>
            <UnitsTable typeOfUnits="Commanders">
                <DisplayCommanders
                    factionCommanders={factionCommanders}
                    selectedCharacters={selectedCharacters}
                />
            </UnitsTable>
            <UnitsTable typeOfUnits="Non Combat Units">
                <DisplayNonCombatUnits
                    factionNCUS={factionNCUS}
                    selectedCharacters={selectedCharacters}
                />
            </UnitsTable>
            <UnitsTable typeOfUnits="Attachments">
                <DisplayAttachments
                    factionAttachments={factionAttachments}
                    selectedCharacters={selectedCharacters}
                />
            </UnitsTable>
        </>
    );
}

export default DisplayUnits;
