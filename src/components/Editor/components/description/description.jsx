import { useStyletron } from "baseui";
import { Textarea } from "baseui/textarea";
import { SIZE } from "baseui/textarea";
import { Description_Overrides } from "./utils/constants";
export const Description = ({ change, description }) => {
  const [css, theme] = useStyletron();
  return (
    <Textarea
      id="Description"
      placeholder="Enter Description"
      value={description}
      onChange={change}
      size={SIZE.default}
      overrides={Description_Overrides}
      autoComplete="off"
    ></Textarea>
  );
};
