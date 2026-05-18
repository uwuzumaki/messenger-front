import Layout from "./Components/Layout/Layout";
import Homepage from "./Components/Homepage/Homepage";
import LandingPage from "./Components/LandingPage/LandingPage";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Chat from "./Components/Chat/Chat";
import LoggedOut from "./Components/LoggedOut/LoggedOut";
import authLoader from "./loaders/authLoader";
import redirectLoader from "./loaders/redirectLoader";

const routes = [
  {
    element: <Layout />,
    loader: authLoader,
    id: "root",
    children: [
      { path: "/home", element: <LandingPage /> },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    loader: redirectLoader,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/unauthorized",
        element: <LoggedOut />,
      },
      { path: "/login", element: <Login /> },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];

export default routes;
