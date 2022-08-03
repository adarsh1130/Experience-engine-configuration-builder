import { useStyletron } from "baseui";
import { Spinner } from "baseui/spinner";

export const LoadingMessage = () => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      })}
    >
      <Spinner
        $borderWidth={theme.sizing.scale100}
        $size={theme.sizing.scale1600}
      />
    </div>
  );
};
