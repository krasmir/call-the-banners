import styled from "styled-components/macro";

export const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;

    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.colors.main};
    border: 2px solid ${(props) => props.theme.colors.secondary};
    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.main};
        color: ${(props) => props.theme.colors.secondary};
    }
`;
