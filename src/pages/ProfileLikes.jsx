import SideBar from "../components/SideBar";
import PostItem from "../components/Main/PostItem";
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

function ProfileLikes() {
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
            follower={24}
            followed={11}
            selfIntro={"Hi I'm Kobe"}
            coverImage={"https://i.imgur.com/Uongp79.jpg"}
            avatar={"https://i.imgur.com/buZlxFF.jpeg"}
          ></UserInfoArea>
          <UserMenuTab UserId={"self"} />
          <PostItem
            account={"apple"}
            name={"kkk"}
            TweetId={1}
            UserId={1}
            profileImage={"https://i.imgur.com/w0BeCel.jpg"}
            time={"3小時"}
            reply={12}
            like={7}
            likeActive={true}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <PostItem
            account={"apple2"}
            name={"dfdfdfd"}
            TweetId={1}
            UserId={1}
            profileImage={""}
            time={"2小時"}
            reply={2}
            like={7}
            likeActive={true}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <PostItem
            account={"appl2"}
            name={"apple"}
            TweetId={1}
            UserId={1}
            profileImage={"https://imgur.com/8R1V7JG.jpg"}
            time={"7小時"}
            reply={12}
            like={37}
            likeActive={true}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <PostItem
            account={"apple222"}
            name={"apple"}
            TweetId={1}
            UserId={1}
            profileImage={""}
            time={"4天"}
            reply={1}
            like={7}
            likeActive={true}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <PostItem
            account={"apple"}
            name={"apple"}
            TweetId={1}
            UserId={1}
            profileImage={"https://i.imgur.com/Nnf5Vc6.jpg"}
            time={"1分鐘"}
            reply={12}
            like={0}
            likeActive={true}
            tweet={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <PostItem
            account={"apple"}
            name={"apple"}
            TweetId={1}
            UserId={1}
            profileImage={""}
            time={"10分鐘"}
            reply={33}
            like={7}
            likeActive={true}
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

export default ProfileLikes;
