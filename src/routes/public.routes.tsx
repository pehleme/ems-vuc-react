import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("~/pages/Home/HomePage"));

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
