import {
  Copyright,
  Footer,
  FooterText,
  InfoCard,
  InfoTitle,
  IntroContainer,
  IntroImage,
  IntroSubWrapper,
  LandingContainer,
  LandingText,
  PageBody,
} from "./landingElements";
import TeamImage from "../../assets/team.png";
import BoardImage from "../../assets/workspace.jpg";
import { useNavigate } from "react-router-dom";
import { LoginButton, LoginText } from "../header/headerElements";
const Landing = () => {
  let navigate = useNavigate();
  return (
    <>
      <PageBody>
        <LandingContainer>
          <IntroContainer>
            <IntroSubWrapper width="45%" className={"parent"}>
              <LandingText size="2.75rem" top="15%" color weight="900" className={"motto"}>
                Ensemble brings all your tasks, teammates, and tools together
              </LandingText>
              <LandingText size="1.5rem" top="7%" width="85%" className={"submotto"}>
                Keep everything in the same place—even if your team isn't.
              </LandingText>
              <LoginButton
                style={{ width: "10rem", marginTop: "3%" }}
                onClick={() => navigate("/login")}
              >
                <LoginText>Sign up today!</LoginText>
              </LoginButton>
            </IntroSubWrapper>
            <IntroSubWrapper>
              <IntroImage src={TeamImage} />
            </IntroSubWrapper>
          </IntroContainer>
          <LandingText weight="600" size="1rem" top="5%">
            Ensemble
          </LandingText>
          <LandingText size="2.25rem" top="0.5%" color className={"powerhouse"}>
            A productivity powerhouse
          </LandingText>
          <LandingText size="1.25rem" top="2%" width="60%" className={"definition"}>
            Simple, flexible, and powerful. All it takes are boards, lists, and
            tasks to get a clear view of who's doing what and what needs to get
            done.
          </LandingText>
          <IntroContainer style={{ marginTop: "3%" }}>
            <IntroSubWrapper width="35%">
              <InfoCard>
                <InfoTitle>Boards</InfoTitle>
                Ensemble boards keep tasks organized and work moving forward. In
                a glance, see everything from “things to do” to “aww yeah, we
                did it!”
              </InfoCard>
              <InfoCard>
                <InfoTitle>Lists</InfoTitle>
                The different stages of a task. Start as simple as To Do, Doing
                or Done—or build a workflow custom fit to your team's needs.
                There's no wrong way to Ensemble.
              </InfoCard>
              <InfoCard>
                <InfoTitle>Tasks</InfoTitle>
                Tasks represent tasks and ideas and hold all the information to
                get the job done. As you make progress, move Tasks across lists
                to show their status.
              </InfoCard>
            </IntroSubWrapper>
            <IntroSubWrapper width="60%" >
              <IntroImage
                src={BoardImage}
                style={{ border: "1px solid  rgb(9, 30, 30, 0.1)" }}
              />
            </IntroSubWrapper>
          </IntroContainer>
        </LandingContainer>
        <Footer>
          <FooterText size="2rem" weight="500">
            See work in a whole new way
          </FooterText>
          <FooterText size="1.5rem" width="70%">
            View your team's projects from every angle and bring a fresh
            perspective to the task at hand.
          </FooterText>
          <LoginButton
            style={{ marginTop: "2%" }}
            onClick={() => navigate("/login")}
          >
            <LoginText>Get Started!</LoginText>
          </LoginButton>
        </Footer>
        <Copyright>Copyright @ Team-Ensemble</Copyright>
      </PageBody>
    </>
  );
};

export default Landing;
