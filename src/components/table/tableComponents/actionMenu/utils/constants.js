export const MENU_OVERRIDES = {
  List: {
    style: ({ $theme }) => ({
      borderBottomLeftRadius: $theme.borders.radius300,
      borderBottomRightRadius: $theme.borders.radius300,
      borderTopLeftRadius: $theme.borders.radius300,
      borderTopRightRadius: $theme.borders.radius300,
      ":focus": {
        outline: "none",
      },
    }),
  },
  Option: {
    props: {
      size: "compact",
      overrides: {
        ListItem: {
          style: ({ $theme }) => ({
            borderBottomLeftRadius: $theme.borders.radius300,
            borderBottomRightRadius: $theme.borders.radius300,
            borderTopLeftRadius: $theme.borders.radius300,
            borderTopRightRadius: $theme.borders.radius300,
            paddingLeft: "15px",
            paddingRight: "15px",
          }),
        },
      },
    },
  },
};
