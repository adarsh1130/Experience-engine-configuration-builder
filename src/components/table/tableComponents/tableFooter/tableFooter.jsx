import { ParagraphXSmall } from "baseui/typography";
import { useStyletron } from "baseui";
export const TableFooter = ({ length }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        position: "relative",
        bottom: "2px",
        backgroundColor: theme.colors.backgroundPrimary,
        border: `1px solid ${theme.colors.borderOpaque}`,
        height: "40px",
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        marginRight: "2px",
      })}
    >
      <ParagraphXSmall>Showing {length} Configurations</ParagraphXSmall>
    </div>
  );
};
