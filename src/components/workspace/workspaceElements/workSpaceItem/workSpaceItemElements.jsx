import styled from "styled-components";
import { WorkspaceContentsTitle } from "../workspaceAdder/workspaceAdderElements";

export const WorkspaceItemBody = styled.div`
  /* border: 1px solid black; */
  margin-top: 3%;
  width: 95%;
`;

export const WorkspaceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WorkspaceSubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  width: 50%;
`;
export const WorkspaceIcon = styled.p`
  background: var(--bg-blue);
  padding: 0.5rem 0.6rem;
  text-transform: uppercase;
  color: var(--white);
`;
export const WorkspaceTitle = styled(WorkspaceContentsTitle)`
  width: max-content;
  /* border: 1px solid blue; */
`;

export const WorkspaceOption = styled.button`
  outline: none;
  border: none;
  background: ${(props) => (props.disabled ? "#5e6c84" : "var(--grey)")};
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Rubik";
  font-size: 0.85rem;
  cursor: pointer;
`;
export const WorkspaceOptionIcon = styled.img`
  width: 1rem;
  float: left;
`;

export const WorkspaceItemMainBody = styled.div`
  /* padding: 0.5rem 0; */
  margin-top: 1.5%;
  /* border: 1px solid green; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const AdderButton = styled.button`
  width: 10rem;
  min-height: 5rem;
  max-height: 5rem;
  padding: 0.5rem;
  font-family: "Rubik";
  outline: none;
  border: none;
  background: var(--grey);
  cursor: pointer;
`;
