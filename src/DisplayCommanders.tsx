import attachments from "./data/attachments.json";
// import { useArmy, useCharacters } from "./contexts/ArmyContext";
import styled from "styled-components/macro";
// import AttachButton from "./AttachButton";
// import { unitTypes } from "./utils/unitTypes";
import { Faction, Attachments, Attachment } from "./types";
import { Button } from "./Button";
import { addAttachment } from "./store/userArmy/userArmySlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

const TR = styled.tr`
    border-bottom: 1px solid #f7af14;
`;

const IMG = styled.img`
    height: 40px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.9));
`;

interface DisplayCommandersProps {
    faction: Faction;
}

function DisplayCommanders({ faction }: DisplayCommandersProps): JSX.Element {
    // const army = useArmy();
    // const characters = useCharacters();
    // const combatUnits = army.filter(
    //     (unit) => unit.unitType === unitTypes.combatUnit
    // );

    let factionAttachments = (attachments as Attachments)[faction].filter(
        ({ cost }) => cost === "C"
    );

    // Free Folk can't have neutral units in their army
    if (faction !== "Free Folk" && faction !== "Neutral") {
        const neutralAttachments = (attachments as Attachments).Neutral.filter(
            ({ cost }) => cost === "C"
        );
        factionAttachments = factionAttachments.concat(neutralAttachments);
    }

    factionAttachments.sort((a, b) => +a.cost - +b.cost);

    console.log("Commander");

    const dispatch = useDispatch();

    const handleAddAttachment = (attachment: Attachment): void => {
        dispatch(addAttachment(attachment));
    };

    return (
        <>
            {factionAttachments.map((attachment) => (
                <TR
                    key={attachment.id}
                    // style={{
                    //     opacity: characters.includes(attachment.character)
                    //         ? "0.2"
                    //         : "1",
                    // }}
                >
                    <td>{attachment.name}</td>
                    <td>
                        <IMG
                            alt={attachment.type}
                            src={`/assets/UnitType${attachment.type.replace(
                                " ",
                                ""
                            )}.png`}
                        />
                    </td>
                    <td>{attachment.cost}</td>
                    <td>
                        {/* {combatUnits.length > 0 &&
                            !characters.includes(attachment.character) && (
                                <AttachButton
                                    faction={faction}
                                    attachment={attachment}
                                    unitType={unitTypes.attachment}
                                    type={attachment.type}
                                    name={attachment.name}
                                />
                            )} */}
                        <Button
                            onClick={() =>
                                handleAddAttachment({
                                    ...attachment,
                                    uuid: uuid(),
                                })
                            }
                        >
                            Add
                        </Button>
                    </td>
                </TR>
            ))}
        </>
    );
}

export default DisplayCommanders;
