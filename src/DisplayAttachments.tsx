import { Attachment } from "./types";
import DisplayUnitsTableRow from "./DisplayUnitsTableRow";
import AttachButton from "./AttachButton";

interface DisplayAttachmentsProps {
    factionAttachments: Attachment[];
}

function DisplayAttachments({
    factionAttachments,
}: DisplayAttachmentsProps): JSX.Element {
    return (
        <>
            {factionAttachments.map((attachment) => (
                <DisplayUnitsTableRow
                    key={attachment.id}
                    character={attachment.character}
                    unit={attachment}
                >
                    <AttachButton attachment={attachment} />
                </DisplayUnitsTableRow>
            ))}
        </>
    );
}

export default DisplayAttachments;
