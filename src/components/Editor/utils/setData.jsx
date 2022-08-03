export const setData = (currentContent, str) => {
  const Obj = {};
  const tempObj = JSON.parse(str);
  Obj.module = currentContent["Module"];
  Obj.type = currentContent["Type"];
  Obj.group = currentContent["Group"];
  Obj.settings = tempObj.settings;
  const newConfig = JSON.stringify(Obj, null, 4);
  return newConfig;
};
