import { BoardsCloseButton } from "../boards/BoardsPopup/boardsAdderElements";
import { Button, InputField, InputLabel, Loader } from "../common/common";
import {
  MemberAdderWrapper,
  MemberItem,
  MemberItemSubWrapper,
  MemberListWrapper,
  MembersContainer,
  MembersWrapper,
} from "./memberElements";
import { useState, useEffect, useContext, useRef } from "react";
import {
  AuthContext,
  UpdateContext,
  NotificationPopUpContext,
} from "../../context/context";
import GetMember from "../../hooks/members/getMember";
import { getCookies } from "../../hooks/randomStuff/randomStuff";
import { useParams } from "react-router-dom";
import AddMember from "../../hooks/members/addMember";
import PopUp from "../notificationPopUp/notificationPopUp";
import DeleteMember from "../../hooks/members/deleteMember";
const Members = (props) => {
  const { buid } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const { update, setUpdate } = useContext(UpdateContext);
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const [memberList, setMemberList] = useState(false);
  const uuid = auth ? auth.uid : getCookies({ name: "uuid" });
  useEffect(() => {
    (async () => {
      const response = await GetMember(
        auth ? auth.uid : getCookies({ name: "uuid" }),
        buid
      );
      console.log(response);
      if (response?.status === 200) {
        setMemberList(response.data);
        memberList[0]?.user_id === uuid
          ? setIsCreator(true)
          : setIsCreator(false);
      }
    })();
  }, [update]);
  const MemberRef = useRef();
  return (
    <>
      <MembersContainer show={props.show}>
        <MembersWrapper>
          <BoardsCloseButton onClick={() => props.setShow(false)}>
            +
          </BoardsCloseButton>
          <InputLabel bold size="1.25rem">
            {memberList && memberList[0]?.user_id === uuid
              ? "Share Board"
              : "Members"}
          </InputLabel>
          {memberList && memberList[0]?.user_id === uuid && (
            <MemberAdderWrapper>
              <InputField
                top="0"
                size="70%"
                type="email"
                ref={MemberRef}
                onChange={() => {
                  MemberRef.current.value.trim().length === 0
                    ? setIsDisabled(true)
                    : setIsDisabled(false);
                }}
              />
              <Button
                disabled={isDisabled}
                size="7rem"
                style={{ marginBottom: "0" }}
                onClick={async (e) => {
                  e.preventDefault();
                  setIsDisabled(true);
                  setIsLoading(true);
                  var response = await AddMember(
                    MemberRef.current.value,
                    auth.uid || getCookies({ name: "uuid" }),
                    getCookies({ name: "wuid" }),
                    buid
                  );
                  console.log(response);
                  setShowNotification(response);
                  setIsLoading(false);
                  setUpdate(!update);
                  MemberRef.current.value = null;
                }}
              >
                {isLoading ? <Loader /> : "Add"}
              </Button>
            </MemberAdderWrapper>
          )}
          <MemberListWrapper>
            {memberList &&
              memberList.map((item, index) => {
                return (
                  <>
                    <MemberItem>
                      <MemberItemSubWrapper>
                        <InputLabel bold>
                          {`${item?.username
                            .charAt(0)
                            .toUpperCase()}${item?.username.substring(
                            1,
                            item?.username.length
                          )}`}
                          {uuid === item?.user_id ? " (you)" : ""}
                        </InputLabel>
                        <InputLabel>{item?.email}</InputLabel>
                      </MemberItemSubWrapper>
                      <MemberItemSubWrapper>
                        <InputLabel>{item?.user_role}</InputLabel>
                        {memberList && memberList[0]?.user_id === uuid && (
                          <InputLabel
                            size="0.65rem"
                            top="3%"
                            style={{ float: "right", cursor: "pointer" }}
                            onClick={async (e) => {
                              var response = await DeleteMember(
                                item.email,
                                auth.uid || getCookies({ name: "uuid" }),
                                getCookies({ name: "wuid" }),
                                buid
                              );
                              setShowNotification(response);
                              setUpdate(!update);
                            }}
                          >
                            Remove
                          </InputLabel>
                        )}
                      </MemberItemSubWrapper>
                    </MemberItem>
                  </>
                );
              })}
          </MemberListWrapper>
        </MembersWrapper>
      </MembersContainer>
    </>
  );
};

export default Members;
