import createActionDescriptors from "./createActionDescriptors";
import { join } from "path";

const generateActions = (path, features) => {
  return features.reduce(async (accum, feat) => {
    const scope = feat.toUpperCase();
    const actionsPath = join(path, feat, "actions.js");
    try {
      const featActions = await import(actionsPath);
      const actions = createActionDescriptors(scope, featActions.default);
      return { ...(await accum), [scope]: { ...actions } };
    } catch (error) {
      console.error(error);
    }
  }, {});
};

export default generateActions;
