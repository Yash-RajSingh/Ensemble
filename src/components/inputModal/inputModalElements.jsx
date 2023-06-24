import styled from "styled-components";
import { InputField, SlideIn, SlideOut } from "../common/common";

export const InputModalBody = styled.div`
  position: absolute;
  right: 0;
  width: 19rem;
  background: white;
  padding: 0.5rem;
  border-radius: 0.188rem;
  /* box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25); */
  box-shadow: 0 0 0 1px rgba(9, 30, 66, 0.08);
  margin: 2%;
  border: 1px solid rgba(0, 0, 0, 0.09);
  animation-name: ${(props) => (props.anime ? SlideIn : SlideOut)};
  animation-duration: 0.25s;
  animation-timing-function: ease-in-out;
`;

export const InputModalHeaderWrapper = styled.div``;
export const InputModalHeader = styled.p`
  color: #5e6c84;
  font-family: "Rubik";
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
`;
export const InputModalCloseButton = styled.div`
  transform: rotate(45deg);
  float: right;
  font-size: 2rem;
  color: #5e6c84;
  font-weight: 600;
  margin-top: -10px;
  cursor: pointer;
`;
export const InputModalImageWrapper = styled.div`
  margin: 5% auto;
  width: 60%;
`;
export const InputModalImage = styled.img`
  width: 100%;
`;
export const InputModalInputWrapper = styled.div`
  margin-top: 7%;
`;
export const TempInput = styled(InputField)``;
export const TempLabel = styled.p`
  color: #5e6c84;
  font-family: "Rubik";
  font-weight: 550;
`;
