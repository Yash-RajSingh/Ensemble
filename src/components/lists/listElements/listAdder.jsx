import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import {
  AuthContext,
  NotificationPopUpContext,
  UpdateContext,
} from "../../../context/context";
import AddList from "../../../hooks/lists/addLists";
import { getCookies } from "../../../hooks/randomStuff/randomStuff";
import { Button, InputField, InputLabel, Loader } from "../../common/common";
import { CloseIcon } from "../../notificationPopUp/notificationPopUpElements";

export const ListAdderBody = styled.div`
  min-width: 17rem;
  max-width: 17rem;
  background: var(--grey);
  padding: 0.5rem;
`;
export const ListAdderTitle = styled(InputLabel)`
  text-align: center;
  cursor: pointer;
`;
export const ListInput = styled(InputField)``;

export const AdderInputWrapper = styled.div``;
export const ListAdderButton = styled(Button)``;
export const CloseBtn = styled(CloseIcon)``;
export const ListInputOptionsWrapper = styled.div`
  width: 95%;
  margin: 5% auto 1%;
`;
export const ListAdder = ({ buid }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const ListInputRef = useRef();
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const { auth, setAuth } = useContext(AuthContext);
  const { update, setUpdate } = useContext(UpdateContext);
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <ListAdderBody>
        {showInput ? (
          <AdderInputWrapper>
            <ListInput
              ref={ListInputRef}
              onChange={() => {
                ListInputRef.current.value.trim().length === 0
                  ? setIsDisabled(true)
                  : setIsDisabled(false);
              }}
            />
            <ListInputOptionsWrapper>
              <ListAdderButton
                size={"max-content"}
                disabled={isDisabled}
                onClick={async () => {
                  setIsDisabled(true);
                  setIsLoading(true);
                  var response = await AddList(
                    auth?.uid || getCookies({ name: "uuid" }),
                    ListInputRef.current.value,
                    buid
                  );
                  setIsLoading(false);
                  ListInputRef.current.value = null;
                  setIsDisabled(false);
                  setShowNotification(response);
                  setUpdate(!update);
                  setShowInput(false);
                }}
              >
                {isLoading ? <Loader /> : "Add"}
              </ListAdderButton>
              <CloseBtn onClick={() => setShowInput(false)}>+</CloseBtn>
            </ListInputOptionsWrapper>
          </AdderInputWrapper>
        ) : (
          <ListAdderTitle onClick={() => setShowInput(true)}>
            + Add another list
          </ListAdderTitle>
        )}
      </ListAdderBody>
    </>
  );
};
