import Layout from "./Components/Layout/Layout";
import Homepage from "./Components/Homepage/Homepage";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Chat from "./Components/Chat/Chat";

const routes = [
  {
    path: "/",
    element: <Layout />,
    //loader
    //id
    children: [
      {
        index: true,
        // logged in = homepage with button to profile or chat
        // not = login or register buttons
        element: <Homepage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      { path: "/login", element: <Login /> },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
    ],
  },
];

export default routes;
