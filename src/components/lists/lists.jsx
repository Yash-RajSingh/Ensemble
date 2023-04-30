import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  AuthContext,
  NotificationPopUpContext,
  UpdateContext,
} from "../../context/context";
import GetListsAndTasks from "../../hooks/lists/getLists";
import { getCookies } from "../../hooks/randomStuff/randomStuff";
import PopUp from "../notificationPopUp/notificationPopUp";
import { ListAdder } from "./listElements/listAdder";
import ListItem from "./listElements/listItem";
import ListPageHeader from "./listElements/ListPageHeader";

const ListContainer = styled.div`
  /* border: 1px solid red; */
  width: 80%;
  margin-top: 2%;
  padding: 0 2%;
  /* margin-bottom: 5%; */
`;

const ListsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2%;
  margin-top: 2%;
  min-height: 80vh;
  max-height: 100vh;
  overflow-x: scroll;
  overflow-y: auto;
`;
const List = ({ buid }) => {
  const { auth, setAuth } = useContext(AuthContext);
  const { update, setUpdate } = useContext(UpdateContext);
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const [listData, setListData] = useState(false);
  var boardName = getCookies({ name: "bname" });
  useEffect(() => {
    (async () => {
      const response = await GetListsAndTasks(
        auth ? auth.uid : getCookies({ name: "uuid" }),
        buid
      );
      response?.status === 200 ? setListData(response) : setListData(false);
    })();
  }, [update]);
  return (
    <>
      <PopUp response={showNotification} />
      <ListContainer>
        <ListPageHeader data={boardName} buid={buid} />
        <ListsWrapper>
          {listData &&
            listData?.data?.map((item) => <ListItem data={item} buid={buid} />)}
          <ListAdder buid={buid} />
        </ListsWrapper>
      </ListContainer>
    </>
  );
};

export default List;
