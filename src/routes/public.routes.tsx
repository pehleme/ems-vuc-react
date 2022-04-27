import type { RouteObject } from "react-router-dom";

import { CoreLayout } from "~/components";
import HomePage from "~/pages/Home/HomePage";

const PUBLIC_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <CoreLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export { PUBLIC_ROUTES };
