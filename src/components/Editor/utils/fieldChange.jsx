export const AddElementsForm = (listContent, isAdd) => {
  const content = {};
  if (!isAdd) content["id"] = listContent.id;
  else content["id"] = "";
  content["Name"] = listContent.name;
  content["Config"] = {};
  content["Config"].module = listContent.module;
  content["Config"].type = listContent.type;
  content["Config"].group = listContent.group;
  content["Config"].settings = listContent.jsonobj;
  content["Description"] = listContent.description;
  content["Group"] = listContent.group;
  content["Type"] = listContent.type;
  content["Module"] = listContent.module;
  content["Created By"] = listContent.createdBy;
  content["Last Modified By"] = listContent.lastModifiedBy;
  if (!isAdd) {
    content["Created On"] = listContent.createdDate;
    content["Last Modified Date"] = listContent.modifiedDate;
  } else {
    content["Created On"] = new Date("");
    content["Last Modified Date"] = new Date("");
  }
  content["Tag"] = listContent.tags;

  return content;
};
