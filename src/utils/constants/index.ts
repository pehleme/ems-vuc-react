import i18next from "i18next";

const MODE = import.meta.env.MODE;
const API_URL = import.meta.env.VITE_API_URL;
const DB_NAME = import.meta.env.VITE_APP_DB_NAME;
const FALLBACK_LANGUAGE = import.meta.env.VITE_APP_FALLBACK_LANGUAGE;
const LANGUAGE = i18next.language || window.localStorage.i18nextLng;

export { MODE, API_URL, DB_NAME, FALLBACK_LANGUAGE, LANGUAGE };
