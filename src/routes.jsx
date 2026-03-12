const routes = [
  {
    path: "/",
    // layout with nav and footer
    // element: <h1>Hello World</h1>,
    //loader
    children: [
      {
        index: true,
        // logged in = homepage with button to profile or chat
        // not = login or register buttons
        element: <h3>home</h3>,
      },
      {
        path: "/profile",
        element: <h3>profile</h3>,
      },
      { path: "/login", element: <h3>login</h3> },
      {
        path: "register",
        element: <h3>register</h3>,
      },
      {
        path: "chat",
        element: <h3>chat</h3>,
      },
    ],
  },
];

export default routes;
