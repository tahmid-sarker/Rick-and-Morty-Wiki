import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Cast from "../pages/Cast";
import CastDetails from "../pages/CastDetails";
import Error from "../pages/Error";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/cast",
        Component: Cast,
    },
    {
        path: "/cast-details/:id",
        Component: CastDetails,
    },
    {
        path: "/*",
        Component: Error,
    },
])