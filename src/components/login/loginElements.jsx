import styled from "styled-components";
import BackgroundImage from "../../assets/background.png";

export const LoginContainer = styled.div`
  background: url(${BackgroundImage});
  background-size: contain;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginFormWrapper = styled.div`
  width: 26rem;
  display: flex;
  gap: 5%;
  overflow: hidden;
  align-items: center;
`;
export const LoginForm = styled.form`
  background: var(--white);
  color: black;
  margin: 0 auto;
  min-width: 25rem;
  padding: 2.5rem 0.3rem;
  /* padding: 3rem 5rem;/ */
  /* font-family: "Rajdhani"; */
  /* font-weight: 900; */
  transition: margin-left 0.3s;
  border-radius: 2rem;
  text-align: center;
  &:hover {
    background: #fff;
  }
`;

export const FormInput = styled.input.attrs({
  autocomplete: "off",
})`
  width: 85%;
  margin: 2% auto;
  /* padding: 0.35rem 0.5rem; */
  padding: 0.7rem;
  font-family: "Rubik";
  font-size: 1rem;
  border-radius: 0.4rem;
  border: 1px solid rgb(0, 0, 0, 0.5);
  &:focus {
    outline: none;
    border: 1px solid var(--bg-blue);
  }
`;

export const LoginButton = styled.button`
  background: ${(props) =>
    props.disabled ? "#5e6c84" : props.color ? "#5e6c84" : "#0079bf"};
  width: 85%;
  margin: 5% auto;
  padding: 0.65rem;
  font-size: 1.3rem;
  color: white;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;

export const LoginHeading = styled.p`
  font-family: "Rubik";
  font-weight: bold;
  font-size: 2.5rem;
  width: max-content;
  display: inline;
`;

export const LoginText = styled.p`
  font-size: 1.3rem;
  font-family: Rubik;
  margin-top: 2%;
  margin-bottom: 5%;
`;

export const Decorated = styled.span`
  color: var(--bg-blue);
  text-decoration: underline;
  cursor: pointer;
`;

export const WarningText = styled.span`
  display: inline-block;
  font-family: "Roboto";
  letter-spacing: 0.5px;
  color: red;
  font-size: 0.7rem;
`;
