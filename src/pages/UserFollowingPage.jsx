import SideBar from "../components/SideBar";
import FollowItem from "../components/Main/FollowItem";
import Breadcrumb from "../components/Main/Breadcrumb";
import PopularUserList from "../components/Main/PopularUserList";
import FollowTab from "../components/Main/FollowTab";

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

function UserFollowingPage() {
  return (
    <Container>
      <MainStyle>
        <LeftContainer>
          <SideBar />
        </LeftContainer>
        <CenterContainer>
          {/* back為返回記號 number為推文數 */}
          <Breadcrumb title={"John Doe"} number={"25"} back={true} />
          <FollowTab UserId={"self"} />
          <FollowItem
            username={"apple"}
            UserId={1}
            isFollowed={true}
            profileImage={"https://i.imgur.com/Nnf5Vc6.jpg"}
            selfIntro={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <FollowItem
            username={"apple2"}
            UserId={1}
            isFollowed={true}
            profileImage={"https://i.imgur.com/w0BeCel.jpg"}
            selfIntro={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <FollowItem
            username={"appl2"}
            UserId={1}
            isFollowed={false}
            profileImage={""}
            selfIntro={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <FollowItem
            username={"apple222"}
            UserId={1}
            isFollowed={false}
            profileImage={""}
            selfIntro={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <FollowItem
            username={"apple"}
            UserId={1}
            isFollowed={false}
            profileImage={""}
            selfIntro={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            }
          />
          <FollowItem
            username={"apple"}
            UserId={1}
            isFollowed={false}
            profileImage={""}
            selfIntro={
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

export default UserFollowingPage;
