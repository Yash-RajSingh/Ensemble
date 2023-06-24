import styled from "styled-components";
import { SlideDown } from "../common/common";

export const MembersContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: #00000017;
  z-index: 5;
  justify-content: center;
  align-items: center;
`;
export const MembersWrapper = styled.div`
  animation: ${SlideDown} 0.25s ease-in;
  background: var(--white);
  width: 35rem;
  height: max-content;
  padding: 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 02.);
`;

export const MemberAdderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1%;
  padding: 0.5rem 0;
  justify-content: space-between;
`;

export const MemberListWrapper = styled.div`
  /* border: 1px solid green; */
`;

export const MemberItem = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  margin: 3% 0 0 1%;
`;
export const MemberItemSubWrapper = styled.div`
  /* border: 1px solid green; */
`;
