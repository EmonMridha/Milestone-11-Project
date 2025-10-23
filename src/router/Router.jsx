import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Homel from "../pages/Home/Homel";
import Register from "../pages/Register/Register";

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
        }
    ]
  },
]);

export default router;