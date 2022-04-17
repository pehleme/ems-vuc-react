import { TodoStatusEnum } from "~/data/enums";

import { BaseModel } from "./Base";

export interface TodoModel extends BaseModel {
  status?: TodoStatusEnum;
  title?: string;
  description?: string;
  color?: string;
}
