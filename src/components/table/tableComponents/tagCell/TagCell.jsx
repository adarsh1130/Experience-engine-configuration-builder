import { PLACEMENT, StatefulPopover, TRIGGER_TYPE } from "baseui/popover";
import { Tag, VARIANT } from "baseui/tag";
import { useStyletron } from "baseui";
import { StatefulTooltip } from "baseui/tooltip";
import {
  POPOVER_OVERRIDES,
  TOOLTIP_OVERRIDES,
  TAG_OVERRIDES,
} from "./utils/constants";

export const TagCell = ({ tags }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        overflow: "visible",
      })}
    >
      {tags.map(
        (tag, index) =>
          index < 2 && (
            <Tag
              key={tag}
              closeable={false}
              variant={VARIANT.solid}
              overrides={TAG_OVERRIDES}
            >
              <StatefulTooltip
                placement={PLACEMENT.bottom}
                overrides={{
                  Inner: {
                    style: ({ $theme }) => ({ fontSize: "9px" }),
                  },
                }}
                content={() => <>{tag}</>}
              >
                {tag}
              </StatefulTooltip>
            </Tag>
          )
      )}

      {tags.length > 2 && (
        <StatefulPopover
          triggerType={TRIGGER_TYPE.click}
          placement={PLACEMENT.right}
          showArrow
          overrides={POPOVER_OVERRIDES}
          content={() => (
            <>
              <div
                className={css({
                  padding: "5px",
                  display: "flex",
                  minWidth: "80px",
                  maxWidth: "140px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                })}
              >
                {tags.map(
                  (tag, index) =>
                    index >= 2 && (
                      <Tag
                        key={tag}
                        closeable={false}
                        variant={VARIANT.solid}
                        overrides={TAG_OVERRIDES}
                      >
                        <StatefulTooltip
                          placement={PLACEMENT.bottom}
                          overrides={TOOLTIP_OVERRIDES}
                          content={() => <>{tag}</>}
                        >
                          {tag}
                        </StatefulTooltip>
                      </Tag>
                    )
                )}
              </div>
            </>
          )}
        >
          <Tag closeable={false} overrides={TAG_OVERRIDES}>
            {`+ ${tags.length - 2} more`}
          </Tag>
        </StatefulPopover>
      )}
    </div>
  );
};
