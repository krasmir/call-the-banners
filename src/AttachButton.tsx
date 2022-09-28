import { useState } from "react";
import { useDispatch } from "react-redux";
// import styled from "styled-components/macro";
import { Button } from "./Button";
import Modal from "./Modal";
import { addAttachment } from "./store/userArmy/userArmySlice";
import { ArmyAttachment, ArmyCombatUnit, Attachment } from "./types";
import { v4 as uuid } from "uuid";

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

    const handleAttachToUnit = (
        attachment: ArmyAttachment,
        unitUUID: string
    ): void => {
        attachment.attachedTo = unitUUID;
        dispatch(addAttachment(attachment));
    };

    return (
        <>
            {showCombatUnits && (
                <Modal showModal={setShowCombatUnits}>
                    <ul>
                        {combatUnits.map((unit) => (
                            <li key={unit.uuid}>
                                <span>{unit.name}</span>
                                <Button
                                    onClick={() =>
                                        handleAttachToUnit(
                                            {
                                                ...(attachment as ArmyAttachment),
                                                uuid: uuid(),
                                            },
                                            unit.uuid
                                        )
                                    }
                                >
                                    Attach to unit
                                </Button>
                            </li>
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
