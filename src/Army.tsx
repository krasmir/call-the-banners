import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { Button } from "./Button";
import { RootState } from "./store";
import {
    deleteAttachment,
    deleteNCU,
    deleteUnit,
} from "./store/userArmy/userArmySlice";
import { Faction } from "./types";

const Units = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const Div = styled.div`
    z-index: 5;
`;

const H2 = styled.h2`
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;
    text-decoration-line: underline;
`;

const H3 = styled.h3`
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    letter-spacing: 2px;
`;

const RemoveButton = styled(Button)`
    margin: 0;
    padding: 2px;
    position: absolute;
    right: 4px;
`;

const LI = styled.li`
    position: relative;
    padding: 10px 0;
    list-style: none;
`;

const PointsSpan = styled.span`
    position: absolute;
    right: 80px;
`;

interface ArmyProps {
    faction: Faction;
}

export default function Army({ faction }: ArmyProps): JSX.Element {
    const { units, ncus, attachments } = useSelector(
        (state: RootState) => state.userArmy[faction]
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
            <H2>{faction} Army</H2>
            <Div>
                <H3>Combat Units</H3>
                <ul>
                    {units.map((unit) => (
                        <LI key={unit.uuid}>
                            <span>{unit.name}</span>

                            <PointsSpan>{unit.cost}</PointsSpan>
                            <RemoveButton
                                onClick={() => handleDeleteUnit(unit.uuid)}
                            >
                                Remove
                            </RemoveButton>

                            <ul>
                                {attachments
                                    .filter(
                                        ({ attachedTo }) =>
                                            attachedTo === unit.uuid
                                    )
                                    .map((attachment) => (
                                        <LI key={attachment.uuid}>
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
                                        </LI>
                                    ))}
                            </ul>
                        </LI>
                    ))}
                </ul>
            </Div>
            <Div>
                <H3>Non-Combat Units</H3>
                <ul>
                    {ncus?.map((ncu) => (
                        <LI key={ncu.id}>
                            <span>{ncu.name}</span>

                            <PointsSpan>{ncu.cost}</PointsSpan>
                            <RemoveButton
                                onClick={() => handleDeleteNCU(ncu.id)}
                            >
                                Remove
                            </RemoveButton>
                        </LI>
                    ))}
                </ul>
            </Div>
        </Units>
    );
}
