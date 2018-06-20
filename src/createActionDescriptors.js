const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

const creator = type => payload => {
  return { type, payload };
};

const createResultDescriptor = result => ({
  type: `${actionTypes[curr]}_${result}`,
  create: creator(`${actionTypes[curr]}_${success}`)
});

const createActionDescriptors = actionTypes => {
  return Object.keys(actionTypes).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: { type: actionTypes[curr], create: creator(actionTypes[curr]) },
      [`${curr}_${SUCCESS}`]: createResultDescriptor(SUCCESS),
      [`${curr}_${ERROR}`]: createResultDescriptor(ERROR)
    }),
    {}
  );
};

export default createActionDescriptors;
