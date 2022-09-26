import { Attachment } from "./types";
import { Button } from "./Button";
import { addAttachment } from "./store/userArmy/userArmySlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";
import UnitTypeIcon from "./UnitTypeIcon";

interface DisplayCommandersProps {
    factionCommanders: Attachment[];
    selectedCharacters: string[];
}

function DisplayCommanders({
    factionCommanders,
    selectedCharacters,
}: DisplayCommandersProps): JSX.Element {
    console.log("Commander");

    const dispatch = useDispatch();

    const handleAddAttachment = (attachment: Attachment): void => {
        dispatch(addAttachment(attachment));
    };

    return (
        <>
            {factionCommanders.map((attachment) => (
                <DisplayUnitsTableRow
                    key={attachment.id}
                    selectedCharacters={selectedCharacters}
                    character={attachment.character}
                >
                    <td>{attachment.name}</td>
                    <td>
                        <UnitTypeIcon type={attachment.type} />
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
                </DisplayUnitsTableRow>
            ))}
        </>
    );
}

export default DisplayCommanders;
