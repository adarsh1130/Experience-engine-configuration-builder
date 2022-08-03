import { Avatar } from "baseui/avatar";
import { forwardRef } from "react";
export const AvatarItem = forwardRef((props, ref) => {
  const { children, userdetails, ...restProps } = props;
  return (
    <Avatar
      overrides={{
        Root: {
          props: { ref: ref, userdetails: userdetails, ...restProps },
        },
      }}
      name={userdetails.name}
      size="scale900"
      src={userdetails.picture}
    />
  );
});
AvatarItem.displayName = "AvatarItem";
