import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *:before, *:after {
    box-sizing: border-box;
}
body{
    margin: 0;
    padding: 0;
    font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}`;
