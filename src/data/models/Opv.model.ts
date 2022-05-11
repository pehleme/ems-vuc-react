import { BaseModel } from "./Base.model";

export interface OpvModel extends BaseModel {
  date?: Date | string;
  description?: string;
}
