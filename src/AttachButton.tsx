import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUnit, Unit } from "./store/userArmy/userArmySlice";
import styled from "styled-components/macro";
import { Button } from "./Button";
import Modal from "./Modal";
import { Faction } from "./types";
import { v4 as uuid } from "uuid";
import useCurrentFaction from "./hooks/useCurrentFaction";
import useSelectedUnits from "./hooks/useSelectedUnits";
// import { getLoyalty } from "./utils/getLoyalty";

const LI = styled.li`
    list-style: none;
`;

interface AttachButtonProps {
    attachment: Unit;
}

function AttachButton({ attachment }: AttachButtonProps): JSX.Element {
    const [showCombatUnits, setShowCombatUnits] = useState(false);

    const dispatch = useDispatch();
    const currentFaction = useCurrentFaction();

    const { selectedCombatUnits } = useSelectedUnits(currentFaction as Faction);

    const handleAttachToUnit = (attachment: Unit): void => {
        // console.log(getLoyalty(attachment, "attachments"));
        dispatch(
            addUnit({
                unit: attachment,
                currentFaction,
                unitType: "attachments",
            })
        );
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
                                            ...attachment,
                                            uuid: uuid(),
                                            attachedTo: unit.uuid,
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
