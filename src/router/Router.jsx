import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Homel from "../pages/Home/Homel";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index:true,
            loader: () => fetch('http://localhost:3000/jobs').then(res=>res.json()),
            Component: Homel
        },
        {
            path: '/jobs/:id',
            Component:JobDetails,
            loader: ({params})=>fetch(`http://localhost:3000/jobs/${params.id}`) 
        },
        {
            path: '/jobApply/:id', 
            element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>
        },
        {
            path: '/myApplications',
            element: <PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
        },
        {
            path: '/addJob',
            element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
        },
        {
            path: '/applications/:job_id',
            element: <PrivateRoutes><ViewApplications></ViewApplications></PrivateRoutes>,
            loader: ({params})=>fetch(`http://localhost:3000/applications/job/${params.job_id}`)
        },
        {
            path:'/myPostedJobs',
            element: <PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
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