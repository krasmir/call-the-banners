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
                    {selectedCombatUnits?.get(attachment.type) !==
                        undefined && (
                        <AttachButton
                            attachment={attachment}
                            combatUnits={
                                selectedCombatUnits.get(
                                    attachment.type
                                ) as ArmyCombatUnit[]
                            }
                        />
                    )}
                </DisplayUnitsTableRow>
            ))}
        </>
    );
}

export default DisplayAttachments;
