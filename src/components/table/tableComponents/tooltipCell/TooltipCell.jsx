import { useStyletron } from "baseui";
import { StatefulTooltip, PLACEMENT } from "baseui/tooltip";
export const TooltipCell = ({ value }) => {
  const [css, theme] = useStyletron();
  return (
    <StatefulTooltip content={() => <>{value}</>} placement={PLACEMENT.bottom}>
      <div
        className={css({
          whiteSpace: "nowrap",
          overflow: "clip",
          textOverflow: "ellipsis",
        })}
      >
        {value === "" ? <span>—</span> : <span>{value}</span>}
      </div>
    </StatefulTooltip>
  );
};
