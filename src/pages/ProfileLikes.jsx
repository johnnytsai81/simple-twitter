import SideBar from "../components/SideBar";
import PostItem from "../components/Main/PostItem";
import UserInfoArea from "../components/Main/UserInfoArea";
import Breadcrumb from "../components/Main/Breadcrumb";
import PopularUserList from "../components/Main/PopularUserList";
import UserMenuTab from "../components/Main/UserMenuTab";
import { getUser, getUserLiked } from "../API/user";

// 載入方法
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
import { useTweetStatus } from "../contexts/TweetStatusContext";

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

function ProfileLikes() {
  const { currentUser } = useAuth();
  const [tweets, setTweets] = useState([]);
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const { isUserInfoUpdate, setIsUserInfoUpdate } = useTweetStatus();
  const UserId = useParams();
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const { success, data, message } = await getUserLiked(UserId.UserId);
      if (success) {
        // update data
        setTweets(data);
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
        setIsUserInfoUpdate(true);
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
  }, [UserId.UserId, isUserInfoUpdate]);

  const tweetList = tweets.map((tweet) => {
    return (
      <PostItem
        key={tweet.id}
        TweetId={tweet.TweetId}
        UserId={tweet.UserId}
        username={info.name}
        avatar={info.avatar}
        account={info.account}
        description={tweet.Tweet.description}
        isLiked={tweet.Tweet.isLiked}
        updatedAt={tweet.updatedAt}
        createdAt={tweet.createdAt}
        totalLikes={tweet.Tweet.totalLikes}
        totalReplies={tweet.Tweet.totalReplies}
      />
    );
  });

  console.log(info)
  return (
    <Container>
      {loading ? (
        ""
      ) : (
        <MainStyle>
          <LeftContainer>
            {currentUser === null ? (
              ""
            ) : currentUser?.user.id === Number(UserId.UserId) ? (
              <SideBar lightUp={true}/>
            ) : (
              <SideBar />
            )}
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
              />
            )}
            <UserInfoArea
              username={info.name}
              account={info.account}
              UserId={info.UserId}
              totalFollowers={info.followerCounts}
              totalFollowings={info.followingCounts}
              selfIntro={info.introduction}
              coverImage={info.coverImage}
              avatar={info.avatar}
              isFollowed={info.isFollowed}
            ></UserInfoArea>
            <UserMenuTab UserId={UserId.UserId} />
            {tweetList}
          </CenterContainer>
          <RightContainer>
            <PopularUserList />
          </RightContainer>
        </MainStyle>
      )}
    </Container>
  );
}

export default ProfileLikes;
