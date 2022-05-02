import type { RouteObject } from "react-router-dom";

import { MainLayout } from "~/layouts";
import { HomePage, LoadingPage, SplashPage } from "~/pages";

const PUBLIC_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <SplashPage />,
  },
  {
    path: "/loading",
    element: <LoadingPage />,
  },
  {
    path: "/home",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export { PUBLIC_ROUTES };
