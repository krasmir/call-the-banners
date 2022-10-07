import tactics from "../data/tactics.json";
import { Attachment, Faction, TacticCard } from "../types";

function getTacticsCards(
    faction: Faction,
    commander: Attachment | undefined
): TacticCard[] {
    let factionTacticsCards = tactics[faction].filter(({ deck }) =>
        deck.includes("Basic Deck")
    ) as TacticCard[];
    if (commander !== undefined) {
        const commanderTacticsCards = tactics[commander.faction].filter(
            ({ deck }) => deck === commander.name
        ) as TacticCard[];
        factionTacticsCards = factionTacticsCards.concat(commanderTacticsCards);
    }

    const cardToRemove = factionTacticsCards.find(
        ({ remove }) => remove
    )?.remove;

    if (cardToRemove !== undefined) {
        factionTacticsCards = factionTacticsCards.filter(
            ({ id }) => !cardToRemove.includes(id)
        );
    }

    return factionTacticsCards;
}

export default getTacticsCards;
