import SideBar from "../components/SideBar";
import ReplyItem from "../components/Main/ReplyItem";
import UserInfoArea from "../components/Main/UserPostList/UserInfoArea";
import Breadcrumb from "../components/Main/Breadcrumb";
import PopularUserList from "../components/Main/PopularUserList";
import UserMenuTab from "../components/Main/UserMenuTab";

// 載入方法
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

function ProfileReply() {
  return (
    <Container>
      <MainStyle>
        <LeftContainer>
          <SideBar />
        </LeftContainer>
        <CenterContainer>
          {/* back為返回記號 number為推文數 */}
          <Breadcrumb title={"John Doe"} number={"25"} back={true} />
          <UserInfoArea
            name={"John Doe"}
            account={"heyjohn"}
            UserId={"self"}
            ReplyId={1}
            follower={24}
            followed={11}
            selfIntro={"Hi I'm Kobe"}
            coverImage={"https://i.imgur.com/Uongp79.jpg"}
            avatar={"https://i.imgur.com/buZlxFF.jpeg"}
          ></UserInfoArea>
          <UserMenuTab UserId={"self"} />
          <ReplyItem
            userAccount={"apple"}
            UserId={"self"}
            ReplyId={1}
            TweetId={1}
            replyAccount={"heyjohn"}
            replyName={"John Doe"}
            profileImage={"https://i.imgur.com/buZlxFF.jpg"}
            time={"3小時"}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"apple2"}
            UserId={"self"}
            ReplyId={1}
            TweetId={1}
            replyAccount={"heyjohn"}
            replyName={"John Doe"}
            profileImage={"https://i.imgur.com/buZlxFF.jpg"}
            time={"2小時"}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"apple3"}
            UserId={"self"}
            ReplyId={1}
            TweetId={1}
            replyAccount={"heyjohn"}
            replyName={"John Doe"}
            profileImage={"https://i.imgur.com/buZlxFF.jpg"}
            time={"7小時"}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"apple4"}
            UserId={"self"}
            ReplyId={1}
            TweetId={1}
            replyAccount={"heyjohn"}
            replyName={"John Doe"}
            profileImage={"https://i.imgur.com/buZlxFF.jpg"}
            time={"4天"}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"apple56"}
            UserId={"self"}
            ReplyId={1}
            TweetId={1}
            replyAccount={"heyjohn"}
            replyName={"John Doe"}
            profileImage={"https://i.imgur.com/buZlxFF.jpg"}
            time={"1分鐘"}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"apple7789"}
            UserId={"self"}
            ReplyId={1}
            TweetId={1}
            replyAccount={"heyjohn"}
            replyName={"John Doe"}
            profileImage={"https://i.imgur.com/buZlxFF.jpg"}
            time={"10分鐘"}
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

export default ProfileReply;
