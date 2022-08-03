import { useStyletron } from "baseui";
import { Button, SIZE, KIND, SHAPE } from "baseui/button";
import { Delete } from "baseui/icon";

export const CloseButton = ({ setCloneModalOpen }) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        position: "absolute",
        top: "14px",
        right: "16px",
      })}
    >
      <Button
        kind={KIND.tertiary}
        size={SIZE.mini}
        shape={SHAPE.circle}
        onClick={() => setCloneModalOpen(false)}
      >
        <Delete size={28} />
      </Button>
    </div>
  );
};
