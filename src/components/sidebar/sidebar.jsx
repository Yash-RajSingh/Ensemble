import {
  SidebarBody,
  SidebarIcon,
  SidebarOption,
  SidebarOptionsWrapper,
  SubSidebarIcon,
  SubSideBarOption,
  Name,
  SmallerDown,
  FileUploaderContainer,
  FilesWrapper,
  FileItemBody,
  FileName,
  DeleteFileButton,
  FileUploadWrapper,
  UploadIcon,
  UploadFileInput,
  SelectedFileName,
  ButtonWrapper,
  UploaderName,
} from "./sidebarElements";
import BoardIcon from "../../assets/boardIcon.png";
import HomeIcon from "../../assets/waveIcon.png";
import { useContext, useEffect, useState, useRef } from "react";
import {
  NotificationPopUpContext,
  UpdateContext,
  WorkspaceArrayContext,
} from "../../context/context";
import { BtnIcon } from "../header/headerElements";
import Down from "../../assets/down-arrow.png";
import { useLocation } from "react-router-dom";
import { getCookies } from "../../hooks/randomStuff/randomStuff";
import GetFiles from "../../hooks/cloudStorage/getFile";
import { Button, InputLabel, Loader } from "../common/common";
import DeleteFile from "../../hooks/cloudStorage/deleteFile";
import Upload from "../../assets/upload.png";
import Uploaded from "../../assets/uploaded.png";
import UploadFile from "../../hooks/cloudStorage/uploadFile";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isListPage, setIsListPage] = useState(false);
  const [filesList, setFilesList] = useState([]);
  const { workspaceArray, setWorkspaceArray } = useContext(
    WorkspaceArrayContext
  );
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const { update, setUpdate } = useContext(UpdateContext);
  const location = useLocation();
  const FileRef = useRef();
  const [image, setImage] = useState(null);
  const activateBrowseFile = () => {
    FileRef.current.click();
  };
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

  useEffect(() => {
    const route = window.location.pathname.split("/");
    if (route[1] === "list") {
      setIsListPage(true);
      (async () => {
        const request = await GetFiles(
          getCookies({ name: "uuid" }),
          localStorage.getItem("tempId")
        );
        if (request?.status === 200) {
          setFilesList(request.data);
        }
      })();
    } else {
      setIsListPage(false);
    }
  }, [location, localStorage.getItem("tempId"), update]);
  const FileItem = ({ data }) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
      <>
        <FileItemBody>
          <div style={{ flex: 1 }}>
            <FileName onClick={() => window.open(data?.url)}>
              {data?.file_name}
            </FileName>
            <UploaderName>Shared by:- {data?.uploader}</UploaderName>
          </div>
          {isLoading ? (
            <Loader dark />
          ) : (
            <DeleteFileButton
              onClick={async () => {
                setIsLoading(true);
                const request = await DeleteFile(
                  getCookies({ name: "uuid" }),
                  localStorage.getItem("tempId"),
                  data?.file_name
                );
                request?.status === 200
                  ? setShowNotification(request)
                  : setShowNotification({
                      message: "Error Deleting file",
                      status: 400,
                    });
                setIsLoading(false);
                setUpdate(!update);
              }}
            >
              +
            </DeleteFileButton>
          )}
        </FileItemBody>
      </>
    );
  };
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {showSidebar && (
        <>
          {isListPage ? (
            <>
              <SidebarBody>
                <FileUploaderContainer>
                  <FileUploadWrapper>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      {!!image ? (
                        <UploadIcon src={Uploaded} />
                      ) : (
                        <UploadIcon src={Upload} />
                      )}
                      <UploadFileInput
                        type="file"
                        ref={FileRef}
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>

                    {image?.name && (
                      <SelectedFileName>{image.name}</SelectedFileName>
                    )}
                    {!!image ? (
                      <>
                        <ButtonWrapper>
                          <Button
                            disabled={isLoading}
                            onClick={async () => {
                              setIsLoading(true);
                              const request = await UploadFile(
                                getCookies({ name: "uuid" }),
                                localStorage.getItem("tempId"),
                                image
                              );
                              if (request?.status === 200) {
                                setShowNotification(request);
                                setUpdate(!update);
                              } else {
                                setShowNotification({
                                  message: "Error Sharing file",
                                  status: 400,
                                });
                              }
                              setImage(null);
                              setIsLoading(false);
                            }}
                          >
                            {isLoading ? <Loader /> : "Share"}
                          </Button>
                          <Button onClick={(e) => setImage(null)}>clear</Button>
                        </ButtonWrapper>
                      </>
                    ) : (
                      <Button onClick={activateBrowseFile} top={"7%"}>
                        Upload
                      </Button>
                    )}
                  </FileUploadWrapper>
                </FileUploaderContainer>
                <FilesWrapper>
                  <InputLabel
                    style={{
                      borderBottom: "1px solid rgba(23,43,77,0.25)",
                      width: "max-content",
                      padding: "0.125rem",
                    }}
                  >
                    Files shared
                  </InputLabel>
                  {filesList.length > 0 ? (
                    <>
                      {filesList?.map((element, index) => (
                        <FileItem data={element} key={"fileId" + index} />
                      ))}
                    </>
                  ) : (
                    <>
                      <InputLabel style={{ marginTop: "5%" }}>
                        No files shared yet!
                      </InputLabel>
                    </>
                  )}
                </FilesWrapper>
              </SidebarBody>
            </>
          ) : (
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
      )}
    </>
  );
};

export default Sidebar;
