import { assert } from "chai";
import { multiply } from "../multiply.js";

describe("multiply tests", function () {
  it("tdd cycle 1", function () {
    assert.equal(multiply(1, 1), 1);
  });
  it("tdd cycle 2", function () {
    assert.equal(multiply(2, 2), 4);
  });
  it("Test First TDD Cycle 3", function () {
    assert.equal(multiply(3, 3), 9);
  });
});
