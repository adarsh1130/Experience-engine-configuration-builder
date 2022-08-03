import { Input } from "baseui/input";

import { SIZE } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { useStyletron } from "baseui";
import { Form_Control_Overrides } from "../../utils/constants";

export const InputFields = ({ err, label, currentContent, Change, name }) => {
  const [css, theme] = useStyletron();
  const str = "Enter " + label;
  const val = currentContent[label];
  if (label == "Name") val = name;
  return (
    <FormControl error={err[label]} overrides={Form_Control_Overrides}>
      <Input
        id={label}
        placeholder={str}
        value={val}
        onChange={Change}
        size={SIZE.compact}
        autoComplete="off"
        overrides={{
          Root: {
            style: ({ $theme, $isFocused }) => ({
              borderTopWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRightWidth: "1px",
              borderTopStyle: "solid",
              borderBottomStyle: "solid",
              borderLeftStyle: "solid",
              borderRightStyle: "solid",
              borderTopLeftRadius: theme.borders.radius300,
              borderTopRightRadius: theme.borders.radius300,
              borderBottomLeftRadius: theme.borders.radius300,
              borderBottomRightRadius: theme.borders.radius300,
              borderTopColor:
                !err[label] && $isFocused
                  ? `${theme.colors.primaryA}`
                  : `${theme.colors.mono300}`,
              borderBottomColor:
                !err[label] && $isFocused
                  ? `${theme.colors.primaryA}`
                  : `${theme.colors.mono300}`,
              borderRightColor:
                !err[label] && $isFocused
                  ? `${theme.colors.primaryA}`
                  : `${theme.colors.mono300}`,
              borderLeftColor:
                !err[label] && $isFocused
                  ? `${theme.colors.primaryA}`
                  : `${theme.colors.mono300}`,
              outline: err[label]
                ? `1px solid ${theme.colors.negative300}`
                : "none",
              ":hover": {
                borderTopColor:
                  !err[label] && !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
                borderBottomColor:
                  !err[label] && !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
                borderLeftColor:
                  !err[label] && !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
                borderRightColor:
                  !err[label] && !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
              },
            }),
          },
          InputContainer: {
            style: ({ $theme, $isFocused }) => ({
              height: "40px",
              backgroundColor: $isFocused
                ? `${theme.colors.mono200}`
                : `${theme.colors.mono300}`,
            }),
          },
        }}
      ></Input>
    </FormControl>
  );
};
