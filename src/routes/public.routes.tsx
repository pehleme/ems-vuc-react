import type { RouteObject } from "react-router-dom";

import { BlankLayout, MainLayout } from "~/layouts";
import {
  HomePage,
  ListPage,
  LoadingPage,
  ScreeningPage,
  SplashPage,
} from "~/pages";

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
    path: "/",
    element: <BlankLayout />,
    children: [
      {
        path: "/screening",
        element: <ScreeningPage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
    ],
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
