import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function Army(): JSX.Element {
    const { id, units, ncus, commander } = useSelector(
        (state: RootState) => state.userArmy
    );
    return (
        <div>
            <div>{id}</div>
            <div>
                {units.map((val) => (
                    <div key={val}>{val}</div>
                ))}
            </div>
            <div>
                {ncus.map((val) => (
                    <div key={val}>{val}</div>
                ))}
            </div>
            <div>{commander}</div>
        </div>
    );
}
