import skills from "../data/skills.json";
import { Skill, Skills } from "../types";

function getSkill(skillName: string): Skill | undefined {
    const skill = (skills as Skills)[skillName];
    if (skill === undefined) {
        console.log(skillName);
    } else {
        const { description, icons, name } = skill;
        return { description, icons, name };
    }
}

export default getSkill;
