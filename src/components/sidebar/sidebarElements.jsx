import styled from "styled-components";
import { InputLabel } from "../common/common";
import { BtnIcon } from "../header/headerElements";

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
