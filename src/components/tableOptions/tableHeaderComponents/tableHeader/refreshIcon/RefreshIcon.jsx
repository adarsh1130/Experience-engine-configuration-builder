import react from "react";
import { Button, KIND, SIZE, SHAPE } from "baseui/button";
import { useStyletron } from "baseui";

const RefreshIcon = () => {
  const [css, theme] = useStyletron();
  return (
    <Button
      kind={KIND.tertiary}
      size={SIZE.compact}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            height: "35px",
            width: "35px",
            paddingLeft: "9px",
            paddingRight: "9px",
            paddingTop: "9px",
            paddingBottom: "9px",
            borderTopLeftRadius: $theme.borders.radius300,
            borderTopRightRadius: $theme.borders.radius300,
            borderBottomLeftRadius: $theme.borders.radius300,
            borderBottomRightRadius: $theme.borders.radius300,
            marginTop: "2px",
          }),
        },
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
        <path d="M13.435.768a.65.65 0 00-.803.445l-.35 1.22C10.936.857 9.002-.04 6.939 0 3.11.056.04 3.24.095 7.1.149 10.925 3.254 14 7.037 14h.1a6.974 6.974 0 005.903-3.478.649.649 0 00-1.124-.65 5.594 5.594 0 01-4.799 2.83h-.08c-3.075 0-5.6-2.505-5.645-5.621C1.348 3.937 3.844 1.344 6.957 1.3A5.559 5.559 0 0111.059 3l-1.038-.224a.65.65 0 00-.274 1.268l2.63.57a.646.646 0 00.762-.456l.742-2.587a.65.65 0 00-.446-.803z" />
      </svg>
    </Button>
  );
};
export default RefreshIcon;
