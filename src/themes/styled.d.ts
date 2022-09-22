import "styled-components";

// extend module declaration for styled components
declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string;
        bg: string;

        colors: {
            main: string;
            secondary: string;
        };
    }
}
