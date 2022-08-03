export const POPOVER_OVERRIDES = {
  Body: {
    style: {
      zIndex: "5",
    },
  },
  Inner: {
    style: ({ $theme }) => ({
      backgroundColor: $theme.colors.backgroundPrimary,
      borderTopLeftRadius: $theme.borders.radius300,
      borderTopRightRadius: $theme.borders.radius300,
      borderBottomLeftRadius: $theme.borders.radius300,
      borderBottomRightRadius: $theme.borders.radius300,
    }),
  },
  Arrow: {
    style: ({ $theme }) => ({
      backgroundColor: $theme.colors.backgroundPrimary,
    }),
  },
};

export const BUTTON_OVERRIDES = {
  Root: {
    style: ({ $theme }) => ({
      borderTopLeftRadius: $theme.borders.radius300,
      borderTopRightRadius: $theme.borders.radius300,
      borderBottomLeftRadius: $theme.borders.radius300,
      borderBottomRightRadius: $theme.borders.radius300,
    }),
  },
};
