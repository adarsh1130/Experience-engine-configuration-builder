import { CloseButton } from "../components/closeButton/CloseButton";

export const COPY_BUTTON_OVERRIDES = {
  Root: {
    style: ({ $theme }) => ({
      borderTopLeftRadius: $theme.borders.radius300,
      borderTopRightRadius: $theme.borders.radius300,
      borderBottomLeftRadius: $theme.borders.radius300,
      borderBottomRightRadius: $theme.borders.radius300,
    }),
  },
};

export const MODAL_OVERRIDES = {
  Root: {
    style: {
      zIndex: "3",
    },
  },
  Dialog: {
    style: {
      minHeight: "60vh",
      overflow: "scroll",
      width: "55vw",
      display: "flex",
      flexDirection: "column",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
    },
  },
  Close: {
    component: () => <CloseButton />,
  },
};

export const CANCEL_BUTTON_OVERRIDES = {
  Root: {
    style: ({ $theme }) => ({
      marginRight: "10px",
      borderTopLeftRadius: $theme.borders.radius300,
      borderTopRightRadius: $theme.borders.radius300,
      borderBottomLeftRadius: $theme.borders.radius300,
      borderBottomRightRadius: $theme.borders.radius300,
    }),
  },
};
