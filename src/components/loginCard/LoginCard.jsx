import { Card, StyledBody, StyledAction } from "baseui/card";
import logo from "./assets/sprinklr.png";
import Image from "next/image";
import { useStyletron } from "styletron-react";

export const LoginCard = () => {
  const [css, theme] = useStyletron();
  return (
    <Card
      className={css({
        left: "0%",
        right: "0%",
        top: "0%",
        bottom: "0%",
        maxWidth: "500px",
        maxHeight: "300px",
        position: "absolute",
        margin: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        textAlign: "center",
      })}
    >
      <StyledBody>
        <Image src={logo} alt="sprinklr logo.png" />
      </StyledBody>
      <StyledAction
        className={css({ display: "flex", justifyContent: "center" })}
      >
        <div id="signInDiv" datatype="icon"></div>
      </StyledAction>
    </Card>
  );
};
