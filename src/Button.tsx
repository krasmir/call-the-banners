import styled from "styled-components/macro";

export const Button = styled.button`
    width: 64px;
    height: 40px;
    margin: 6px;
    text-transform: uppercase;
    font-weight: bold;
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
