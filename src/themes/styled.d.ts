import "styled-components";

// extend module declaration for styled components
declare module "styled-components" {
    export interface DefaultTheme {
        bg: string;
        tableTitle: string;
        colors: {
            main: string;
            secondary: string;
        };
        button: {
            main: string;
            secondary: string;
        };
    }
}
