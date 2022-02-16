import React, { useContext } from "react";
import { Store } from "../store/store-reducer";
import { setMessage } from "../store/actions";
import closeBtn from "../img/close_btn.png";
import loadingIcon from "../img/loading_icon.png";
import errorIcon from "../img/cross_icon.png";
import okIcon from "../img/tick_icon.png";

const Notification = () => {
  const { state, dispatch } = useContext(Store);

  const close = () => {
    setMessage(dispatch, { isLoading: false, type: null, text: null });
  };

  const icon = () => {
    switch (state.message.type) {
      case "loading":
        return loadingIcon;
      case "error":
        return errorIcon;
      default:
        return okIcon;
    }
  };

  return (
    <div className="notification">
      <img
        src={icon()}
        alt={state.message.type}
        className="notification-icon"
      />
      <p>{state.message.text}</p>
      <img
        src={closeBtn}
        onClick={close}
        className="notification-close"
        alt="Close button"
      />
    </div>
  );
};

export default Notification;
