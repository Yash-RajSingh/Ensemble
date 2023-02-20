import styled from "styled-components";
import { WorkspaceContentsTitle } from "../../workspace/workspaceElements/workspaceAdder/workspaceAdderElements";
import {
  WorkspaceOption,
  WorkspaceOptionIcon,
} from "../../workspace/workspaceElements/workSpaceItem/workSpaceItemElements";
import MemberIcon from "../../../assets/member.png";
import UpdateIcon from "../../../assets/update.png";
import TrashIcon from "../../../assets/trash.png";
import DeleteBoard from "../../../hooks/boards/deleteBoards";
import { getCookies } from "../../../hooks/randomStuff/randomStuff";
import {
  NotificationPopUpContext,
  UpdateContext,
} from "../../../context/context";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Loader } from "../../common/common";
import Members from "../../members/members";
const ListPageHeaderWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const BoardPageTitle = styled(WorkspaceContentsTitle)``;
const SubHeaderWrapper = styled.div`
  width: 25%;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  gap: 5%;
`;
const ListOption = styled(WorkspaceOption)``;
const ListOptionIcon = styled(WorkspaceOptionIcon)``;

const ListPageHeader = ({ data }) => {
  const { buid } = useParams();
  const { update, setUpdate } = useContext(UpdateContext);
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  return (
    <>
      <Members show={show} setShow={setShow} />
      <ListPageHeaderWrapper>
        <BoardPageTitle>{data}</BoardPageTitle>
        <SubHeaderWrapper>
          <ListOption onClick={() => setShow(true)}>
            <ListOptionIcon src={MemberIcon} /> Members
          </ListOption>
          <ListOption>
            <ListOptionIcon src={UpdateIcon} /> Update
          </ListOption>
          <ListOption
            disabled={isDisabled}
            onClick={async () => {
              setIsLoading(true);
              setIsDisabled(true);
              var response = await DeleteBoard(
                getCookies({ name: "uuid" }),
                buid
              );
              setShowNotification(response);
              setIsLoading(false);
              setIsDisabled(false);
              if (response?.status === 200) {
                navigate("/workspace");
                setUpdate(!update);
              }
            }}
          >
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <ListOptionIcon src={TrashIcon} /> Delete
              </>
            )}
          </ListOption>
        </SubHeaderWrapper>
      </ListPageHeaderWrapper>
    </>
  );
};

export default ListPageHeader;
