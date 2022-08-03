export const tagValues = (content) => {
  const array = [];
  for (let i = 0; i < content["Tag"].length; i++) {
    const createOption = {};
    createOption.label = content["Tag"][i];
    createOption.id = content["Tag"][i];
    array.push(createOption);
  }
  return array;
};
