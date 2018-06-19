const creator = type => payload => {
  return { type, payload };
};

const createActionDescriptors = actionTypes => {
  return Object.keys(actionTypes).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: { type: actionTypes[curr], create: creator(actionTypes[curr]) },
      [`${curr}_SUCCESS`]: {
        type: `${actionTypes[curr]}_SUCCESS`,
        create: creator(`${actionTypes[curr]}_SUCCESS`)
      },
      [`${curr}_ERROR`]: {
        type: `${actionTypes[curr]}_ERROR`,
        create: creator(`${actionTypes[curr]}_ERROR`)
      }
    }),
    {}
  );
};

export default createActionDescriptors;
