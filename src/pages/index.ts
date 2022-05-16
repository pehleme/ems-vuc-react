import { lazy } from "react";

// PUBLIC
const ScreeningPage = lazy(() => import("./Screening"));
const ListPage = lazy(() => import("./List"));
const HomePage = lazy(() => import("./Home"));
const SplashPage = lazy(() => import("./Splash"));
const LoadingPage = lazy(() => import("./Loading"));

export { ScreeningPage, ListPage, HomePage, SplashPage, LoadingPage };
