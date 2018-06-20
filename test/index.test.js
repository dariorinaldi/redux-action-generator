import generateActions from "../src/";

describe("getScopedActions", () => {
  it("GIVEN 2 local files of actions THEN it should return an aggregated object containing both scoped", async () => {
    const result = await generateActions("../test", [
      "TestFeature1",
      "TestFeature2"
    ]);

    expect(result.TESTFEATURE1.ACTION_1).toBeDefined();
  });
});
