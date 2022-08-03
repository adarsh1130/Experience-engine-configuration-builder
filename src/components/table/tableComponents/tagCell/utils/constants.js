export const POPOVER_OVERRIDES = {
  Body: {
    style: {
      zIndex: "1",
      maxWidth: "150px",
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

export const TOOLTIP_OVERRIDES = {
  Body: { style: ({ $theme }) => ({ zIndex: "3" }) },
  Inner: {
    style: ({ $theme }) => ({ fontSize: "9px" }),
  },
};

export const TAG_OVERRIDES = {
  Root: {
    style: {
      fontSize: "9px",
      maxWidth: "90px",
    },
  },
};
