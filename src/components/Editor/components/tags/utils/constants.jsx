export const Tag_Overrides = {
  ControlContainer: {
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
      minHeight: "42px",
    }),
  },

  Tag: {
    props: {
      overrides: {
        Root: {
          style: ({ $theme }) => ({
            height: $theme.sizing.scale800,
            fontSize: $theme.sizing.scale500,
            marginLeft: "0px",
            width: "fit-content",
            backgroundColor: $theme.colors.primary500,
          }),
        },
        Action: {
          style: ({ $theme }) => ({
            marginLeft: "3px",
          }),
        },

        Text: {
          style: {
            fontSize: "10px",
          },
        },
      },
    },
  },
  Popover: {
    props: {
      overrides: {
        Body: {
          style: ({ $theme }) => ({
            height: "200px",
            marginTop: "3px",
            overflowY: "scroll",
            zIndex: "2",
            borderBottomLeftRadius: $theme.borders.radius300,
            borderBottomRightRadius: $theme.borders.radius300,
            borderTopLeftRadius: $theme.borders.radius300,
            borderTopRightRadius: $theme.borders.radius300,
          }),
        },
      },
    },
  },
  Dropdown: {
    style: ({ $theme }) => ({
      backgroundColor: $theme.colors.white,
    }),
  },
  ClearIcon: {
    props: {
      overrides: {
        Svg: {
          style: ({ $theme }) => ({
            height: "24px",
            width: "24px",
            cursor: "pointer",
          }),
        },
      },
    },
  },
};
