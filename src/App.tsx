import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./Button";
import { themes } from "./themes";
import Layout from "./Layout";
import Army from "./Army";

function App(): JSX.Element {
    const { lightTheme, darkTheme } = themes;
    const [theme, setTheme] = useState(darkTheme);

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Button
                    onClick={() => {
                        setTheme(theme === darkTheme ? lightTheme : darkTheme);
                    }}
                >
                    Theme
                </Button>
                <Army></Army>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
