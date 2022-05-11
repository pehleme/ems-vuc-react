import { BaseModel } from "./Base.model";
import { ClinicMedicalCareModel } from "./ClinicMedicalCare.model";
import { ClinicSecretaryModel } from "./ClinicSecretary.model";

export interface ClinicModel extends BaseModel {
  name?: string;
  cellphone?: string;
  address?: string;
  active?: boolean;

  secretaries?: ClinicSecretaryModel[];
  medicalCare?: ClinicMedicalCareModel[];
}
