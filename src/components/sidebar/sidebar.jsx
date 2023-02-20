import {
  SidebarBody,
  SidebarIcon,
  SidebarOption,
  SidebarOptionsWrapper,
  SubSidebarIcon,
  SubSideBarOption,
  Name,
  SmallerDown,
} from "./sidebarElements";
import BoardIcon from "../../assets/boardIcon.png";
import HomeIcon from "../../assets/waveIcon.png";
import { useContext, useEffect, useState } from "react";
import { WorkspaceArrayContext } from "../../context/context";
import { BtnIcon } from "../header/headerElements";
import Down from "../../assets/down-arrow.png";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { workspaceArray, setWorkspaceArray } = useContext(
    WorkspaceArrayContext
  );
  useEffect(() => {
    if (
      window.location.href.includes("workspace") ||
      window.location.href.includes("list")
    ) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, [window.location.href]);
  return (
    <>
      {showSidebar && (
        <SidebarBody>
          <SidebarOptionsWrapper>
            <SidebarOption>
              <SidebarIcon src={BoardIcon} />
              Boards
            </SidebarOption>
            <SidebarOption>
              <SidebarIcon src={HomeIcon} />
              Home
            </SidebarOption>
          </SidebarOptionsWrapper>
          {workspaceArray && (
            <SidebarOptionsWrapper overflow>
              <Name size={"0.75rem"}>Your Workspaces</Name>
              {workspaceArray?.data?.map((item) => (
                <SubSideBarOption>
                  <>
                    <SubSidebarIcon>
                      {item?.workspace_title?.substring(0, 1)}
                    </SubSidebarIcon>
                    <Name size={"0.65rem"}>{item?.workspace_title}</Name>
                  </>
                  <SmallerDown src={Down} />
                </SubSideBarOption>
              ))}
            </SidebarOptionsWrapper>
          )}
        </SidebarBody>
      )}
    </>
  );
};

export default Sidebar;
