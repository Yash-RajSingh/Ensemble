import {
  HeaderTitle,
  HeaderWrapper,
  LoginText,
  LoginButton,
  HeaderSubWrapper,
  UserHeaderWrapper,
  UserProfileIcon,
  CreateBtn,
  WorkspaceButton,
  BtnIcon,
  WorkspaceOption,
  WorkspaceOptionContainer,
  LightLabel,
  WorkspaceIcon,
  ProfileOptions,
  ProfileOptionButton,
} from "./headerElements";
import ProfileIcon from "../../assets/profile.png";
import DownArrow from "../../assets/down-arrow.png";
import DownArrow2 from "../../assets/down-arrow2.png";
import { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  ShowWSAdderContext,
  WorkspaceArrayContext,
} from "../../context/context";
import { useNavigate } from "react-router-dom";
import { getCookies, deleteCookie } from "../../hooks/randomStuff/randomStuff";

const WorkSpaceList = () => {
  let navigate = useNavigate();
  const { workspaceArray, setWorkspaceArray } = useContext(
    WorkspaceArrayContext
  );
  let WorkSpaceData = workspaceArray?.data;
  return (
    <>
      <LightLabel>Your Workspaces</LightLabel>
      {workspaceArray ? (
        WorkSpaceData.map((item) => {
          return (
            <>
              <WorkspaceOption
                id={item.wuid}
                onClick={(e) => {
                  navigate(`/workspace`);
                }}
              >
                <WorkspaceIcon>
                  {item?.workspace_title.substring(0, 1)}{" "}
                </WorkspaceIcon>
                {item?.workspace_title}
              </WorkspaceOption>
            </>
          );
        })
      ) : (
        <WorkspaceOption>No WorkSpaces Yet</WorkspaceOption>
      )}
    </>
  );
};

const Header = () => {
  let param = window.location.href;
  const [showProfile, setShowProfile] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showWorkspaceBody, setshowWorkspaceBody] = useState(false);
  const { showWorkspaceAdder, setShowWorkspaceAdder } =
    useContext(ShowWSAdderContext);
  const { auth, setAuth } = useContext(AuthContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (param.includes("login")) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setshowWorkspaceBody(false);
    setShowWorkspaceAdder(false);
  }, [param]);
  const userData = getCookies({ name: "uuid" });
  return (
    <>
      {showHeader && (
        <HeaderWrapper>
          <HeaderSubWrapper>
            <HeaderTitle>Ensemble</HeaderTitle>
            {auth || userData ? (
              <UserHeaderWrapper>
                {/* <WorkspaceButton
                  onClick={() => setshowWorkspaceBody(!showWorkspaceBody)}
                >
                  Workspaces
                  <BtnIcon src={DownArrow2} show={showWorkspaceBody} />
                </WorkspaceButton> */}
                <WorkspaceButton onClick={() => navigate("/workspace")}>
                  Workspaces
                </WorkspaceButton>
                <WorkspaceOptionContainer show={showWorkspaceBody}>
                  <WorkSpaceList />
                </WorkspaceOptionContainer>

                <CreateBtn onClick={() => setShowWorkspaceAdder(true)}>
                  <LoginText>Create</LoginText>
                </CreateBtn>
                <UserProfileIcon
                  src={ProfileIcon}
                  onClick={() => setShowProfile(!showProfile)}
                />
                {showProfile && (
                  <ProfileOptions>
                    <ProfileOptionButton
                      onClick={() => navigate("/userprofile")}
                    >
                      Profile
                    </ProfileOptionButton>
                    <ProfileOptionButton
                      onClick={() => {
                        setAuth(false);
                        deleteCookie({ name: "wuid" });
                        deleteCookie({ name: "bname" });
                        deleteCookie({ name: "uuid" });
                        deleteCookie({ name: "userName" });
                        navigate("/");
                        window.location.reload();
                      }}
                    >
                      Logout
                    </ProfileOptionButton>
                  </ProfileOptions>
                )}
              </UserHeaderWrapper>
            ) : (
              <LoginButton>
                <LoginText onClick={() => navigate("/login")}>Login</LoginText>
              </LoginButton>
            )}
          </HeaderSubWrapper>
        </HeaderWrapper>
      )}
    </>
  );
};

export default Header;
