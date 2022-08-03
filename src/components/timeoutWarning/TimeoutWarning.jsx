import { Modal, ModalHeader, ModalBody } from "baseui/modal";
import { useState, useEffect, useContext } from "react";
import AppContext from "../../AppContext";
import { useRouter } from "next/router";
import { checkActivity, updateTimer } from "./utils/helpers";

export const TimeoutWarning = ({}) => {
  const [timeoutModal, setTimeoutModal] = useState(false);
  const context = useContext(AppContext);
  const isLoggedIn = context.state.isLoggedIn;
  const setIsLoggedIn = context.setIsLoggedIn;
  const setUserDetails = context.setUserDetails;
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== "undefined") {
      window.addEventListener("load", () => updateTimer(setTimeoutModal));
      window.addEventListener("mousemove", () => updateTimer(setTimeoutModal));
      window.addEventListener("keydown", () => updateTimer(setTimeoutModal));
      window.addEventListener("scroll", () => updateTimer(setTimeoutModal));
    }
    setTimeout(
      () =>
        checkActivity(setTimeoutModal, setIsLoggedIn, setUserDetails, router),
      3000
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal
        isOpen={timeoutModal}
        overrides={{
          Root: {
            style: {
              zIndex: "5",
            },
          },
        }}
      >
        <ModalHeader>Timeout Warning</ModalHeader>
        <ModalBody>
          You will be logged out after 10 seconds of inactivity
        </ModalBody>
      </Modal>
    </>
  );
};
