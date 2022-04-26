import { describe, expect, it } from "vitest";

import { i18n } from "./i18n";

describe("Api client", () => {
  it("should create an instance", () => {
    expect(i18n).toBeTruthy();
  });
});
