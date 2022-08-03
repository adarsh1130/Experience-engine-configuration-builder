import { FlexGrid } from "baseui/flex-grid";
import { FlexGridItem } from "baseui/flex-grid";
import { Button } from "baseui/button";
import { SIZE } from "baseui/button";
import { KIND } from "baseui/button";
import { useStyletron } from "baseui";
export const Fotter = ({ close, disable, button, Submit }) => {
  const [css, theme] = useStyletron();
  return (
    <FlexGrid flexGridColumnCount={2} marginRight="16px">
      <FlexGridItem></FlexGridItem>
      <FlexGridItem
        className={css({
          display: "flex",
          justifyContent: "flex-end",
        })}
      >
        <Button
          kind={KIND.secondary}
          size={SIZE.compact}
          onClick={close}
          overrides={{
            Root: {
              style: {
                borderTopLeftRadius: theme.borders.radius300,
                borderTopRightRadius: theme.borders.radius300,
                borderBottomLeftRadius: theme.borders.radius300,
                borderBottomRightRadius: theme.borders.radius300,
                boxShadow: theme.lighting.shadow400,
              },
            },
          }}
          disabled={disable}
        >
          Cancel
        </Button>
        <Button
          kind={KIND.primary}
          size={SIZE.compact}
          overrides={{
            BaseButton: {
              style: {
                borderTopLeftRadius: theme.borders.radius300,
                borderTopRightRadius: theme.borders.radius300,
                borderBottomLeftRadius: theme.borders.radius300,
                borderBottomRightRadius: theme.borders.radius300,
                boxShadow: theme.lighting.shadow400,
                marginLeft: "16px",
              },
            },
          }}
          onClick={Submit}
          disabled={disable}
        >
          {button}
        </Button>
      </FlexGridItem>
    </FlexGrid>
  );
};
