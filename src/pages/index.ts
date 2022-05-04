import { lazy } from "react";

// PUBLIC
const HomePage = lazy(() => import("./Home"));
const ScreeningPage = lazy(() => import("./Screening"));
const SplashPage = lazy(() => import("./Splash"));
const LoadingPage = lazy(() => import("./Loading"));

export { ScreeningPage, HomePage, SplashPage, LoadingPage };
