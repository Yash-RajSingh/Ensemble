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
import {
  getCookies,
  deleteCookie,
  createCookie,
} from "../../../hooks/randomStuff/randomStuff";
import {
  NotificationPopUpContext,
  UpdateContext,
} from "../../../context/context";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Loader } from "../../common/common";
import Members from "../../members/members";
import UpdateBoard from "../../../hooks/boards/updateBoards";
const ListPageHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const BoardPageTitle = styled(WorkspaceContentsTitle)`
  padding: 0.25rem;
`;
const SubHeaderWrapper = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5%;
`;
const ListOption = styled(WorkspaceOption)``;
const ListOptionIcon = styled(WorkspaceOptionIcon)``;

const BoardPageTitleEdit = styled.input`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dark-blue);
  font-family: "Roboto";
  padding: 0.25rem;
  &:focus {
    border: 1px solid var(--text-blue);
    outline: none;
    border-radius: 0.25rem;
  }
`;

const EditableText = () => {
  const { buid } = useParams();
  const [text, setText] = useState(getCookies({ name: "bname" }));
  const [isEditing, setIsEditing] = useState(false);
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  return (
    <>
      {isEditing ? (
        <BoardPageTitleEdit
          onChange={(e) => {
            e.target.value !== "" ? setText(e.target.value) : setText(text);
          }}
          onBlur={async () => {
            setIsEditing(false);
          }}
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              setIsEditing(false);
              var response = await UpdateBoard(
                buid,
                getCookies({ name: "uuid" }),
                text
              );
              setShowNotification(response);
              deleteCookie({ name: "bname" });
              createCookie({
                name: "bname",
                value: text,
                validDays: 30,
              });
            }
          }}
          autoFocus
        />
      ) : (
        <BoardPageTitle
          onDoubleClick={() => {
            setIsEditing(true);
          }}
        >
          {text}
        </BoardPageTitle>
      )}
    </>
  );
};

const ListPageHeader = () => {
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
        {/* <BoardPageTitle>{data}</BoardPageTitle> */}
        <EditableText />
        <SubHeaderWrapper>
          <ListOption onClick={() => setShow(true)}>
            <ListOptionIcon src={MemberIcon} /> Members
          </ListOption>
          {/* <ListOption>
            <ListOptionIcon src={UpdateIcon} /> Update
          </ListOption> */}
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