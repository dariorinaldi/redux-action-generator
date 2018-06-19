import getScopedActions from "../src/getScopedActions";

const unscopedActions = {
  ACTION_1: "ACTION_1",
  ACTION_2: "ACTION_2"
};

describe("getScopedActions", () => {
  it("GIVEN a scope and an actions object THEN it should return an new object with scoped action descriptor types", () => {
    const scope = "MYSCOPE";
    const scopedDescriptors = getScopedActions(scope, unscopedActions);

    expect(scopedDescriptors.ACTION_1.type).toEqual("MYSCOPE/ACTION_1");
    expect(scopedDescriptors.ACTION_1_SUCCESS.type).toEqual(
      "MYSCOPE/ACTION_1_SUCCESS"
    );
    expect(scopedDescriptors.ACTION_1_ERROR.type).toEqual(
      "MYSCOPE/ACTION_1_ERROR"
    );
  });
});
