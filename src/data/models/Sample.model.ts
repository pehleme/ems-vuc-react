import { BaseModel } from "./Base.model";

export interface SampleModel extends BaseModel {
  name?: string;
  date?: Date | string;
  quantity?: number;
  propagandist?: string;
}
