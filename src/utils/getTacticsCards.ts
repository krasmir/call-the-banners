import tactics from "../data/tactics.json";
import { Attachment, Faction, TacticCard } from "../types";

function getTacticsCards(
    faction: Faction,
    commander: Attachment | undefined
): TacticCard[] {
    let factionTacticsCards = tactics[faction].filter(
        ({ deck }) =>
            deck.includes("Basic Deck") ||
            (commander !== undefined && deck === commander.name)
    ) as TacticCard[];

    const cardToRemove = factionTacticsCards.find(
        ({ remove }) => remove
    )?.remove;

    if (cardToRemove !== undefined) {
        factionTacticsCards = factionTacticsCards.filter(
            ({ id }) => id !== cardToRemove
        );
    }

    return factionTacticsCards;
}

export default getTacticsCards;
