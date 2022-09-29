import { Attachment, ArmyCombatUnit, ArmyAttachment } from "./types";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";
import AttachButton from "./AttachButton";

interface DisplayAttachmentsProps {
    factionAttachments: Attachment[];
    selectedCharacters: Set<string>;
    selectedCombatUnits: Map<string, ArmyCombatUnit[]> | undefined;
    selectedCommander?: ArmyAttachment | undefined;
}

function DisplayAttachments({
    factionAttachments,
    selectedCharacters,
    selectedCombatUnits,
    selectedCommander,
}: DisplayAttachmentsProps): JSX.Element {
    const shouldDisplayAttachButton = (attachment: Attachment): JSX.Element => {
        if (
            selectedCommander === undefined &&
            selectedCombatUnits?.get(attachment.type) !== undefined &&
            !selectedCharacters.has(attachment.character)
        )
            return (
                <AttachButton
                    attachment={attachment}
                    combatUnits={
                        selectedCombatUnits.get(
                            attachment.type
                        ) as ArmyCombatUnit[]
                    }
                />
            );
        else return <></>;
    };

    return (
        <>
            {factionAttachments.map((attachment) => (
                <DisplayUnitsTableRow
                    key={attachment.id}
                    selectedCharacters={selectedCharacters}
                    character={attachment.character}
                    selectedCommander={selectedCommander}
                    unit={attachment}
                >
                    {shouldDisplayAttachButton(attachment)}
                </DisplayUnitsTableRow>
            ))}
        </>
    );
}

export default DisplayAttachments;
