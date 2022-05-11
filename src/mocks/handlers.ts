import { db } from "./database";
import { seeds } from "./seeds";

seeds();

const handlers = [
  ...db.physician.toHandlers("rest", "http://localhost:3000/api/physician"),
];

export { handlers };
