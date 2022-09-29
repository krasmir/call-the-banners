import styled from "styled-components/macro";

export const Button = styled.button`
    margin: 1em;
    padding: 0.25em 1em;
    text-transform: uppercase;
    color: ${(props) => props.theme.buttonMain};
    background-color: ${(props) => props.theme.buttonSecondary};
    border: 2px solid ${(props) => props.theme.buttonMain};
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.buttonMain};
        color: ${(props) => props.theme.buttonSecondary};
    }
`;
