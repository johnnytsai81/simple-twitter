import SideBar from "../components/SideBar";
import ReplyItem from "../components/Main/ReplyItem";
import UserInfoArea from "../components/Main/UserInfoArea";
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

function OtherProfileReply() {
  return (
    <Container>
      <MainStyle>
        <LeftContainer>
          <SideBar />
        </LeftContainer>
        <CenterContainer>
          {/* back為返回記號 number為推文數 */}
          <Breadcrumb title={"Doja Cat"} number={"77"} back={true} />
          <UserInfoArea
            name={"Doja Cat"}
            account={"dojacat"}
            UserId={1}
            isFollowed={true}
            follower={24}
            followed={11}
            selfIntro={"you’re annoying stfu"}
            coverImage={"https://i.imgur.com/8adzIYk.jpg"}
            avatar={"https://i.imgur.com/Nnf5Vc6.jpg"}
          ></UserInfoArea>
          <UserMenuTab UserId={1} />
          <ReplyItem
            userAccount={"apple"}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            replyAccount={"dojacat"}
            replyName={"Doja Cat"}
            profileImage={"https://i.imgur.com/Nnf5Vc6.jpg"}
            time={"3小時"}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"apple2"}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            replyAccount={"dojacat"}
            replyName={"Doja Cat"}
            profileImage={"https://i.imgur.com/Nnf5Vc6.jpg"}
            time={"2小時"}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"apple3"}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            replyAccount={"dojacat"}
            replyName={"Doja Cat"}
            profileImage={"https://i.imgur.com/Nnf5Vc6.jpg"}
            time={"7小時"}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"apple4"}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            replyAccount={"dojacat"}
            replyName={"Doja Cat"}
            profileImage={"https://i.imgur.com/Nnf5Vc6.jpg"}
            time={"4天"}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"apple56"}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            replyAccount={"dojacat"}
            replyName={"Doja Cat"}
            profileImage={"https://i.imgur.com/Nnf5Vc6.jpg"}
            time={"1分鐘"}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <ReplyItem
            userAccount={"apple7789"}
            UserId={1}
            ReplyId={"self"}
            TweetId={1}
            replyAccount={"dojacat"}
            replyName={"Doja Cat"}
            profileImage={"https://i.imgur.com/Nnf5Vc6.jpg"}
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

export default OtherProfileReply;
