export const getCloneVal = (config) => {
  const cloneVal = {
    name: config.name,
    deleted: false,
    roleIds: [],
    componentSettings: [
      {
        module: config.module,
        group: config.group,
        settings: { ...config.jsonobj },
      },
    ],
    clientId: "xxxx",
  };
  return JSON.stringify(cloneVal, null, 4);
};
