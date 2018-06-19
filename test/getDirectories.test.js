import getDirectories from "../src/getDirectories";

describe("getDirectories", () => {
  it("GIVEN a folder THEN it should return a list of sub-folders", () => {
    const result = getDirectories("../test/");
    expect(result.length).toBe(2);
    expect(result[0]).toContain("TestFeature1");
    expect(result[1]).toContain("TestFeature2");
  });
});
