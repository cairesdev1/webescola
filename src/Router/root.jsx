import { Outlet, useLocation } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyles";
import React, { useEffect } from "react";
import firebase from "../Configs/firebase";

function Root() {
  const location = useLocation();

  useEffect(() => {
    firebase.analytics().logEvent("screen_view", {
      firebase_screen: location.pathname,
    });
  }, [location]);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Outlet />
    </React.Fragment>
  );
}

export default Root;
