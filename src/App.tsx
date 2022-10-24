import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { Button } from "./Button";
import { themes } from "./themes";
import Header from "./Header";

function App(): JSX.Element {
    const { lightTheme, darkTheme } = themes;
    const [theme, setTheme] = useState(darkTheme);

    const ThemeButton = (): JSX.Element => {
        return (
            <Button
                onClick={() => {
                    setTheme(theme === darkTheme ? lightTheme : darkTheme);
                }}
            >
                Theme
            </Button>
        );
    };

    return (
        <StyleSheetManager disableVendorPrefixes>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header ThemeButton={ThemeButton} />
                <Outlet />
            </ThemeProvider>
        </StyleSheetManager>
    );
}

export default App;
