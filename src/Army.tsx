import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import {
    Army as ArmyI,
    deleteAttachment,
    deleteNCU,
    deleteUnit,
} from "./store/userArmy/userArmySlice";
// import { useDispatch } from "react-redux";

interface ArmyProps {
    faction: keyof RootState["userArmy"];
}

export default function Army({ faction }: ArmyProps): JSX.Element {
    const { id, units, ncus, attachments } = useSelector(
        (state: RootState) => state.userArmy[faction] as ArmyI
    );
    const dispatch = useDispatch();
    return (
        <div>
            <div>{id}</div>
            <div>
                {units?.map((val) => (
                    <div key={val.uuid}>
                        {val.name} {val.uuid}
                        <button
                            onClick={() => {
                                if (val.uuid !== undefined)
                                    dispatch(deleteUnit(val.uuid));
                            }}
                        >
                            delete unit
                        </button>
                    </div>
                ))}
            </div>
            <div>
                {ncus?.map((val) => (
                    <div key={val.id}>
                        {val.name}{" "}
                        <button
                            onClick={() => {
                                if (val.id !== undefined)
                                    dispatch(deleteNCU(val.id));
                            }}
                        >
                            delete unit
                        </button>
                    </div>
                ))}
            </div>
            <div>
                {attachments?.map((val) => (
                    <div key={val.uuid}>
                        {val.name}{" "}
                        <button
                            onClick={() => {
                                if (val.uuid !== undefined)
                                    dispatch(deleteAttachment(val.uuid));
                            }}
                        >
                            delete unit
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
