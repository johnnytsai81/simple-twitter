import SideBar from "../components/SideBar";
import FollowItem from "../components/Main/FollowItem";
import Breadcrumb from "../components/Main/Breadcrumb";
import PopularUserList from "../components/Main/PopularUserList";
import FollowTab from "../components/Main/FollowTab";
import { getUser, getUserFollowers } from "../API/user";

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
  flex: 0 0 200px;
  padding: 1rem 0;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`;

// twitter區塊
const CenterContainer = styled.div`
  flex: 1 1 0;
  border: 1px solid var(--border-color);
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
`;

// popular區塊
const RightContainer = styled.div`
  flex: 0 0 300px;
  padding: 1rem 0 1rem 0;
`;

function ProfileFollowers() {
  const [followers, setFollowers] = useState([]);
  const [info, setInfo] = useState("");
  const UserId = useParams();
  useEffect(() => {
    async function getData() {
      const { success, data, message } = await getUserFollowers(UserId.UserId);
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
        setInfo(data.user);
      } else {
        // handle error
        console.error(message);
      }
    }
    async function startOrder() {
      await getInfo();
      getData();
    }
    startOrder();
    // eslint-disable-next-line
  }, []);

  const followersList = followers.map((follower) => {
    return (
      <FollowItem
        isFollowed={follower.isFollowed}
        introduction={follower.introduction}
        avatar={follower.avatar}
        name={follower.name}
        UserId={follower.id}
        key={follower.id}
      />
    );
  });
  return (
    <Container>
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
                number={info.tweetsCounts}
                back={true}
                link={true}
              />
            )}
          <FollowTab UserId={UserId.UserId} />
          {followersList}
        </CenterContainer>
        <RightContainer>
          <PopularUserList />
        </RightContainer>
      </MainStyle>
    </Container>
  );
}

export default ProfileFollowers;
