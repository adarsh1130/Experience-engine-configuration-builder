import { number, object, string } from "yup";
export const ValidationErrors = (setErr, array) => {
  setErr({});
  const errorObject = {};
  const first = "";
  for (let i = 0; i < array.length; i++) {
    const errArray = array[i];
    const showerr = "";
    for (let j = 0; j < errArray.length; j++) {
      if (errArray[j] == " ") break;
      showerr = showerr + errArray[j];
    }
    if (first == "") first = showerr;
    let str = errArray.substring(showerr.length);
    if (showerr == "Config") {
      errorObject[showerr] = str;
    } else {
      errorObject[showerr] = "Hold on! This is a required field";
    }
  }
  setErr(errorObject);

  return first;
};

export const ValidateJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return "Config is Incorrect";
  }
  return "";
};

export function AllFieldValidation(currentContent, getError) {
  const array = [];
  if (ValidateJson(currentContent["Config"]).length != 0) {
    array.push("Config This is incorrect JSON format");
  } else {
    const Obj = JSON.parse(currentContent["Config"]);
    const str = "Config ";
    const cnt = 0;

    if (!Obj.hasOwnProperty("module")) {
      cnt++;
      str += "module, ";
    }
    if (!Obj.hasOwnProperty("type")) {
      str += "type, ";
      cnt++;
    }
    if (!Obj.hasOwnProperty("group")) {
      str += "group ";
      cnt++;
    }
    if (cnt == 1) str += "field is missing";
    else if (cnt > 1) {
      str += "fields are missing";
    }
    if (cnt != 0) array.push(str);
  }
  const schema = object().shape({
    Name: string().required(),
    Group: string().required(),
    Type: string().required(),
    Module: string().required(),
  });
  schema
    .validate(currentContent, { abortEarly: false })
    .then((valid) => {
      getError(array);
    })
    .catch((err) => {
      if (err.errors != undefined) {
        for (let i = err.errors.length - 1; i >= 0; i--) {
          array.unshift(err.errors[i]);
        }

        getError(array);
      }
    });
}
