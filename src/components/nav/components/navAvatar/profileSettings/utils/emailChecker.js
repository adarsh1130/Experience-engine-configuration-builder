import { validate as validateEmail } from "email-validator";
function emailChecker(...params) {
  if (!params[0].length) {
    params[1]("");
    return false;
  }
  if (!validateEmail(params[0])) {
    params[1]("Enter a valid Email Address");
    return false;
  }
  const result = params[0].slice(-13);
  if (result !== "@sprinklr.com") {
    params[1]("Please enter the Sprinklr Email Address");
    return false;
  }
  return true;
}
export default emailChecker;
