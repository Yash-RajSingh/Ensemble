import { useContext, useEffect, useRef } from "react";
import Right from "../../assets/right.png";
import Wrong from "../../assets/wrong2.png";
import { NotificationPopUpContext } from "../../context/context";
import {
  PopUpContainer,
  PopupBody,
  PopupIcon,
  PopupMessage,
  Response,
  CloseIcon,
} from "./notificationPopUpElements";

const PopUp = ({ response }) => {
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const PopupRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (showNotification !== false) {
        PopupRef.current.style.right = "-25rem";
      }
    }, 1500);
    setTimeout(() => {
      if (showNotification !== false) {
        setShowNotification(false);
      }
    }, 1750);
  }, [showNotification]);
  return (
    <>
      <PopUpContainer>
        <PopupBody
          ref={PopupRef}
          status={response?.status === 200 ? true : false}
          style={{ right: showNotification !== false ? "0%" : "-25rem" }}
        >
          <Response>
            <PopupIcon src={response?.status === 200 ? Right : Wrong} />
            <PopupMessage status={response?.status === 200 ? true : false}>
              {response?.message}
            </PopupMessage>
          </Response>
          <CloseIcon onClick={() => setShowNotification(false)}>+</CloseIcon>
        </PopupBody>
      </PopUpContainer>
    </>
  );
};

export default PopUp;
