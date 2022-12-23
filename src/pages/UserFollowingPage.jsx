import SideBar from "../components/SideBar";
import FollowItem from "../components/Main/FollowItem";
import Breadcrumb from "../components/Main/Breadcrumb";
import PopularUserList from "../components/Main/PopularUserList";
import FollowTab from "../components/Main/FollowTab";
import { getUser, getUserFollowing } from "../API/user";

// 載入方法
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState("");
  const UserId = useParams();
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const { success, data, message } = await getUserFollowing(UserId.UserId);
      if (success) {
        // update data
        setFollowers(data);
      } else {
        // handle error
        console.error(message);
      }
    }
    async function getInfo() {
      const { success, data, message } = await getUser(UserId.UserId);
      if (success) {
        // update data
        setInfo(data);
      } else {
        // handle error
        console.error(message);
      }
    }
    async function startOrder() {
      await getInfo();
      getData();
      setLoading(false);
    }
    startOrder();
    // eslint-disable-next-line
  }, []);
  const followersList = followers.map((follower) => {
    return <FollowItem isFollowed={follower.isFollowed} />;
  });
  return (
    <Container>
      {loading ? (
        ""
      ) : (
        <MainStyle>
          <LeftContainer>
            <SideBar />
          </LeftContainer>
          <CenterContainer>
            {/* back為返回記號 number為推文數 */}
            {info === "" ? (
              ""
            ) : (
              <Breadcrumb
                title={info.name}
                number={info.Tweets.totalTweets}
                link={true}
                back={true}
              />
            )}
            <FollowTab UserId={UserId.UserId} />
            {followersList}
            <FollowItem
              username={"apple"}
              UserId={1}
              isFollowed={true}
              profileImage={"https://i.imgur.com/Nnf5Vc6.jpg"}
              selfIntro={
                "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
              }
            />
          </CenterContainer>
          <RightContainer>
            <PopularUserList />
          </RightContainer>
        </MainStyle>
      )}
    </Container>
  );
}

export default UserFollowingPage;
