const addScopeToActions = (scope, actions) => {
  return Object.keys(actions).reduce((acc, curr) => {
    const val = actions[curr];
    if (typeof val !== "string") throw new Error("Invalid action object");

    acc[curr] = scope ? `${scope}/${val}` : val;
    return acc;
  }, {});
};

export default addScopeToActions;
