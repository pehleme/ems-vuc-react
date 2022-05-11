import { BaseModel } from "./Base.model";

export interface AnnotationModel extends BaseModel {
  date?: Date | string;
  description?: string;
  propagandist?: string;
}
