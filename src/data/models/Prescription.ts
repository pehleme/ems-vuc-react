import { BaseModel } from "./Base";

export interface PrescriptionModel extends BaseModel {
  name?: string;
  comment?: string;
  percentage?: number;
  cat?: string;
}
