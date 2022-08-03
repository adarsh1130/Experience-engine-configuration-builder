import { useStyletron } from "baseui";
import { Input, StyledInput, SIZE } from "baseui/input";
import { Tag, VARIANT as TAG_VARIANT } from "baseui/tag";
import { forwardRef } from "react";
import emailChecker from "../utils/emailChecker";

const InputReplacement = forwardRef(
  ({ tags, removeTag, ...restProps }, ref) => {
    const [css, theme] = useStyletron();
    return (
      <div
        className={css({
          flex: "1 1 0%",
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          marginTop: "0",
        })}
      >
        {tags.map((tag, index) => (
          <Tag
            variant={TAG_VARIANT.solid}
            onActionClick={() => removeTag(tag)}
            key={index}
            overrides={{
              Root: {
                style: ({ $theme }) => ({
                  height: theme.sizing.scale750,
                  fontSize: theme.sizing.scale500,
                  marginLeft: "3px",
                  marginTop: "3px",
                  marginBottom: "3px",
                  marginRight: "3px",

                  backgroundColor: theme.colors.primary500,
                }),
              },
            }}
          >
            {tag}
          </Tag>
        ))}
        <StyledInput ref={ref} {...restProps} />
      </div>
    );
  }
);
InputReplacement.displayName = "InputReplacement";
const InputField = ({
  value,
  setValue,
  tags,
  setTags,
  errorMessage,
  setErrorMessage,
}) => {
  const [css, theme] = useStyletron();
  if (!value.length && errorMessage.length) setErrorMessage("");
  const addTag = (tag) => {
    setTags([...tags, tag]);
  };
  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      // Enter
      case 13: {
        if (!emailChecker(value, setErrorMessage)) return;
        addTag(value);
        setValue("");
        setErrorMessage("");
        return;
      }
      // Backspace
      case 8: {
        if (value || !tags.length) return;
        removeTag(tags[tags.length - 1]);
        return;
      }
    }
  };
  // console.log(rootStyle);
  return (
    <div>
      <Input
        placeholder={tags.length ? "" : "Enter the Email IDs"}
        value={value}
        size={SIZE.compact}
        onChange={(e) => setValue(e.currentTarget.value)}
        overrides={{
          Input: {
            style: { width: "auto", flexGrow: 1 },
            component: InputReplacement,
            props: {
              tags: tags,
              removeTag: removeTag,
              onKeyDown: handleKeyDown,
            },
          },
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
                !errorMessage && $isFocused
                  ? `${theme.colors.primaryA}`
                  : `${theme.colors.mono300}`,
              borderBottomColor:
                !errorMessage && $isFocused
                  ? `${theme.colors.primaryA}`
                  : `${theme.colors.mono300}`,
              borderRightColor:
                !errorMessage && $isFocused
                  ? `${theme.colors.primaryA}`
                  : `${theme.colors.mono300}`,
              borderLeftColor:
                !errorMessage && $isFocused
                  ? `${theme.colors.primaryA}`
                  : `${theme.colors.mono300}`,
              outline: errorMessage
                ? `1px solid ${theme.colors.negative300}`
                : "none",
              ":hover": {
                borderTopColor:
                  !errorMessage && !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
                borderBottomColor:
                  !errorMessage && !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
                borderLeftColor:
                  !errorMessage && !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
                borderRightColor:
                  !errorMessage && !$isFocused
                    ? `${theme.colors.primaryA}`
                    : "none",
              },
            }),
          },
          InputContainer: {
            style: ({ $theme, $isFocused }) => ({
              paddingLeft: "8px",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingRight: "8px",
              backgroundColor: $isFocused
                ? `${theme.colors.mono200}`
                : `${theme.colors.mono300}`,
            }),
          },
        }}
      />
      <p
        className={css({
          marginTop: "4px",
          marginBottom: "2px",
          fontSize: "12px",
          color: "red",
          height: "15px",
        })}
      >
        {errorMessage}
      </p>
    </div>
  );
};
export default InputField;
