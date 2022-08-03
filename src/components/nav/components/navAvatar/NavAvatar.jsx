import { Avatar } from "baseui/avatar";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { ParagraphMedium, ParagraphSmall } from "baseui/typography";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { Button, SIZE } from "baseui/button";
import { useStyletron } from "baseui";
import { POPOVER_OVERRIDES, BUTTON_OVERRIDES } from "./utils/constants";
import { AvatarItem } from "./components/AvatarItem";

export const NavAvatar = ({ userDetails, setIsLoggedIn, setUserDetails }) => {
  const router = useRouter();
  const [css, theme] = useStyletron();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    setUserDetails({});
    router.push("/");
  };

  return (
    <StatefulPopover
      placement={PLACEMENT.bottomRight}
      showArrow="true"
      overrides={POPOVER_OVERRIDES}
      returnFocus
      content={() => {
        return (
          <div
            className={css({
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Avatar
              name={userDetails.name}
              size="scale1600"
              src={userDetails.picture}
            />
            <ParagraphMedium
              className={css({
                marginTop: "15px",
                marginBottom: "2px",
              })}
            >
              {userDetails.name}
            </ParagraphMedium>
            <ParagraphSmall
              className={css({
                marginTop: "2px",
                marginBottom: "20px",
              })}
            >
              {userDetails.email}
            </ParagraphSmall>
            <Button
              className={css({
                ":focus": {
                  boxShadow: "none",
                },
              })}
              overrides={BUTTON_OVERRIDES}
              size={SIZE.compact}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        );
      }}
    >
      <AvatarItem userdetails={userDetails} />
    </StatefulPopover>
  );
};
