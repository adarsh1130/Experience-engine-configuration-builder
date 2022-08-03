import { useStyletron } from "baseui";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import { useContext, useEffect } from "react";
import AppContext from "../src/AppContext";
import { LoginCard } from "../src/components/loginCard/LoginCard";
import { LoadingMessage } from "../src/components/loadingMessage/LoadingMessage";

const Home = () => {
  const [css, theme] = useStyletron();
  const router = useRouter();
  const value = useContext(AppContext);
  const setIsLoggedIn = value.setIsLoggedIn;
  const setUserDetails = value.setUserDetails;
  const isLoggedIn = value.state.isLoggedIn;

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/list");
    }
  });

  useEffect(() => {
    const checkLogin = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (!checkLogin) {
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleCallbackResponse,
      });
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "medium",
      });
      google.accounts.id.prompt();
    }
  }, []);

  const handleCallbackResponse = (response) => {
    const credentials = jwt_decode(response.credential);
    setIsLoggedIn(true);
    setUserDetails({
      name: credentials.name,
      picture: credentials.picture,
      email: credentials.email,
    });
    router.push("/list");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div
          className={css({
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <LoadingMessage />
        </div>
      ) : (
        <LoginCard />
      )}
    </div>
  );
};
export default Home;
