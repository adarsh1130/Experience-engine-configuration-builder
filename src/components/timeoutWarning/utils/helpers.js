export const checkActivity = (
  setTimeoutModal,
  setIsLoggedIn,
  setUserDetails,
  router
) => {
  setInterval(() => {
    const expiryObject = JSON.parse(localStorage.getItem("expirytime"));
    if (expiryObject) {
      if (expiryObject.expires - 10 * 1000 < Date.now()) {
        setTimeoutModal(true);
      }
      if (expiryObject.expires < Date.now()) {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", JSON.stringify(false));
        setUserDetails({});
        router.push("/");
      }
    }
  }, 1000);
};

export const updateTimer = (setTimeoutModal) => {
  setTimeoutModal(false);
  localStorage.setItem(
    "expirytime",
    JSON.stringify({ expires: Date.now() + 60 * 10 * 1000 })
  );
};
