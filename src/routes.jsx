import Layout from "./Components/Layout/Layout";
import Homepage from "./Components/Homepage/Homepage";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Chat from "./Components/Chat/Chat";
import authLoader from "./loaders/authLoader";
import protectedLoader from "./loaders/protectedLoader";

const routes = [
  {
    path: "/",
    element: <Layout />,
    loader: authLoader,
    id: "root",
    children: [
      {
        index: true,
        // logged in = homepage with button to profile or chat
        // not = login or register buttons
        element: <Homepage />,
      },
      {
        path: "/profile",
        loader: authLoader,
        element: <Profile />,
      },
      { path: "/login", element: <Login /> },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "chat",
        loader: authLoader,
        element: <Chat />,
      },
    ],
  },
];

export default routes;
