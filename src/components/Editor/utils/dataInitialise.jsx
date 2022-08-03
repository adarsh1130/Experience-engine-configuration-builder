export const initialData = (content) => {
  const keys = Object.keys(content);
  const vals = Object.values(content);
  const tempContent = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] != "Config") {
      tempContent[keys[i]] = vals[i];
    } else {
      tempContent[keys[i]] = JSON.stringify(vals[i], null, 4);
    }
  }
  return tempContent;
};

export const setheading = (isAdd, listContent) => {
  const str = "";
  if (isAdd) {
    str = "Create";
  } else {
    str = "Update " + listContent.name;
  }
  return str;
};

export const setbutton = (isAdd) => {
  const str = "";
  if (isAdd) {
    str = "Create";
  } else {
    str = "Update";
  }
  return str;
};
