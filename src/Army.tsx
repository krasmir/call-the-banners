import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { Button } from "./Button";
import useCurrentFaction from "./hooks/useCurrentFaction";
import useSelectedUnits from "./hooks/useSelectedUnits";
import { RootState } from "./store";
import { deleteUnit, UnitType } from "./store/userArmy/userArmySlice";
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

export default function Army(): JSX.Element {
    const currentFaction = useCurrentFaction();
    const { selectedLoyalty } = useSelectedUnits(currentFaction as Faction);
    const { combatUnits, ncus, attachments } = useSelector(
        (state: RootState) => state.userArmy[currentFaction]
    );
    const dispatch = useDispatch();

    const handleDeleteUnit = (deletePayload: {
        id: string;
        unitType: UnitType;
    }): void => {
        dispatch(deleteUnit({ ...deletePayload, currentFaction }));
    };

    return (
        <Units>
            <H2>{currentFaction} Army</H2>
            {currentFaction === Faction.Baratheon && selectedLoyalty !== "" && (
                <H3>Loyalty - {selectedLoyalty}</H3>
            )}
            <Div>
                <H3>Combat Units</H3>
                <ul>
                    {combatUnits.map((unit) => (
                        <LI key={unit.uuid}>
                            <span>{unit.name}</span>

                            <PointsSpan>{unit.cost}</PointsSpan>
                            <RemoveButton
                                onClick={() =>
                                    handleDeleteUnit({
                                        id: unit.uuid,
                                        unitType: "combatUnits",
                                    })
                                }
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
                                                    handleDeleteUnit({
                                                        id: attachment.uuid,
                                                        unitType: "attachments",
                                                    })
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
                        <LI key={ncu.uuid}>
                            <span>{ncu.name}</span>

                            <PointsSpan>{ncu.cost}</PointsSpan>
                            <RemoveButton
                                onClick={() =>
                                    handleDeleteUnit({
                                        id: ncu.uuid,
                                        unitType: "ncus",
                                    })
                                }
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
