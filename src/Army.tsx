import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { Button } from "./Button";
import { RootState } from "./store";
import {
    Army as ArmyI,
    deleteAttachment,
    deleteNCU,
    deleteUnit,
} from "./store/userArmy/userArmySlice";
import {
    // CombatUnit,
    // Attachment,
    ArmyCombatUnit,
    ArmyAttachment,
} from "./types";

const Units = styled.div`
    width: 60%;
    color: beige;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    font-weight: bold;
`;

const Div = styled.div`
    /* background-color: maroon; */
    z-index: 5;
`;

const H3 = styled.h3`
    width: 100%;
    text-align: center;
`;

const RemoveButton = styled(Button)`
    margin: 0;
    padding: 2px;
    position: absolute;
    right: 4px;
`;

const Li = styled.li`
    position: relative;
    padding: 10px 0;
`;

const PointsSpan = styled.span`
    position: absolute;
    right: 80px;
`;

interface ArmyProps {
    faction: keyof RootState["userArmy"];
}

export default function Army({ faction }: ArmyProps): JSX.Element {
    const { units, ncus, attachments } = useSelector(
        (state: RootState) => state.userArmy[faction] as ArmyI
    );
    const dispatch = useDispatch();

    const handleDeleteUnit = (id: string): void => {
        dispatch(deleteUnit(id));
    };
    const handleDeleteAttachment = (id: string): void => {
        dispatch(deleteAttachment(id));
    };
    const handleDeleteNCU = (id: string): void => {
        dispatch(deleteNCU(id));
    };

    return (
        <Units>
            <Div>
                <H3>Combat Units</H3>
                <ul>
                    {(units as ArmyCombatUnit[]).map((unit) => (
                        <Li key={unit.uuid}>
                            <span>{unit.name}</span>

                            <PointsSpan>{unit.cost}</PointsSpan>
                            <RemoveButton
                                onClick={() => handleDeleteUnit(unit.uuid)}
                            >
                                Remove
                            </RemoveButton>

                            <ul>
                                {(attachments as ArmyAttachment[])
                                    .filter(
                                        ({ attachedTo }) =>
                                            attachedTo === unit.uuid
                                    )
                                    .map((attachment) => (
                                        <Li key={attachment.uuid}>
                                            <span>{attachment.name}</span>

                                            <PointsSpan>
                                                {attachment.cost}
                                            </PointsSpan>
                                            <RemoveButton
                                                onClick={() =>
                                                    handleDeleteAttachment(
                                                        attachment.uuid
                                                    )
                                                }
                                            >
                                                Remove
                                            </RemoveButton>
                                        </Li>
                                    ))}
                            </ul>
                        </Li>
                    ))}
                </ul>
            </Div>
            <Div>
                <H3>Non-combat Units</H3>
                <ul>
                    {ncus?.map((ncu) => (
                        <Li key={ncu.id}>
                            <span>{ncu.name}</span>

                            <PointsSpan>{ncu.cost}</PointsSpan>
                            <RemoveButton
                                onClick={() => handleDeleteNCU(ncu.id)}
                            >
                                Remove
                            </RemoveButton>
                        </Li>
                    ))}
                </ul>
            </Div>
        </Units>
    );
}
