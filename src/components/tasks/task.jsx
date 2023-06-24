import { useContext } from "react";
import styled from "styled-components";
import { NotificationPopUpContext, UpdateContext } from "../../context/context";
import { getCookies } from "../../hooks/randomStuff/randomStuff";
import DeleteTask from "../../hooks/tasks/deleteTask";
import UpdateTask from "../../hooks/tasks/updateTask";
import { InputLabel } from "../common/common";
import { CloseIcon } from "../notificationPopUp/notificationPopUpElements";

const TaskBody = styled.div`
  width: 100%;
  background: var(--white);
  margin-top: 2%;
  padding: 0.3rem;
`;
const TaskTitle = styled(InputLabel)`
  font-size: 0.85rem;
`;
const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
`;
const Status = styled(InputLabel)`
  margin-top: 1%;
`;
const DueDate = styled.input`
  font-size: 0.7rem;
  font-family: "Rubik";
  color: var(--dark-blue);
  border: none;
  outline: none;
  width: 20px;
  color: var(--white);
  &::selection {
    background-color: var(--white);
    color: var(--white);
  }
  &:active,
  &:focus {
    background-color: var(--white);
    color: var(--white);
  }
`;
const StatusSelect = styled.select``;
const StatusOption = styled.option``;
const CloseBtn = styled(CloseIcon)`
  font-size: 1rem;
  cursor: pointer;
`;

const Task = ({ data, buid, luid }) => {
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const { update, setUpdate } = useContext(UpdateContext);
  return (
    <>
      <TaskBody>
        <SubInfo>
          <TaskTitle>{data?.task_title}</TaskTitle>
          <CloseBtn
            onClick={async () => {
              var response = await DeleteTask(
                getCookies({ name: "uuid" }),
                buid,
                luid,
                data?.task_id
              );
              setShowNotification(response);
              setUpdate(!update);
            }}
          >
            +
          </CloseBtn>
        </SubInfo>
        <SubInfo>
          <StatusSelect
            onChange={async (e) => {
              var response = await UpdateTask(
                data?.task_title,
                getCookies({ name: "uuid" }),
                buid,
                data?.due_date_time,
                luid,
                data?.task_id,
                e.target.value
              );
              setShowNotification(response);
              setUpdate(!update);
            }}
          >
            <StatusOption
              selected={
                data?.task_status.includes("Not started") ? true : false
              }
              value="Not started"
            >
              Not started
            </StatusOption>
            <StatusOption
              selected={
                data?.task_status.includes("In Progress") ? true : false
              }
              value="In progress"
            >
              In progress
            </StatusOption>
            <StatusOption
              selected={data?.task_status.includes("Completed") ? true : false}
              value="Completed"
            >
              Completed
            </StatusOption>
          </StatusSelect>
          {/* <Status size={"0.7rem"}>{data?.task_status} </Status> */}

          {data?.due_date_time && (
            <div style={{ display: "flex" }}>
              <Status size={"0.7rem"}>Due: {data?.due_date_time}</Status>
              <DueDate
                type="date"
                value={data?.due_date_time}
                onChange={async (e) => {
                  var response = await UpdateTask(
                    data?.task_title,
                    getCookies({ name: "uuid" }),
                    buid,
                    e.target.value,
                    luid,
                    data?.task_id,
                    data?.task_status
                  );
                  setShowNotification(response);
                  setUpdate(!update);
                }}
              />
            </div>
          )}
          {/* {data?.due_date_time &&
           <>
           <Status size={"0.7rem"}>Due:</Status><DueDate type="date" value={data?.due_date_time} />
           </>
           } */}
        </SubInfo>
      </TaskBody>
    </>
  );
};

export default Task;
