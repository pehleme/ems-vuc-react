import { BaseModel } from "./Base.model";

export interface EventModel extends BaseModel {
  name?: string;
  date?: Date | string;
  type?: number;
  permanence?: string;
}
