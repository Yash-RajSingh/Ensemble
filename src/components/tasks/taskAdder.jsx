import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { NotificationPopUpContext, UpdateContext } from "../../context/context";
import { getCookies } from "../../hooks/randomStuff/randomStuff";
import AddTask from "../../hooks/tasks/addTask";
import { InputField, Loader } from "../common/common";
import {
  ListAdderButton,
  ListAdderTitle,
} from "../lists/listElements/listAdder";
import { CloseIcon } from "../notificationPopUp/notificationPopUpElements";

const TaskAdderTitle = styled(ListAdderTitle)`
  margin-top: 5%;
  background: var(--white);
  padding: 0.3rem 0;
`;
const TaskAdderBody = styled.div`
  width: 100%;
  padding: 0.3rem 0;
`;
const TaskInputWrapper = styled.div`
  background: var(--white);
  padding: 0.3rem;
`;
const TaskInput = styled(InputField)``;
const SubInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CloseBtn = styled(CloseIcon)`
  font-size: 1rem;
`;
const TaskAdderButton = styled(ListAdderButton)``;
const TaskAdder = ({ buid, luid }) => {
  const [showInput, setShowInput] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsloading] = useState(false);
  const { update, setUpdate } = useContext(UpdateContext);
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const TaskInputRef = useRef();
  const DateInputRef = useRef();
  return (
    <>
      <TaskAdderBody>
        {showInput ? (
          <TaskInputWrapper>
            <CloseBtn onClick={() => setShowInput(false)}>+</CloseBtn>
            <TaskInput
              ref={TaskInputRef}
              onChange={() => {
                TaskInputRef.current.value.trim().length === 0
                  ? setIsDisabled(true)
                  : setIsDisabled(false);
              }}
            />
            <SubInputWrapper>
              <TaskInput
                type={"date"}
                size={"min-content"}
                ref={DateInputRef}
              />
              <TaskAdderButton
                size={"max-content"}
                top={"5%"}
                disabled={isDisabled}
                onClick={async () => {
                  setIsDisabled(true);
                  setIsloading(true);
                  var response = await AddTask(
                    TaskInputRef.current.value,
                    getCookies({ name: "uuid" }),
                    buid,
                    DateInputRef.current.value,
                    luid
                  );
                  setIsloading(false);
                  TaskInputRef.current.value = DateInputRef.current.value =
                    null;
                  setIsDisabled(false);
                  setShowNotification(response);
                  setUpdate(!update);
                  setShowInput(false);
                }}
              >
                {isLoading ? <Loader /> : "Add"}
              </TaskAdderButton>
            </SubInputWrapper>
          </TaskInputWrapper>
        ) : (
          <TaskAdderTitle onClick={() => setShowInput(true)}>
            + Add task
          </TaskAdderTitle>
        )}
      </TaskAdderBody>
    </>
  );
};

export default TaskAdder;
