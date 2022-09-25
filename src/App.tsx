import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { Button } from "./Button";
import { themes } from "./themes";
import Layout from "./Layout";

function App(): JSX.Element {
    const { lightTheme, darkTheme } = themes;
    const [theme, setTheme] = useState(darkTheme);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Button
                    onClick={() => {
                        setTheme(theme === darkTheme ? lightTheme : darkTheme);
                    }}
                >
                    Theme
                </Button>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
