import styled from "styled-components";
import BgImage from "../../../../assets/boardsAdderBg.png";
import { FadeIn } from "../../../common/common";
export const WorkspaceAdderContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${FadeIn} 0.25s ease-in-out;
`;

export const WorkspaceAdderWrapper = styled.div`
  width: 80vw;
  position: relative;
  display: flex;
  background: var(--white);
`;
export const WorkspaceAdderContentWrapper = styled.div`
  min-width: 50%;
  padding: 3rem;
`;
export const WorkspaceAdderContents = styled.div``;
export const WorkspaceContentsTitle = styled.p`
  font-size: ${(props) => (props.size ? props.size : "1.5rem")};
  font-weight: 600;
  color: var(--dark-blue);
  line-height: ${(props) => (props.height ? props.height : "1.75rem")};
  font-family: "Roboto";
`;
export const WorkspaceContentText = styled.p`
  color: var(--text-blue);
  font-size: ${(props) => (props.size ? props.size : "1.125rem")};
  font-family: "Rubik";
  margin-top: ${(props) => (props.top ? props.top : "5%")};
`;

export const WorkspaceAdderImageWrapper = styled.div`
  min-width: 50%;
  background-image: url(${BgImage});
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WorkspaceAdderImage = styled.img`
  width: 15rem;
`;

export const CloseButton = styled.div`
  transform: rotate(45deg);
  font-size: 2.5rem;
  color: #5e6c84;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  top: 1%;
  right: 2%;
`;
