import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import App from "./App";
import DisplayUnits from "./DisplayUnits";
import Home from "./Home";
import Layout from "./Layout";
import Tactics from "./Tactics";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/armybuilder", element: <Layout /> },
            { path: "/units", element: <DisplayUnits /> },
            { path: "/tactics", element: <Tactics /> },
            { path: "/about", element: <About /> },
        ],
    },
]);
