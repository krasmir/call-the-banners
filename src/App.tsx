import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { Button } from "./Button";
import { themes } from "./themes";
import Layout from "./Layout";
// import Army from "./Army";
// import { useDispatch } from "react-redux";
// import { addUnit, deleteUnit } from "./store/userArmy/userArmySlice";
// import DisplayUnits from "./DisplayUnits";
// import DisplayCombatUnits from "./DisplayCombatUnits";
// import { Faction } from "./types";

function App(): JSX.Element {
    const { lightTheme, darkTheme } = themes;
    const [theme, setTheme] = useState(darkTheme);

    // const dispatch = useDispatch();
    // const faction = Faction.Lannister;

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
                {/* <Army faction="Lannister" />
                <DisplayUnits typeOfUnits="Units">
                    <DisplayCombatUnits faction={faction} />
                </DisplayUnits> */}
            </Layout>
        </ThemeProvider>
    );
}

export default App;
