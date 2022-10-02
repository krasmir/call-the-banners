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

interface Units {
    factionCombatUnits: CombatUnit[];
    factionAttachments: Attachment[];
    factionCommanders: Attachment[];
    factionNCUS: NCU[];
}

function getUnits(faction: Faction): Units {
    let factionCombatUnits = (units as CombatUnits)[faction];
    let factionAttachments = (attachments as Attachments)[faction].filter(
        ({ cost }) => cost !== "C"
    );
    let factionCommanders = (attachments as Attachments)[faction].filter(
        ({ cost }) => cost === "C"
    );
    let factionNCUS = (ncus as NCUS)[faction];

    // Free Folk can't have neutral units in their army
    if (faction !== "Free Folk" && faction !== "Neutral") {
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
    factionAttachments.sort((a, b) => +a.cost - +b.cost);
    factionNCUS.sort((a, b) => +a.cost - +b.cost);

    return {
        factionAttachments,
        factionCommanders,
        factionNCUS,
        factionCombatUnits,
    };
}

export default getUnits;
