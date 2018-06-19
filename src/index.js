import { basename, join } from "path";
import getScopedActions from "./getScopedActions";
import getDirectories from "./getDirectories";

const generateActions = (sourceDir, actionFile = "actions.js") => {
  return getDirectories(sourceDir).reduce((accum, dir) => {
    const scope = basename(dir).toUpperCase();
    const unscopedActions = require(join(dir, actionFile)).default;
    const actions = getScopedActions(scope, unscopedActions);

    return { ...accum, [scope]: { ...actions } };
  }, {});
};

export default generateActions;
