import { BaseModel } from "./Base.model";

export interface ClinicSecretaryModel extends BaseModel {
  name?: string;
  email?: string;
  cellphone?: string;
  birthday?: string;
  age?: string;
}
