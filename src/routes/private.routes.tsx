import type { RouteObject } from "react-router-dom";

import { SignInPage, SignUpPage } from "~/pages";

const PRIVATE_ROUTES: RouteObject[] = [
  {
    path: "/auth",
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
  },
];

export { PRIVATE_ROUTES };
