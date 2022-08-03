export const Description_Overrides = {
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
      borderTopColor: $isFocused
        ? `${$theme.colors.primaryA}`
        : `${$theme.colors.mono300}`,
      borderBottomColor: $isFocused
        ? `${$theme.colors.primaryA}`
        : `${$theme.colors.mono300}`,
      borderRightColor: $isFocused
        ? `${$theme.colors.primaryA}`
        : `${$theme.colors.mono300}`,
      borderLeftColor: $isFocused
        ? `${$theme.colors.primaryA}`
        : `${$theme.colors.mono300}`,
      borderTopLeftRadius: $theme.borders.radius300,
      borderTopRightRadius: $theme.borders.radius300,
      borderBottomLeftRadius: $theme.borders.radius300,
      borderBottomRightRadius: $theme.borders.radius300,
      ":hover": {
        borderTopColor: !$isFocused ? `${$theme.colors.primaryA}` : "none",
        borderBottomColor: !$isFocused ? `${$theme.colors.primaryA}` : "none",
        borderLeftColor: !$isFocused ? `${$theme.colors.primaryA}` : "none",
        borderRightColor: !$isFocused ? `${$theme.colors.primaryA}` : "none",
      },
    }),
  },
  InputContainer: {
    style: {
      maxWidth: "100%",
      width: "min-content",
    },
  },
  Input: {
    style: ({ $theme }) => ({
      maxHeight: $theme.sizing.scale4800,
      minHeight: $theme.sizing.scale1600,
      minWidth: "300px",
      width: "100vw",
      resize: "both",
      fontSize: "14px",
    }),
  },
};
