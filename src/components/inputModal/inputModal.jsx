import {
  InputModalBody,
  InputModalCloseButton,
  InputModalHeader,
  InputModalHeaderWrapper,
  InputModalImageWrapper,
  InputModalImage,
  InputModalInputWrapper,
  TempLabel,
  TempInput,
} from "./inputModalElements";
import BoardIcon from "../../assets/board.jpg";
import { Button, Loader } from "../common/common";
import { useContext, useEffect, useRef, useState } from "react";
import {
  AuthContext,
  NotificationPopUpContext,
  ShowInputModalContext,
  UpdateContext,
} from "../../context/context";
import AddBoard from "../../hooks/boards/addBoards";
import { getCookies } from "../../hooks/randomStuff/randomStuff";
import UpdateWorkspace from "../../hooks/workspace/updateWorkspace";

const InputModal = ({ type, boardType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const TitleRef = useRef();
  const DescriptionRef = useRef();
  const { auth, setAuth } = useContext(AuthContext);
  const { showInputModal, setShowInputModal } = useContext(
    ShowInputModalContext
  );
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const { update, setUpdate } = useContext(UpdateContext);
  useEffect(() => {
    if (showInputModal !== false) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showInputModal]);
  return (
    <>
      {showInputModal && (
        <InputModalBody anime={showInputModal}>
          <InputModalHeaderWrapper>
            <InputModalCloseButton onClick={() => setShowInputModal(false)}>
              +
            </InputModalCloseButton>
            {showInputModal?.type === "workspace" ? (
              <InputModalHeader>Update Workspace</InputModalHeader>
            ) : showInputModal?.boardType === "add" ? (
              <InputModalHeader>Add Board</InputModalHeader>
            ) : (
              <InputModalHeader>Update Board</InputModalHeader>
            )}
          </InputModalHeaderWrapper>
          <InputModalImageWrapper>
            <InputModalImage src={BoardIcon} />
          </InputModalImageWrapper>
          {showInputModal?.type === "workspace" ? (
            <>
              <InputModalInputWrapper>
                <TempLabel>Workspace Title</TempLabel>
                <TempInput
                  ref={TitleRef}
                  onChange={() => {
                    TitleRef.current.value.trim().length === 0
                      ? setIsDisabled(true)
                      : setIsDisabled(false);
                  }}
                />
              </InputModalInputWrapper>
              <Button
                top={"7%"}
                disabled={isDisabled}
                onClick={async () => {
                  setIsDisabled(true);
                  setIsLoading(true);
                  var response = await UpdateWorkspace(
                    TitleRef.current.value,
                    auth.uid || getCookies({ name: "uuid" }),
                    showInputModal?.workspace_uid
                  );
                  setIsLoading(false);
                  TitleRef.current.value = null;
                  setIsDisabled(false);
                  setShowInputModal(false);
                  setShowNotification(response);
                  setUpdate(!update);
                }}
              >
                {isLoading ? <Loader /> : "Update"}
              </Button>
            </>
          ) : showInputModal?.boardType === "add" ? (
            <>
              <InputModalInputWrapper>
                <TempLabel>Board Title</TempLabel>
                <TempInput
                  ref={TitleRef}
                  onChange={() => {
                    TitleRef.current.value.trim().length === 0
                      ? setIsDisabled(true)
                      : setIsDisabled(false);
                  }}
                />
              </InputModalInputWrapper>
              <InputModalInputWrapper>
                <TempLabel>Board Description</TempLabel>
                <TempInput ref={DescriptionRef} placeholder={"Optional"} />
              </InputModalInputWrapper>
              <Button
                top={"7%"}
                disabled={isDisabled}
                onClick={async () => {
                  setIsDisabled(true);
                  setIsLoading(true);
                  var response = await AddBoard(
                    TitleRef.current.value,
                    DescriptionRef.current.value,
                    auth.uid || getCookies({ name: "uuid" }),
                    showInputModal?.workspace_uid
                  );
                  setIsDisabled(false);
                  setIsLoading(false);
                  setShowInputModal(false);
                  setUpdate(!update);
                  setShowNotification(response);
                }}
              >
                {isLoading ? <Loader /> : "Create"}
              </Button>
            </>
          ) : (
            <>
              <InputModalInputWrapper>
                <TempLabel>Board Title</TempLabel>
                <TempInput
                  ref={TitleRef}
                  onChange={() => {
                    TitleRef.current.value.trim().length === 0
                      ? setIsDisabled(true)
                      : setIsDisabled(false);
                  }}
                />
              </InputModalInputWrapper>
              <InputModalInputWrapper>
                <TempLabel>Board Description</TempLabel>
                <TempInput ref={DescriptionRef} placeholder={"Optional"} />
              </InputModalInputWrapper>
              <Button top={"7%"} disabled={isDisabled}>
                Update
              </Button>
            </>
          )}
        </InputModalBody>
      )}
    </>
  );
};

export default InputModal;
