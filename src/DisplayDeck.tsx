import { useMemo } from "react";
import useCurrentFaction from "./hooks/useCurrentFaction";
import { Faction } from "./types";
import getTacticsCards from "./utils/getTacticsCards";
import TacticsCard from "./TacticsCard";
import useSelectedUnits from "./hooks/useSelectedUnits";

function DisplayDeck(): JSX.Element {
    const currentFaction = useCurrentFaction();
    const { selectedCommander } = useSelectedUnits(currentFaction as Faction);
    const factionDeck = useMemo(
        () => getTacticsCards(currentFaction as Faction, selectedCommander),
        [currentFaction, selectedCommander]
    );

    return (
        <>
            {factionDeck.map((card) => (
                <TacticsCard key={card.id} card={card} />
            ))}
        </>
    );
}

export default DisplayDeck;
