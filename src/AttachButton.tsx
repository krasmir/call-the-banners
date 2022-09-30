import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { Button } from "./Button";
import Modal from "./Modal";
import { addAttachment } from "./store/userArmy/userArmySlice";
import { ArmyAttachment, ArmyCombatUnit, Attachment } from "./types";
import { v4 as uuid } from "uuid";
import useCurrentFaction from "./hooks/useCurrentFaction";

const LI = styled.li`
    list-style: none;
`;

interface AttachButtonProps {
    combatUnits: ArmyCombatUnit[];
    attachment: Attachment;
}

function AttachButton({
    combatUnits,
    attachment,
}: AttachButtonProps): JSX.Element {
    const [showCombatUnits, setShowCombatUnits] = useState(false);

    const dispatch = useDispatch();
    const currentFaction = useCurrentFaction();

    const handleAttachToUnit = (attachment: ArmyAttachment): void => {
        dispatch(addAttachment(attachment));
    };

    return (
        <>
            {showCombatUnits && (
                <Modal showModal={setShowCombatUnits}>
                    <ul>
                        {combatUnits.map((unit) => (
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
            <Button onClick={() => setShowCombatUnits(true)}>
                Choose Unit
            </Button>
        </>
    );
}

export default AttachButton;
