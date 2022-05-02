import { lazy } from "react";

// PUBLIC
const HomePage = lazy(() => import("~/pages/Home/HomePage"));
const SplashPage = lazy(() => import("~/pages/Splash/SplashPage"));
const LoadingPage = lazy(() => import("~/pages/Loading/LoadingPage"));

export { HomePage, SplashPage, LoadingPage };
