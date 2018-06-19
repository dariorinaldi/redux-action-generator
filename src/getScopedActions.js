import addScopeToActions from "./addScopeToActions";
import createActionDescriptors from "./createActionDescriptors";

const reducer = (a, b) => (scope, actions) => b(a(scope, actions));
const pipe = (...func) => func.reduce(reducer);

const getScopedActions = pipe(
  addScopeToActions,
  createActionDescriptors
);

export default getScopedActions;
