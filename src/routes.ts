import { createBrowserRouter } from "react-router";
import SignIn from "./pages/SignIn";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: SignIn,
  },
]);
