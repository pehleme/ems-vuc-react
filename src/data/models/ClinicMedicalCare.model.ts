import { BaseModel } from "./Base.model";

export interface ClinicMedicalCareModel extends BaseModel {
  day?: string;
  startTime?: string;
  endTime?: string;
}
