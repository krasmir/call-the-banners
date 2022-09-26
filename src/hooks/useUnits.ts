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
    factionUnits: CombatUnit[];
    factionAttachments: Attachment[];
    factionCommanders: Attachment[];
    factionNCUS: NCU[];
}

function useUnits(faction: Faction): Units {
    let factionUnits = (units as CombatUnits)[faction];
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
        factionUnits = factionUnits.concat(neutralUnits);

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

    factionUnits.sort((a, b) => +a.cost - +b.cost);
    factionAttachments.sort((a, b) => +a.cost - +b.cost);
    factionAttachments.sort((a, b) => +a.cost - +b.cost);
    factionNCUS.sort((a, b) => +a.cost - +b.cost);

    return { factionAttachments, factionCommanders, factionNCUS, factionUnits };
}

export default useUnits;
