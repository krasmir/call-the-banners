import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *:before, *:after {
    box-sizing: border-box;
}
body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.bg};
    font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}`;
