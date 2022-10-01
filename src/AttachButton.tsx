import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAttachment } from "./store/userArmy/userArmySlice";
import styled from "styled-components/macro";
import { Button } from "./Button";
import Modal from "./Modal";
import { ArmyAttachment, Attachment, Faction } from "./types";
import { v4 as uuid } from "uuid";
import useCurrentFaction from "./hooks/useCurrentFaction";
import useSelectedUnits from "./hooks/useSelectedUnits";

const LI = styled.li`
    list-style: none;
`;

interface AttachButtonProps {
    attachment: Attachment;
}

function AttachButton({ attachment }: AttachButtonProps): JSX.Element {
    const [showCombatUnits, setShowCombatUnits] = useState(false);

    const dispatch = useDispatch();
    const currentFaction = useCurrentFaction();

    const { selectedCombatUnits } = useSelectedUnits(currentFaction as Faction);

    const handleAttachToUnit = (attachment: ArmyAttachment): void => {
        dispatch(addAttachment(attachment));
    };

    const combatUnits = selectedCombatUnits?.get(attachment.type);

    return (
        <>
            {showCombatUnits && (
                <Modal showModal={setShowCombatUnits}>
                    <ul>
                        {combatUnits?.map((unit) => (
                            <LI key={unit.uuid}>
                                <span>{unit.name}</span>
                                <Button
                                    onClick={() =>
                                        handleAttachToUnit({
                                            ...(attachment as ArmyAttachment),
                                            uuid: uuid(),
                                            attachedTo: unit.uuid,
                                            currentFaction,
                                        })
                                    }
                                >
                                    Attach to unit
                                </Button>
                            </LI>
                        ))}
                    </ul>
                </Modal>
            )}
            {combatUnits !== undefined && (
                <Button onClick={() => setShowCombatUnits(true)}>
                    Choose Unit
                </Button>
            )}
        </>
    );
}

export default AttachButton;
