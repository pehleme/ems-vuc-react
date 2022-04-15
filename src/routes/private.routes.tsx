import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const SignInPage = lazy(() => import("~/pages/Auth/SignIn/SignInPage"));
const SignUpPage = lazy(() => import("~/pages/Auth/SignUp/SignUpPage"));

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
