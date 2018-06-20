const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

const creator = type => payload => {
  return { type, payload };
};

const createResultDescriptor = (action, result) => ({
  type: `${action}_${result}`,
  create: creator(`${action}_${result}`)
});

const createActionDescriptors = actionTypes => {
  return Object.keys(actionTypes).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: { type: actionTypes[curr], create: creator(actionTypes[curr]) },
      [`${curr}_${SUCCESS}`]: createResultDescriptor(
        actionTypes[curr],
        SUCCESS
      ),
      [`${curr}_${ERROR}`]: createResultDescriptor(actionTypes[curr], ERROR)
    }),
    {}
  );
};

export default createActionDescriptors;
