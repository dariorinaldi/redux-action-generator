import getScopedActions from "../src/";

describe("getScopedActions", () => {
  it("GIVEN 2 local files of actions THEN it should return an aggregated object containing both scoped", () => {
    const result = getScopedActions("../test");

    expect(result.TESTFEATURE1.ACTION_1).toBeDefined();
  });
});
