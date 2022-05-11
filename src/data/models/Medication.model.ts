import { BaseModel } from "./Base.model";
import { MedicationHistoryModel } from "./MedicationHistory.model";

export interface MedicationModel extends BaseModel {
  name?: string;
  comment?: string;
  percentage?: number;
  cat?: string;

  history?: MedicationHistoryModel[];
}
