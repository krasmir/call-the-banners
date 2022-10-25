import Ability from "./Ability";
import getSkill from "./utils/getSkill";

function DisplayAbilities({ abilities }: { abilities: string }): JSX.Element {
    let abilitiesArr = abilities.split(/\s*\/\s*/);
    abilitiesArr = abilitiesArr.filter(
        (ability) =>
            !ability.includes("Rules") &&
            !ability.includes("Must be attached") &&
            !ability.includes("Loyalty:") &&
            !ability.includes("Cost Reduced") &&
            !ability.includes("Fielded by") &&
            !ability.includes("Commander")
    );

    return (
        <>
            {abilitiesArr.map((abilityName) => {
                const skill = getSkill(abilityName);
                if (skill !== undefined) {
                    const { description, icons, name } = skill;
                    return (
                        <Ability
                            key={name}
                            name={name}
                            description={description}
                            icons={icons}
                        ></Ability>
                    );
                } else return null;
            })}
        </>
    );
}
export default DisplayAbilities;
