import { API_URL } from "~/utils/constants";

import { db } from "./database";
import { seeds } from "./seeds";

seeds();

const handlers = [...db.physician.toHandlers("rest", `${API_URL}/physician`)];

console.log(handlers);

export { handlers };
