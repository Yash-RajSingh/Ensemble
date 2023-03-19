import styled from "styled-components";
import { InputLabel } from "../../common/common";
import Edit from "../../../assets/update.png";
import Trash from "../../../assets/trash.png";
import DeleteList from "../../../hooks/lists/deleteLists";
import { useContext } from "react";
import {
  NotificationPopUpContext,
  AuthContext,
  UpdateContext,
} from "../../../context/context";
import { getCookies } from "../../../hooks/randomStuff/randomStuff";
import Task from "../../tasks/task";
import TaskAdder from "../../tasks/taskAdder";
const ListItemBody = styled.div`
  min-width: 17rem;
  max-width: 17rem;
  background: var(--grey);
  padding: 0.5rem;
`;
const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ListTitle = styled(InputLabel)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const ListOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ListIcon = styled.img`
  width: 1.12rem;
  cursor: pointer;
`;

const TaskWrapper = styled.div``;

const ListItem = ({ data, buid }) => {
  const { auth, setAuth } = useContext(AuthContext);
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const { update, setUpdate } = useContext(UpdateContext);
  return (
    <>
      <ListItemBody>
        <ListHeader>
          <ListTitle>{data?.list_title}</ListTitle>
          <ListOptions>
            <ListIcon
              src={Trash}
              onClick={async () => {
                var response = await DeleteList(
                  auth?.uid || getCookies({ name: "uuid" }),
                  buid,
                  data?.list_id
                );
                setShowNotification(response);
                setUpdate(!update);
              }}
            />
          </ListOptions>
        </ListHeader>
        {/* {console.log(data?.tasks_data)} */}
        <TaskWrapper>
          {data?.tasks_data?.map((item) => (
            <Task data={item} buid={buid} luid={data?.list_id} />
          ))}
        </TaskWrapper>
        <TaskAdder buid={buid} luid={data?.list_id} />
      </ListItemBody>
    </>
  );
};

export default ListItem;
