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
import { SortingOptionsState } from "../store/sortingOptions/sortingOptions";

interface Units {
    factionCombatUnits: CombatUnit[];
    factionAttachments: Attachment[];
    factionCommanders: Attachment[];
    factionNCUS: NCU[];
}

function getUnits(
    faction: Faction,
    filteringOptions: FilteringOptionsState,
    sortingOptions: SortingOptionsState
): Units {
    const { includeNeutrals, loyaltyRenly, loyaltyStannis } = filteringOptions;
    const { order, orderBy } = sortingOptions;

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

    if (orderBy === "cost") {
        console.log("sorting by cost");
        interface Cost {
            cost: string;
        }
        const sortByCost = (first: Cost, sec: Cost): number => {
            return order === "asc"
                ? +first.cost - +sec.cost
                : +sec.cost - +first.cost;
        };
        factionCombatUnits.sort(sortByCost);
        factionAttachments.sort(sortByCost);
        factionNCUS.sort(sortByCost);
    } else if (orderBy === "name") {
        console.log("sorting by name");
        console.log(order);
        interface Name {
            name: string;
        }
        const sortByName = (first: Name, sec: Name): number => {
            if (order === "asc") {
                return first.name > sec.name ? 1 : -1;
            } else if (order === "desc") {
                return first.name > sec.name ? -1 : 1;
            } else return 0;
        };
        factionCombatUnits.sort(sortByName);
        factionAttachments.sort(sortByName);
        factionCommanders.sort(sortByName);
        factionNCUS.sort(sortByName);
    }

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
