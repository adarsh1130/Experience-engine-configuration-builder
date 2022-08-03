export const allTags = async (setOptions, fetchTags) => {
  const tagList = await fetchTags();
  const options = [];
  for (let i = 0; i < tagList.length; i++) {
    let createOption = {};
    createOption.label = tagList[i];
    createOption.id = tagList[i];
    options.push(createOption);
  }
  setOptions(options);
};
