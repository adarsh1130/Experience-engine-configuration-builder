import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";
import { Button } from "baseui/button";
import Link from "next/link";
import { useStyletron } from "baseui";
// import ProfileSettings from "../tableHeaderComponents/ProfileSettings";
import ProfileSettings from "./components/navAvatar/profileSettings/ProfileSettings";
// import ProfileSettings from "../tableOptions/tableHeaderComponents/tableHeader/profileSettings/ProfileSettings";
import { NavAvatar } from "./components/navAvatar/NavAvatar";
import { HEADERNAV_OVERRIDES, NAV_TITLE } from "./utils/constants";

export const Nav = ({
  isLoggedIn,
  setIsLoggedIn,
  setUserDetails,
  userDetails,
}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        position: "sticky",
        top: "0",
        zIndex: "1",
      })}
    >
      <HeaderNavigation overrides={HEADERNAV_OVERRIDES}>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>{NAV_TITLE}</StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center} />
        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>
            {isLoggedIn ? (
              <div
                className={css({
                  display: "inline-flex",
                })}
              >
                <ProfileSettings />
                <NavAvatar
                  userDetails={userDetails}
                  setIsLoggedIn={setIsLoggedIn}
                  setUserDetails={setUserDetails}
                />
              </div>
            ) : (
              <Link href="/">
                <Button>Login</Button>
              </Link>
            )}
          </StyledNavigationItem>
          <StyledNavigationItem></StyledNavigationItem>
        </StyledNavigationList>
      </HeaderNavigation>
    </div>
  );
};
