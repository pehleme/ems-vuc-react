import type { RouteObject } from "react-router-dom";

import HomePage from "~/pages/Home/HomePage";

const PUBLIC_ROUTES: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export { PUBLIC_ROUTES };
