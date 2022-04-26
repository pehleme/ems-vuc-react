import { describe, expect, it } from "vitest";

import { ApiClient } from "./api";

describe("Api client", () => {
  it("should create an instance", () => {
    expect(ApiClient).toBeTruthy();
  });
});
