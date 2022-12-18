import SideBar from "../components/SideBar";
import ReplyItem from "../components/Main/ReplyItem";
import Breadcrumb from "../components/Main/Breadcrumb";
import PopularUserList from "../components/Main/PopularUserList";
import ReplyMenu from "../components/Main/ReplyMenu";

import styled from "styled-components";
import Container from "react-bootstrap/Container";

// main區塊
const MainStyle = styled.div`
  display: flex;
  gap: 1rem;
`;

// sidebar區塊
const LeftContainer = styled.div`
  flex: 5 1 0;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`;

// twitter區塊
const CenterContainer = styled.div`
  flex: 16 1 0;
  border: 1px solid var(--border-color);
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
`;

// popular區塊
const RightContainer = styled.div`
  flex: 7 1 0;
  padding: 1rem 0 1rem 0;
`;

function ReplyPage() {
  return (
    <Container>
      <MainStyle>
        <LeftContainer>
          <SideBar />
        </LeftContainer>
        <CenterContainer>
          {/* back為返回記號 number為推文數 */}
          <Breadcrumb title={"推文"} number={""} back={true} />
          <ReplyMenu
            username={"John Doe"}
            userAccount={"devon_lane"}
            profileImage={"https://i.imgur.com/w0BeCel.jpg"}
            time={"上午 10:05・2021年11月10日"}
            reply={38}
            like={747}
            likeActive={true}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            }
          />
          <ReplyItem
            userAccount={"devon_lane"}
            replyName={"JJJJJ"}
            replyAccount={"jjjjj"}
            profileImage={"https://i.imgur.com/w0BeCel.jpg"}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            time={"3小時"}
            reply={12}
            like={7}
            likeActive={true}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"devon_lane"}
            replyName={"GGGG"}
            replyAccount={"gggg"}
            profileImage={""}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            time={"2小時"}
            reply={2}
            like={7}
            likeActive={false}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"devon_lane"}
            replyName={"GG"}
            replyAccount={"gg"}
            profileImage={""}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            time={"7小時"}
            reply={12}
            like={37}
            likeActive={true}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"devon_lane"}
            replyName={"DDDDD"}
            replyAccount={"ddddd"}
            profileImage={""}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            time={"4天"}
            reply={1}
            like={7}
            likeActive={false}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"devon_lane"}
            replyName={"SSSSS"}
            replyAccount={"sssss"}
            profileImage={"https://imgur.com/8R1V7JG.jpg"}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            time={"1分鐘"}
            reply={12}
            like={0}
            likeActive={false}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"devon_lane"}
            replyName={"ZZZZ"}
            replyAccount={"zzzz"}
            profileImage={"https://imgur.com/8R1V7JG.jpg"}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            time={"10分鐘"}
            reply={33}
            like={7}
            likeActive={false}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
        </CenterContainer>
        <RightContainer>
          <PopularUserList/>
        </RightContainer>
      </MainStyle>
    </Container>
  );
}

export default ReplyPage;
