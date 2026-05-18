import Layout from "./Components/Layout/Layout";
import Homepage from "./Components/Homepage/Homepage";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Chat from "./Components/Chat/Chat";
import authLoader from "./loaders/authLoader";
import LoggedOut from "./Components/LoggedOut/LoggedOut";
const routes = [
  {
    element: <Layout />,
    loader: authLoader,
    id: "root",
    children: [
      {
        path: "/profile",
        loader: authLoader,
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
