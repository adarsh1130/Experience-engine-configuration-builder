import "../src/styles/globals.css";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, createTheme, LightTheme, DarkTheme } from "baseui";
import { styletron } from "../styletron";
import { Nav } from "../src/components/nav/Nav";
import AppContext from "../src/AppContext";
import { useState } from "react";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn == true) {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }
  }, [userDetails, isLoggedIn]);

  useEffect(() => {
    const savedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
    const savedIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (savedIsLoggedIn) {
      setUserDetails(savedUserDetails);
      setIsLoggedIn(savedIsLoggedIn);
    }
  }, []);

  return (
    <StyletronProvider value={styletron}>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
      ></Script>
      <BaseProvider theme={LightTheme}>
        <AppContext.Provider
          value={{
            state: {
              isLoggedIn: isLoggedIn,
              userDetails: userDetails,
            },
            setIsLoggedIn: setIsLoggedIn,
            setUserDetails: setUserDetails,
          }}
        >
          {isLoggedIn && (
            <Nav
              isLoggedIn={isLoggedIn}
              userDetails={userDetails}
              setIsLoggedIn={setIsLoggedIn}
              setUserDetails={setUserDetails}
            />
          )}
          <Component key={router.asPath} {...pageProps} />
        </AppContext.Provider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
