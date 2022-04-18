import { BaseModel } from "./Base";

export interface PrescriptionModel extends BaseModel {
  name?: string;
  cat?: string;
  comment?: string;
  percentage?: number;
}
