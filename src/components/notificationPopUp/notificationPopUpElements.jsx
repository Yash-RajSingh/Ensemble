import styled from "styled-components";
import { BoardsCloseButton } from "../boards/BoardsPopup/boardsAdderElements";

export const PopUpContainer = styled.div`
  position: fixed;
  width: 99vw;
`;
export const PopupBody = styled.div`
  width: 20rem;
  background: ${(props) => (props.status ? "#C5E8B7" : "#FFCDD2")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.5rem;
  border-radius: 0.188rem;
  position: absolute;
  transition: right 500ms;
  z-index: 10;
`;
export const PopupIcon = styled.img`
  width: 1.75rem;
`;

export const PopupMessage = styled.p`
  line-height: 1.5rem;
  color: ${(props) => (props.status ? "#2EB62C" : "#B71C1C")};
  font-size: ${(props) => (props.status ? "1.15rem" : "1.25rem")};
  font-weight: 600;
  font-family: "Rubik";
`;

export const Response = styled.div`
  display: flex;
  gap: 5%;
  align-items: center;
  flex-grow: 1;
`;

export const CloseIcon = styled.div`
  color: black;
  margin-top: 0;
  transform: rotate(45deg);
  float: right;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
`;
