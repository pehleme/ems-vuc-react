import type { RouteObject } from "react-router-dom";

import { MainLayout } from "~/layouts";

const PRIVATE_ROUTES: RouteObject[] = [
  {
    path: "/auth",
    element: <MainLayout />,
    children: [],
  },
];

export { PRIVATE_ROUTES };
