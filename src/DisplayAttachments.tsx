import styled from "styled-components/macro";
import { Attachment } from "./types";
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

interface DisplayAttachmentsProps {
    factionAttachments: Attachment[];
    selectedCharacters: string[];
}

function DisplayAttachments({
    factionAttachments,
    selectedCharacters,
}: DisplayAttachmentsProps): JSX.Element {
    console.log("ATTACHMENTS");

    const dispatch = useDispatch();

    const handleAddAttachment = (attachment: Attachment): void => {
        dispatch(addAttachment(attachment));
    };

    return (
        <>
            {factionAttachments.map((attachment) => (
                <TR
                    key={attachment.id}
                    style={{
                        opacity: selectedCharacters.includes(
                            attachment.character
                        )
                            ? "0.2"
                            : "1",
                    }}
                >
                    <td>{attachment.name}</td>
                    <td>
                        <IMG
                            alt={attachment.type}
                            src={`./UnitType${attachment.type.replace(
                                " ",
                                ""
                            )}.png`}
                            title={attachment.type}
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

export default DisplayAttachments;
