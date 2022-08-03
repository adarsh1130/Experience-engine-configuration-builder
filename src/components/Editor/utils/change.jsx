export const change = (
  e,
  setName,
  setDescription,
  tempContent,
  currentContent,
  setCurrentContent
) => {
  if (e.target.id == "Description") {
    setDescription(e.target.value);
  } else if (e.target.id == "Name") {
    setName(e.target.value);
  } else {
    tempContent = Object.assign({}, currentContent);
    tempContent[e.target.id] = e.target.value;
    setCurrentContent(tempContent);
  }
};
