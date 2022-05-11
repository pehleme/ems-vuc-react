import { OpvModel } from ".";
import { AnnotationModel } from "./Annotation.model";
import { BaseModel } from "./Base.model";
import { ClinicModel } from "./Clinic.model";
import { EmsHealthModel } from "./EmsHealth.model";
import { EventModel } from "./Event.model";
import { MedExModel } from "./MedEx.model";
import { MedicationModel } from "./Medication.model";
import { SampleModel } from "./Sample.model";

export interface PhysicianModel extends BaseModel {
  name?: string;
  crm?: string;
  email?: string;
  cellphone?: string;
  birthday?: string;
  age?: number;
  specialty?: string;
  patients?: number;
  anvisaLetter?: boolean;

  profilePdi?: string[];
  profileVac?: string[];
  profileType?: string[];

  hasMedEx?: boolean;
  hasEvents?: boolean;
  hasEmsHealth?: boolean;

  events?: EventModel[];
  emsHealth?: EmsHealthModel[];
  medEx?: MedExModel[];
  samples?: SampleModel[];
  medications?: MedicationModel[];
  clinics?: ClinicModel[];
  opv?: OpvModel[];
  annotations?: AnnotationModel[];
}
