import { BaseModel } from "./Base.model";

export interface MedExModel extends BaseModel {
  date?: Date | string;
  access?: number;
}
