import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Cast from "../pages/Cast";
import CastDetails from "../pages/CastDetails";
import Error from "../pages/Error";

export const Router = createBrowserRouter([
    {
        path: "/Rick-and-Morty-Wiki",
        Component: Home,
    },
    {
        path: "/Rick-and-Morty-Wiki/cast",
        Component: Cast,
    },
    {
        path: "/Rick-and-Morty-Wiki/cast-details/:id",
        Component: CastDetails,
    },
    {
        path: "/Rick-and-Morty-Wiki/*",
        Component: Error,
    },
])