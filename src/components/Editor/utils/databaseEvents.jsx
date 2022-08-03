export const update = async (
  updateConfig,
  IsFine,
  showSnackbar,
  currentContent
) => {
  const isFine = false;
  const data = finalData(currentContent);
  const str = await updateConfig(currentContent["id"], data);
  if (str == "success") {
    isFine = true;
  }
  IsFine(isFine);
  showSnackbar(isFine, str);
};

export const add = async (addConfig, IsFine, showSnackbar, currentContent) => {
  const isFine = false;
  const data = finalData(currentContent);
  const str = await addConfig(data);
  if (str == "success") {
    isFine = true;
  }
  IsFine(isFine);
  showSnackbar(isFine, str);
};

const finalData = (currentContent) => {
  const data = {};
  data.name = currentContent["Name"];
  data.tags = currentContent["Tag"];
  data.jsonobj = currentContent["Config"];
  data.description = currentContent["Description"];
  data.group = currentContent["Group"];
  data.type = currentContent["Type"];
  data.module = currentContent["Module"];
  data.createdBy = currentContent["Created By"];
  data.lastModifiedBy = currentContent["Last Modified By"];
  data.createdDate = currentContent["Created On"];
  data.modifiedDate = currentContent["Last Modified Date"];
  const Obj = JSON.parse(currentContent["Config"]);
  data.jsonobj = Obj.settings;
  return data;
};
