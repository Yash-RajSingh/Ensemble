import {
  Decorated,
  FormInput,
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginFormWrapper,
  LoginHeading,
  LoginText,
  WarningText,
} from "./loginElements";
import { Loader } from "../common/common";
import { useContext, useRef, useState } from "react";
import { AuthContext, NotificationPopUpContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import HandleSignUp from "../../hooks/authentication/handleSignup";
import HandleLogin from "../../hooks/authentication/handleLogin";
import PopUp from "../notificationPopUp/notificationPopUp";
import {
  createCookie,
  deleteCookie,
  getCookies,
} from "../../hooks/randomStuff/randomStuff";

const Login = () => {
  let navigate = useNavigate();
  const { showNotification, setShowNotification } = useContext(
    NotificationPopUpContext
  );
  const { auth, setAuth } = useContext(AuthContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isMatching, setIsMatching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(true);
  const LoginEmailRef = useRef();
  const LoginPassRef = useRef();
  const SignupNameRef = useRef();
  const SignupEmailRef = useRef();
  const SignupPasswordRef = useRef();
  const SignupConfirmPasswordRef = useRef();

  // checking is both the fields are not empty
  const handleLoginChange = () => {
    LoginEmailRef.current.value.trim().length === 0 ||
    LoginPassRef.current.value.trim().length === 0
      ? setIsDisabled(true)
      : setIsDisabled(false);
  };
  const handleSignupChange = () => {
    if (
      SignupNameRef.current.value.trim().length === 0 ||
      SignupEmailRef.current.value.trim().length === 0 ||
      SignupPasswordRef.current.value.trim().length === 0 ||
      SignupConfirmPasswordRef.current.value.trim().length === 0
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    SignupPasswordRef.current.value === SignupConfirmPasswordRef.current.value
      ? setIsMatching(true)
      : setIsMatching(false);
  };

  return (
    <>
      <PopUp response={showNotification} />
      <LoginContainer>
        <LoginFormWrapper>
          {/* LoginForm  */}
          <LoginForm style={{ marginLeft: show ? "0" : "-26rem" }}>
            <LoginHeading>Ensemble</LoginHeading>
            <LoginText>Remember everything important.</LoginText>
            <FormInput
              placeholder="Username"
              ref={LoginEmailRef}
              type="email"
              onChange={handleLoginChange}
            />
            <FormInput
              placeholder="Password"
              ref={LoginPassRef}
              onChange={handleLoginChange}
              type="password"
            />
            <LoginButton
              disabled={isDisabled}
              onClick={async (e) => {
                e.preventDefault();
                setIsDisabled(true);
                setIsLoading(true);
                var response = await HandleLogin(
                  LoginEmailRef.current.value,
                  LoginPassRef.current.value
                );
                setShowNotification(response);
                setIsDisabled(false);
                setIsLoading(false);
                if (response.status === 200) {
                  setAuth(response);
                  createCookie({
                    name: "userName",
                    value: response.username,
                    validDays: 7,
                  });
                  createCookie({
                    name: "uuid",
                    value: response.uid,
                    validDays: 7,
                  });
                  setTimeout(() => {
                    navigate("/workspace");
                  }, 1300);
                }
              }}
            >
              {isLoading ? <Loader /> : "Login"}
            </LoginButton>
            <LoginText>
              Don't have an account?{" "}
              <Decorated onClick={() => setShow(false)}>Create one</Decorated>
            </LoginText>
          </LoginForm>

          {/* Signup Form  */}
          <LoginForm>
            <LoginHeading>Ensemble</LoginHeading>
            <LoginText>Remember everything important.</LoginText>
            <FormInput
              placeholder="Username"
              ref={SignupNameRef}
              type="text"
              onChange={handleSignupChange}
            />
            <FormInput
              placeholder="Email"
              ref={SignupEmailRef}
              onChange={handleSignupChange}
            />
            <FormInput
              placeholder="Password"
              type="password"
              ref={SignupPasswordRef}
              onChange={handleSignupChange}
            />
            <FormInput
              placeholder="Confirm Password"
              type="password"
              ref={SignupConfirmPasswordRef}
              onChange={handleSignupChange}
            />
            {!isMatching && (
              <WarningText>Passwords do not match. Try again!</WarningText>
            )}
            <LoginButton
              disabled={isDisabled}
              onClick={async (e) => {
                e.preventDefault();
                setIsLoading(true);
                setIsDisabled(true);
                var response = await HandleSignUp(
                  SignupNameRef.current.value,
                  SignupEmailRef.current.value,
                  SignupPasswordRef.current.value
                );
                setIsLoading(false);
                setIsDisabled(false);
                setShowNotification(response);
                if (response.status === 200) {
                  createCookie({
                    name: "email",
                    value: SignupEmailRef.current.value,
                    validDays: 7,
                  });
                  createCookie({
                    name: "pass",
                    value: SignupPasswordRef.current.value,
                    validDays: 7,
                  });
                  const LoginStatus = await HandleLogin(
                    getCookies({ name: "email" }),
                    getCookies({ name: "pass" })
                  );
                  if (LoginStatus.status === 200) {
                    deleteCookie({ name: "email" });
                    deleteCookie({ name: "pass" });
                    createCookie({
                      name: "userName",
                      value: LoginStatus.username,
                      validDays: 7,
                    });
                    createCookie({
                      name: "uuid",
                      value: LoginStatus.uid,
                      validDays: 7,
                    });
                    setAuth(LoginStatus);
                    navigate("/workspace");
                  }
                }
              }}
            >
              {isLoading ? <Loader /> : "Signup"}
            </LoginButton>
            <LoginText>
              Already have an account?{" "}
              <Decorated onClick={() => setShow(true)}>Login</Decorated>
            </LoginText>
          </LoginForm>
        </LoginFormWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;

// <LoginContainer>
//   <LoginWrapper>
//     {/* <LoginImage src={Collaborate2} /> */}
//     <LoginFormWrapper>
//       {/* SIGNUP FORM  */}
//       <LoginForm style={{ marginLeft: show ? "-20rem" : "0" }}>
//         <InputWrapper style={{ textAlign: "center" }}>
//           <Label>Already have an account?</Label>
//           <LoginButton
//             style={{ left: 0, marginTop: "1%" }}
//             onClick={(e) => {
//               e.preventDefault();
//               setShow(!show);
//             }}
//           >
//             Login
//           </LoginButton>
//         </InputWrapper>
//         <InputWrapper>
//           {/* <Label>Username</Label> */}
//           <FormInput
//             type={"text"}
//             placeholder="Enter your name"
//             ref={SignupNameRef}
//           />
//         </InputWrapper>
//         <InputWrapper>
//           {/* <Label>E-mail</Label> */}
//           <FormInput
//             type={"email"}
//             placeholder="Enter your email"
//             ref={SignupEmailRef}
//           />
//         </InputWrapper>
//         <InputWrapper>
//           {/* <Label>Password</Label> */}
//           <FormInput
//             type={"password"}
//             placeholder="Enter your password"
//             ref={SignupPasswordRef}
//           />
//         </InputWrapper>
//         <LoginButton
//           onClick={async (e) => {
//             e.preventDefault();
//             var response = await HandleSignUp(
//               SignupNameRef.current.value,
//               SignupEmailRef.current.value,
//               SignupPasswordRef.current.value
//             );
//             setShowNotification(response);
//             if (response.status === 200) {
//               createCookie({
//                 name: "email",
//                 value: SignupEmailRef.current.value,
//                 validDays: 30,
//               });
//               createCookie({
//                 name: "pass",
//                 value: SignupPasswordRef.current.value,
//                 validDays: 30,
//               });
//               const LoginStatus = await HandleLogin(
//                 getCookies({ name: "email" }),
//                 getCookies({ name: "pass" })
//               );
//               if (LoginStatus.status === 200) {
//                 deleteCookie({ name: "email" });
//                 deleteCookie({ name: "pass" });
//                 createCookie({
//                   name: "userName",
//                   value: LoginStatus.username,
//                   validDays: 30,
//                 });
//                 createCookie({
//                   name: "uuid",
//                   value: LoginStatus.uid,
//                   validDays: 30,
//                 });
//                 setAuth(LoginStatus);
//                 navigate("/workspace");
//               }
//             }
//           }}
//         >
//           Signup
//         </LoginButton>
//       </LoginForm>

//       {/* LOGIN FORM  */}
//       {/* <LoginForm style={{display: show ? "block": "none"}}> */}
//       <LoginForm style={{ margin: "auto 0" }}>
//         <InputWrapper style={{ textAlign: "center" }}>
//           <Label>Don't have an account?</Label> <br />
//           <LoginButton
//             style={{ left: 0, marginTop: "2%" }}
//             onClick={(e) => {
//               e.preventDefault();
//               setShow(!show);
//             }}
//           >
//             Signup
//           </LoginButton>
//         </InputWrapper>
//         <InputWrapper style={{ marginTop: "10%" }}>
//           <Label>E-mail</Label>
//           <FormInput
//             type={"email"}
//             placeholder="Enter your Email"
//             ref={LoginEmailRef}
//           />
//         </InputWrapper>
//         <InputWrapper>
//           <Label>Password</Label>
//           <FormInput
//             type={"password"}
//             placeholder="Enter your password"
//             ref={LoginPassRef}
//           />
//         </InputWrapper>
//         <LoginButton
//           style={{ marginTop: "10%" }}
//           onClick={async (e) => {
//             e.preventDefault();
//             var response = await HandleLogin(
//               LoginEmailRef.current.value,
//               LoginPassRef.current.value
//             );
//             // setModalData(response);
//             setShowNotification(response);
//             if (response.status === 200) {
//               setAuth(response);
//               createCookie({
//                 name: "userName",
//                 value: response.username,
//                 validDays: 30,
//               });
//               createCookie({
//                 name: "uuid",
//                 value: response.uid,
//                 validDays: 30,
//               });
//               setTimeout(() => {
//                 navigate("/workspace");
//               }, 1300);
//             }
//           }}
//         >
//           Login
//         </LoginButton>
//       </LoginForm>
//     </LoginFormWrapper>
//   </LoginWrapper>
// </LoginContainer>
