export type CombatUnits = Record<Faction, CombatUnit[]>;

export type NCUS = Record<Faction, NCU[]>;

export type Attachments = Record<Faction, Attachment[]>;

export type TacticCards = Record<Faction, TacticCard[]>;

export type Skills = Record<string, Skill>;

export enum Faction {
    Baratheon = "Baratheon",
    FreeFolk = "Free Folk",
    Greyjoy = "Greyjoy",
    Lannister = "Lannister",
    Neutral = "Neutral",
    NightsWatch = "Night's Watch",
    Stark = "Stark",
    Targaryen = "Targaryen",
}

export enum UnitType {
    Cavalry = "Cavalry",
    Infantry = "Infantry",
    Monster = "Monster",
    SiegeEngine = "Siege Engine",
    NCU = "NCU",
    None = "None",
}

export interface CombatUnit {
    faction: Faction;
    name: string;
    character: string;
    id: string;
    cost: string;
    type: UnitType;
    speed: string;
    attack1: string[];
    attack2: string[];
    defence: string;
    morale: string;
    abilities: string;
    requirements: string;
    requirementText: string;
    quote: string;
    lore: string;
    boxes: string;
}

export interface NCU {
    faction: Faction;
    name: string;
    character: string;
    cost: string;
    names: string;
    descriptions: string;
    id: string;
    quote: string;
    restrictions: string;
}

export interface Attachment {
    faction: Faction;
    name: string;
    character: string;
    cost: string;
    type: UnitType;
    abilities: string;
    id: string;
    quote: string;
}

export interface TacticCard {
    faction: Faction;
    name: string;
    deck: string;
    text: string;
    remove: string;
    id: string;
}

export interface Skill {
    name: string;
    description: string;
    icons: string;
}
