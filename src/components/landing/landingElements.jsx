import styled from "styled-components";
export const PageBody = styled.div``;
export const LandingContainer = styled.div`
  /* border: 1px solid pink; */
  width: 95%;
  margin: 2% auto;
  padding: 1rem;
  @media (max-width: 720px) {
    width: 90%;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
export const IntroSubWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "50%")};
  @media (max-width: 720px) {
    width: 100%;
    
  }
`;
export const IntroImage = styled.img`
  width: 95%;
  margin: auto;
  @media (max-width: 720px) {
    /* border: 1px solid green; */
    margin-top: 10%;
    width: 100%
  }
`;

export const LandingText = styled.p`
  font-family: ${(props) => (props.family ? "Roboto" : "Rubik")};
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  margin-top: ${(props) => (props.top ? props.top : "0")};
  color: ${(props) => (props.color ? "var(--bg-blue)" : "var(--text-blue)")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  width: ${(props) => props.width};
  @media (max-width: 720px) {
    &.motto {
      font-size: 2.35rem;
      /* margin-top: 40%; */
    }
    &.submotto {
      font-size: 1.25rem;
      margin-top: 15%;
    }
    &.definition {
      width: 90%;
      /* border: 2px solid yellow; */
    }
    &.powerhouse{
      margin-top: 2%;
      font-size: 2rem;
    }
  }
`;
export const InfoCard = styled.div`
  margin-bottom: 5%;
  border-left: 0.5rem solid var(--bg-blue);
  width: 87%;
  font-size: 0.85rem;
  padding: 0.5rem;
  font-family: "Rubik";
  box-shadow: 1px 1px 1px rgb(9, 30, 30, 0.1);
  border-radius: 0.35rem;
  /* border-bottom: rgb(9, 30, 30, 0.1) solid 0.25px;
  border-right: rgb(9, 30, 30, 0.1) solid 0.25px; */
  color: var(--text-blue);
  @media (max-width: 720px) {
    width: 100%;
    padding: 0.5rem 0.5rem 1rem;
  }
`;
export const InfoTitle = styled.p`
  font-size: 1.35rem;
  font-family: "Roboto";
  margin-bottom: 1.5%;
  color: var(--bg-blue);
`;

export const Footer = styled.div`
  background: linear-gradient(240deg, rgb(0, 184, 217), rgb(0, 101, 255)) 0% 0%;
  padding: 1rem;
  text-align: center;
  margin-top: 7%;
`;

export const FooterText = styled(LandingText)`
  color: white;
  line-height: 1.3333;
  margin: 2% auto 0;
`;
export const Copyright = styled.div`
  background: linear-gradient(240deg, rgb(0, 184, 217), rgb(0, 101, 255)) 0% 0%;
  color: white;
  padding: 1rem 1rem 0.5rem;
  font-size: 0.8rem;
  position: relative;
  padding-left: 2%;
`;
