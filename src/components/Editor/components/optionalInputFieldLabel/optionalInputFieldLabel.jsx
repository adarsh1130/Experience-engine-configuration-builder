import { FlexGrid } from "baseui/flex-grid";
import { FlexGridItem } from "baseui/flex-grid";
import { LabelSmall, LabelXSmall } from "baseui/typography";

import { useStyletron } from "baseui";

export const OptionalInputFieldLabel = ({ label }) => {
  const [css] = useStyletron();
  return (
    <FlexGrid
      flexGridColumnCount={1}
      className={css({
        height: "12px",
        marginBottom: "6px",
      })}
    >
      <FlexGridItem
        className={css({
          display: "flex",
          columnGap: "4px",
        })}
      >
        <LabelXSmall>{label}</LabelXSmall>
      </FlexGridItem>
    </FlexGrid>
  );
};
