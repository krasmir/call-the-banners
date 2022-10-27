import styled from "styled-components/macro";
import AttachmentCard from "./AttachmentCard";
import attachments from "./data/attachments.json";
import useCurrentFaction from "./hooks/useCurrentFaction";
import SelectFactionForm from "./SelectFactionForm";
import { Attachment, Faction } from "./types";

const AttachmentDiv = styled.div`
    margin: 20px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

function DisplayAttachmentCards(): JSX.Element {
    const currentFaction = useCurrentFaction();
    const allFactionAttachmentCards = attachments[
        currentFaction as Faction
    ] as Attachment[];
    return (
        <AttachmentDiv>
            <SelectFactionForm></SelectFactionForm>
            {allFactionAttachmentCards.map((attachment) => (
                <AttachmentCard key={attachment.id} attachment={attachment} />
            ))}
        </AttachmentDiv>
    );
}
export default DisplayAttachmentCards;
