import createActionDescriptors from "../src/createActionDescriptors";

const fakeActions = {
  ACTION_1: "ACTION_1",
  ACTION_2: "ACTION_2"
};

describe("createActionDescriptors", () => {
  it("GIVEN a object with all the default actions THEN it should return a new object with success an error actions", () => {
    const actionDescriptors = createActionDescriptors(fakeActions);

    expect(actionDescriptors.ACTION_1).toBeDefined();
    expect(actionDescriptors.ACTION_1_SUCCESS).toBeDefined();
    expect(actionDescriptors.ACTION_1_ERROR).toBeDefined();

    expect(actionDescriptors.ACTION_2).toBeDefined();
    expect(actionDescriptors.ACTION_2_SUCCESS).toBeDefined();
    expect(actionDescriptors.ACTION_2_ERROR).toBeDefined();
  });
});
