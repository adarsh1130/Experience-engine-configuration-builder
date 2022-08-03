export const POPOVER_OVERRIDES = {
  Arrow: {
    style: ({ $theme }) => ({
      backgroundColor: $theme.colors.backgroundPrimary,
      zIndex: "1",
    }),
  },
};

export const SNACKBAR_OVERRIDES = {
  Root: {
    style: ({ $theme }) => ({
      backgroundColor: $theme.colors.positive,
    }),
  },
  PlacementContainer: {
    style: {
      zIndex: "5",
    },
  },
};

export const DATE_OPTIONS = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};
