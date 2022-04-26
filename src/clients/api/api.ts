import { API_URL } from "~/utils/constants";
import axios from "axios";

import { Interceptors } from "./interceptors";

const ApiClient = axios.create({
  baseURL: API_URL,
});

ApiClient.interceptors.request.use(Interceptors.auth);
ApiClient.interceptors.request.use(Interceptors.logger);
ApiClient.interceptors.response.use(
  (response) => response,
  Interceptors.errorHandler,
);

export { ApiClient };
