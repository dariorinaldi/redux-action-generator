const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

const creator = type => payload => {
  return { type, payload };
};

const createResultDescriptor = (scope, action, result) => {
  const value = `${action}_${result}`;
  const type = scope ? `${scope}/${value}` : value;
  return {
    type,
    create: creator(type)
  };
};

const createActionDescriptors = (scope, actionTypes) => {
  return Object.keys(actionTypes).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: { type: actionTypes[curr], create: creator(actionTypes[curr]) },
      [`${curr}_${SUCCESS}`]: createResultDescriptor(
        scope,
        actionTypes[curr],
        SUCCESS
      ),
      [`${curr}_${ERROR}`]: createResultDescriptor(
        scope,
        actionTypes[curr],
        ERROR
      )
    }),
    {}
  );
};

export default createActionDescriptors;
