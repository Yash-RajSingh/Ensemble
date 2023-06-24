import styled from "styled-components";
import { InputLabel } from "../common/common";
import { BtnIcon } from "../header/headerElements";
import { CloseBtn } from "../lists/listElements/listAdder";

export const SidebarBody = styled.div`
  width: 19rem;
  background: var(--white);
  /* max-height: 90vh; */
`;

export const SidebarOptionsWrapper = styled.div`
  width: 13rem;
  margin-left: auto;
  margin-top: 15%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 5%;
  overflow-y: ${(props) => (props.overflow ? "scroll" : "")};
  max-height: 50vh;
`;

export const SidebarOption = styled.div`
  display: flex;
  gap: 5%;
  margin-top: 5%;
  align-items: flex-start;
  font-family: "Rubik";
  color: var(--dark-blue);
  font-weight: 600;
  background: var(--blue);
  padding: 0.5rem;
  border-radius: 0.25rem;
`;
export const SidebarIcon = styled.img`
  width: 1.5rem;
`;

export const SubSideBarOption = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  margin-top: 2%;
`;

export const SubSidebarIcon = styled.div`
  font-family: "Roboto";
  font-weight: 900;
  padding: 0.3rem 0.5rem;
  background: var(--lighter-black);
  color: white;
  text-align: center;
  width: 1.5rem;
  text-transform: uppercase;
`;
export const Name = styled(InputLabel)`
  margin-left: 2%;
`;

export const SmallerDown = styled(BtnIcon)`
  width: 0.5rem;
  margin-left: auto;
  margin-right: 2%;
`;

// UPLOAD FILES SECTION ELEMENTS
export const FileUploaderContainer = styled.div`
  /* border: 1px solid red; */
  min-height: 10rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.8rem 0.5rem 0.8rem 1rem;
`;
export const FileUploadWrapper = styled.div`
  border: 0.5px solid rgba(23, 43, 77, 0.2);
  background: var(--grey);
  padding: 0.5rem;
  border-radius: 0.25rem;
`;

export const UploadIcon = styled.img`
  width: 5rem;
  margin-top: 5%;
`;
export const UploadFileInput = styled.input`
  width: 1px;
  opacity: 0;
  height: 1px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
`;
export const SelectedFileName = styled(InputLabel)`
  margin: 5% auto;
  text-align: center;
  font-size: 0.8rem;
`;
export const FilesWrapper = styled.div`
  /* border: 1px solid black; */
  padding: 0.8rem 0.5rem 0.8rem 1rem;
`;

export const FileItemBody = styled.div`
  display: flex;
  margin-top: 5%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey);
  gap: 2%;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FileName = styled(InputLabel)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 0.8rem;
  line-height: 1.5;
  cursor: pointer;
`;
export const DeleteFileButton = styled(CloseBtn)``;
export const UploaderName = styled(InputLabel)`
  font-size: 0.65rem;
  margin-top: 2%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;
