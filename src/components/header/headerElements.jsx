import styled from "styled-components";
import {
  BtnText,
  CreateButton,
} from "../boards/BoardsPopup/boardsAdderElements";

export const HeaderWrapper = styled.div`
  width: 100%;
  background: var(--bg-blue);
  max-height: 3rem;
  padding: 0.35rem 0.25rem;
  display: flex;
  align-items: center;
  z-index: 3;
`;
export const HeaderSubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97%;
  margin: 0 auto;
`;
export const HeaderTitle = styled.h1`
  font-family: "Roboto";
  color: var(--white);
`;
export const LoginButton = styled(CreateButton)`
  width: 7rem;
  margin: 0;
  background: var(--dark-blue);
  &::before {
    background: var(--light-blue);
  }
  &:active {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
export const LoginText = styled(BtnText)``;

export const UserHeaderWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2%;
`;
export const UserProfileIcon = styled.img`
  width: 2.5rem;
  cursor: pointer;
`;
export const CreateBtn = styled(LoginButton)``;

export const WorkspaceButton = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  font-family: "Rubik";
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-blue);
  outline: none;
  border: none;
  border-radius: 0.188rem;
  padding: 0.375rem 0.75rem;
  line-height: 1.5rem;
  color: white;
  &:hover {
    background: #02649d;
  }
`;
export const WorkspaceOptionContainer = styled.div`
  width: 15rem;
  position: absolute;
  background: var(--bg-blue);
  border: 1px solid black;
  right: 5%;
  top: ${(props) => (props.show ? "3.5rem" : "-60%")};
  box-shadow: 0 0 0 1px rgba(9, 30, 66, 0.08);
  padding: 0.5rem;
  transition: top 500ms;
  z-index: 2;
  max-height: 15rem;
  overflow-y: scroll;
`;
export const WorkspaceOption = styled.div`
  font-family: "Rubik";
  margin-top: 3%;
  display: flex;
  align-items: center;
  gap: 3%;
  cursor: pointer;
  &:hover {
    background: var(--bg-blue);
  }
`;
export const WorkspaceIcon = styled.div`
  font-family: "Roboto";
  font-weight: 900;
  padding: 0.3rem 0.5rem;
  background: var(--lighter-black);
  color: white;
  text-align: center;
  width: 2rem;
  text-transform: uppercase;
`;
export const LightLabel = styled.p`
  font-weight: 600;
  font-family: "Roboto";
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const BtnIcon = styled.img`
  width: 0.75rem;
  margin-left: 7px;
  transform: scale(${(props) => (props.show ? "-1" : "1")});
  transition: transform 500ms;
`;

export const ProfileOptions = styled.div`
  background: var(--grey);
  position: absolute;
  top: 3.25rem;
  width: 7rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
export const ProfileOptionButton = styled.p`
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-family: "Roboto";
  &:hover {
    background: var(--bg-blue);
    cursor: pointer;
    color: white;
  }
`;
