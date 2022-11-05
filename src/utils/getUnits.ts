import units from "../data/units.json";
import ncus from "../data/ncus.json";
import attachments from "../data/attachments.json";
import {
    Faction,
    CombatUnits,
    Attachments,
    NCUS,
    CombatUnit,
    Attachment,
    NCU,
} from "../types";
import { FilteringOptionsState } from "../store/filteringOptions/filteringOptions";
import { getLoyalty } from "./getLoyalty";
import { Unit } from "../store/userArmy/userArmySlice";

interface Units {
    factionCombatUnits: CombatUnit[];
    factionAttachments: Attachment[];
    factionCommanders: Attachment[];
    factionNCUS: NCU[];
}

function getUnits(
    faction: Faction,
    filteringOptions: FilteringOptionsState
): Units {
    const { includeNeutrals, loyaltyRenly, loyaltyStannis } = filteringOptions;

    let factionCombatUnits = (units as CombatUnits)[faction];
    let factionAttachments = (attachments as Attachments)[faction].filter(
        ({ cost }) => cost !== "C"
    );
    let factionCommanders = (attachments as Attachments)[faction].filter(
        ({ cost }) => cost === "C"
    );
    let factionNCUS = (ncus as NCUS)[faction];

    // Free Folk can't have neutral units in their army
    if (faction !== "Free Folk" && faction !== "Neutral" && includeNeutrals) {
        const neutralUnits = (units as CombatUnits).Neutral;
        factionCombatUnits = factionCombatUnits.concat(neutralUnits);

        const neutralAttachments = (attachments as Attachments).Neutral.filter(
            ({ cost }) => cost !== "C"
        );
        factionAttachments = factionAttachments.concat(neutralAttachments);

        const neutralCommanders = (attachments as Attachments).Neutral.filter(
            ({ cost }) => cost === "C"
        );
        factionCommanders = factionCommanders.concat(neutralCommanders);

        const neutralNCUs = (ncus as NCUS).Neutral;
        factionNCUS = factionNCUS.concat(neutralNCUs);
    }

    factionCombatUnits.sort((a, b) => +a.cost - +b.cost);
    factionAttachments.sort((a, b) => +a.cost - +b.cost);
    factionNCUS.sort((a, b) => +a.cost - +b.cost);

    if (faction === Faction.Baratheon && (!loyaltyRenly || !loyaltyStannis)) {
        const loyalties = [""];
        if (loyaltyRenly) loyalties.push("Renly Baratheon");
        if (loyaltyStannis) loyalties.push("Stannis Baratheon");

        factionCombatUnits = factionCombatUnits.filter((unit) =>
            loyalties.includes(getLoyalty(unit as Unit, "combatUnits"))
        );
        factionAttachments = factionAttachments.filter((unit) =>
            loyalties.includes(getLoyalty(unit as Unit, "attachments"))
        );
        factionCommanders = factionCommanders.filter((unit) =>
            loyalties.includes(getLoyalty(unit as Unit, "attachments"))
        );
        factionNCUS = factionNCUS.filter((unit) =>
            loyalties.includes(getLoyalty(unit as Unit, "ncus"))
        );
    }

    return {
        factionAttachments,
        factionCommanders,
        factionNCUS,
        factionCombatUnits,
    };
}

export default getUnits;
