import { Button } from "baseui/button";
import { useStyletron } from "baseui";
import { KIND } from "baseui/button";
import { SHAPE } from "baseui/button";
import { SIZE } from "baseui/button";
export const Escape = ({ close }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        height: "86vh",
        width: "4%",
        position: "sticky",
        top: 0,
        backgroundColor: theme.colors.mono400,
      })}
    >
      <Button
        kind={KIND.tertiary}
        size={SIZE.compact}
        shape={SHAPE.circle}
        className={css({
          marginTop: "6vh",
          marginRight: "16px",
        })}
        onClick={close}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 10 10"
          style={{ stroke: "currentColor" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1L5 5M1 9L5 5M5 5L1 1M5 5L9 9"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Button>
    </div>
  );
};
