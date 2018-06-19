import addScopeToActions from "../src/addScopeToActions";

const fakeActions = {
  ACTION_1: "ACTION_1",
  ACTION_2: "ACTION_2"
};

describe("addScopeToActions", () => {
  it("GIVEN an action object and a scope THEN it should return the sction object with scoped values", () => {
    const scope = "MYSCOPE";
    const scopedActions = addScopeToActions(scope, fakeActions);

    expect(scopedActions.ACTION_1).toEqual("MYSCOPE/ACTION_1");
  });

  it("GIVEN an empty action object and a scope THEN it should return an empty action object", () => {
    const scope = "MYSCOPE";
    const scopedActions = addScopeToActions(scope, {});

    expect(scopedActions).toEqual({});
  });

  it("GIVEN an invalid action object and a scope THEN it should throw an error", () => {
    const scope = "MYSCOPE";
    expect(() =>
      addScopeToActions(scope, { user: { name: "Dario", lastname: "Rinaldi" } })
    ).toThrowError();
  });

  it("GIVEN an valid action object and non-string scope THEN it should return the action object scoped with string version of scope", () => {
    const scopedActions = addScopeToActions([1, 2, 3], fakeActions);

    expect(scopedActions.ACTION_1).toEqual("1,2,3/ACTION_1");
  });

  it("GIVEN an valid action object but no scope THEN it should return the action object unmodified", () => {
    const scopedActions = addScopeToActions("", fakeActions);

    expect(scopedActions).toEqual(fakeActions);
  });

  it("GIVEN an valid action object but null scope THEN it should return the action object unmodified", () => {
    const scopedActions = addScopeToActions(null, fakeActions);

    expect(scopedActions).toEqual(fakeActions);
  });
});
