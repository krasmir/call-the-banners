import { useMemo } from "react";
import useCurrentFaction from "./hooks/useCurrentFaction";
import { Faction } from "./types";
import getTacticsCards from "./utils/getTacticsCards";
import useSelectedUnits from "./hooks/useSelectedUnits";
import SmallTacticsCard from "./SmallTacticsCard";

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
                <SmallTacticsCard key={card.id} card={card} />
            ))}
        </>
    );
}

export default DisplayDeck;
