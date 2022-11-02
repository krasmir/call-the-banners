import { useState } from "react";
import AttachmentCard from "./AttachmentCard";
import { Button } from "./Button";
import CombatUnitCard from "./CombatUnitCard";
import Modal from "./Modal";
import NCUCard from "./NCUCard";
import { Unit, UnitType } from "./store/userArmy/userArmySlice";

interface ShowUnitButtonProps {
    unit: Unit;
    type: UnitType;
}

function ShowUnitButton({ unit, type }: ShowUnitButtonProps): JSX.Element {
    const [showUnit, setShowUnit] = useState(false);

    let card: JSX.Element = <></>;
    if (type === "attachments") {
        card = <AttachmentCard attachment={unit} />;
    } else if (type === "combatUnits") {
        card = <CombatUnitCard combatUnit={unit} />;
    } else if (type === "ncus") {
        card = <NCUCard ncu={unit} />;
    }

    return (
        <>
            {showUnit && <Modal showModal={setShowUnit}>{card}</Modal>}

            <Button onClick={() => setShowUnit(true)}>Show Details</Button>
        </>
    );
}

export default ShowUnitButton;
