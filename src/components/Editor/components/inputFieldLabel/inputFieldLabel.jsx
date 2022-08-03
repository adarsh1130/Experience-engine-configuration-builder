import { FlexGrid } from "baseui/flex-grid";
import { FlexGridItem } from "baseui/flex-grid";
import { LabelSmall, LabelXSmall } from "baseui/typography";
import Image from "next/image";
import { useStyletron } from "baseui";
import asterik from "../../assets/asterik.png";

export const InputFieldLabel = ({ label }) => {
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
          columnGap: "3px",
          alignItems: "center",
        })}
      >
        <LabelXSmall>{label}</LabelXSmall>

        <FlexGridItem
          className={css({
            display: "flex",
            alignItems: "center",
          })}
        >
          <Image
            src={asterik}
            alt="asterik.png"
            width="6px"
            height="6px"
          ></Image>
        </FlexGridItem>
        <FlexGridItem></FlexGridItem>
      </FlexGridItem>
    </FlexGrid>
  );
};
