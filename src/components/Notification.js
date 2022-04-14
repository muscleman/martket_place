import React, { useState, useContext } from "react";
import { Store } from "../store/store-reducer";
import { setMessage } from "../store/actions";
import closeBtn from "../assets/icons/close_btn.png";
import loadingIcon from "../assets/icons/loading_icon.png";
import errorIcon from "../assets/icons/cross_icon.png";
import okIcon from "../assets/icons/tick_icon.png";


const Notification = () => {
  const { state, dispatch } = useContext(Store);
  const [isActive, setIsActive] = useState(true);

  const close = () => {
    setIsActive(false);
    setTimeout(() => setMessage(dispatch, { isLoading: false, type: null, text: null }), 300);
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
    <div className={ `notification ${ isActive ? 'active' : '' }` }>
      <img
        src={ icon() }
        alt={ state.message.type }
        className="notification-icon"
      />
      <p>{ state.message.text }</p>
      <img
        src={ closeBtn }
        onClick={ close }
        className="notification-close pointer"
        alt="Close button"
      />
    </div>
  );
};

export default Notification;
