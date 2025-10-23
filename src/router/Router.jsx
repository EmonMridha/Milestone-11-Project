import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Homel from "../pages/Home/Homel";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index:true,
            Component: Homel
        },
        {
            path:'/register',
            Component: Register
        },
        {
            path:'/signIn',
            Component: SignIn
        }
    ]
  },
]);

export default router;