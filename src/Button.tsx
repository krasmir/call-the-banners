import styled from "styled-components/macro";

export const Button = styled.button`
    margin: 1em;
    padding: 0.25em 1em;
    text-transform: uppercase;
    color: ${(props) => props.theme.button.main};
    background-color: ${(props) => props.theme.button.secondary};
    border: 2px solid ${(props) => props.theme.button.main};
    border-radius: 6px;
    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.button.main};
        color: ${(props) => props.theme.button.secondary};
    }
`;
