// eslint-disable-next-line import/no-extraneous-dependencies
import { factory } from "@mswjs/data";

import {
  annotation,
  clinic,
  emsHealth,
  event,
  medEx,
  medicalCare,
  medication,
  opv,
  physician,
  sample,
  secretary,
} from "./schemas";

const db = factory({
  annotation,
  clinic,
  emsHealth,
  event,
  medEx,
  medicalCare,
  medication,
  opv,
  physician,
  sample,
  secretary,
});

export { db };
