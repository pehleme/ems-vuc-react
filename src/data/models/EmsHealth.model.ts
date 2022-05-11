import { BaseModel } from "./Base.model";

export interface EmsHealthModel extends BaseModel {
  name?: string;
  patients?: number;
}
