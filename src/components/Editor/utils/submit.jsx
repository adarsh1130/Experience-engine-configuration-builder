import { AllFieldValidation } from "./validationErrors";
export const submit = (
  tempContent,
  currentContent,
  isAdd,
  name,
  description,
  str,
  context,
  tag,
  Error
) => {
  tempContent = Object.assign({}, currentContent);
  const tagArray = [];
  for (let i = 0; i < tag.length; i++) {
    tagArray.push(tag[i].label);
  }
  currentContent["Tag"] = JSON.parse(JSON.stringify(tagArray));
  currentContent["Config"] = str;
  currentContent["Description"] = description;
  currentContent["Name"] = name;
  currentContent["Last Modified Date"] = new Date();
  currentContent["Last Modified By"] = context.state.userDetails.name;
  if (isAdd) {
    currentContent["Created On"] = new Date();
    currentContent["Created By"] = context.state.userDetails.name;
  }
  AllFieldValidation(currentContent, Error);
};
