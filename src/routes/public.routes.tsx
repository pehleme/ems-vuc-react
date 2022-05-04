import type { RouteObject } from "react-router-dom";

import { MainLayout } from "~/layouts";
import { HomePage, LoadingPage, ScreeningPage, SplashPage } from "~/pages";

const PUBLIC_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <SplashPage />,
  },
  {
    path: "/screening",
    element: <ScreeningPage />,
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
