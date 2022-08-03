import { useStyletron } from "baseui";

export const TextCell = ({ value }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        whiteSpace: "nowrap",
        overflow: "clip",
        textOverflow: "ellipsis",
      })}
    >
      {value === "" ? <span>—</span> : <span>{value}</span>}
    </div>
  );
};
