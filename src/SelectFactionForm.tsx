import { useState } from "react";
import { Faction } from "./types";
import styled from "styled-components/macro";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { setCurrentFaction } from "./store/currentFaction/currentFaction";

const Form = styled.form`
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Select = styled.select`
    padding: 6px;
    /* background-color: #e7d6b6; */
    border: none;
    cursor: pointer;
`;

const Option = styled.option`
    border: none;
    /* background-color: #e7d6b6; */
`;

const Label = styled.label`
    font-weight: bold;
    /* background-color: #e7d6b6; */
    border-radius: 3px;
    padding: 6px;
    margin: 12px;
`;

function SelectFactionForm(): JSX.Element {
    const [chosenFaction, setChosenFaction] = useState("Lannister");
    const dispatch = useDispatch();

    const factions = [
        "Lannister",
        "Stark",
        "Free Folk",
        "Neutral",
        "Night's Watch",
        "Baratheon",
        "Targaryen",
        "Greyjoy",
    ];
    return (
        <Form
            action=""
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(setCurrentFaction(chosenFaction as Faction));
            }}
        >
            <Label htmlFor="points">Choose number of points:</Label>
            <Select id="points" name="points" defaultValue="40">
                <Option value="30">30</Option>
                <Option value="40">40</Option>
                <Option value="50">50</Option>
            </Select>
            <Label htmlFor="factions">Choose your faction:</Label>
            <Select
                id="factions"
                name="factions"
                onChange={(e) => {
                    setChosenFaction(e.target.value);
                }}
                value={chosenFaction}
            >
                {factions.map((fac, ind) => (
                    <Option value={fac} key={ind}>
                        {fac}
                    </Option>
                ))}
            </Select>
            <Button type="submit">Show Faction</Button>
        </Form>
    );
}
export default SelectFactionForm;
