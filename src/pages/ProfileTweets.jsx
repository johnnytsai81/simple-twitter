import SideBar from "../components/SideBar";
import PostItem from "../components/Main/PostItem";
import UserInfoArea from "../components/Main/UserInfoArea";
import Breadcrumb from "../components/Main/Breadcrumb";
import PopularUserList from "../components/Main/PopularUserList";
import UserMenuTab from "../components/Main/UserMenuTab";
import { useAuth } from "../contexts/AuthContext";
import { getUser,getUserTweets } from "../API/user";

// 載入方法
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

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

function ProfileTweets() {
  const [tweets, setTweets] = useState([]);
  const [info, setInfo] = useState([]);
  const { logout, currentUser } = useAuth();
  const UserId = useParams();
  useEffect(() => {
    async function getData() {
      const { success, data, message } = await getUserTweets(UserId.UserId);
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
        setInfo(data);
      } else {
        // handle error
        console.error(message);
      }
    }
    async function startOrder(){
      await getInfo();
      getData();
    }
    startOrder();
    // eslint-disable-next-line
  }, []);

  const tweetList = tweets.map((tweet) => {
    return (
      <PostItem
        key={tweet.id}
        TweetId={tweet.id}
        UserId={tweet.UserId}
        username={info.name}
        avatar={info.avatar}
        account={info.account}
        description={tweet.description}
        isLiked={tweet.isLiked}
        updatedAt={tweet.updatedAt}
        createdAt={tweet.createdAt}
        // totalLikes={tweet.Likes.totalLikes}
      />
    );
  });


  return (
    <Container>
      <MainStyle>
        <LeftContainer>
          <SideBar logout={logout}/>
        </LeftContainer>
        <CenterContainer>
          {/* back為返回記號 number為推文數 */}
          <Breadcrumb title={info.name} number={info.Tweets} back={true} />

          <UserInfoArea
            username={info.name}
            account={info.account}
            UserId={info.UserId}
            currentUserId={currentUser?.id}
            totalFollowers={info.totalFollowers}
            totalFollowings={info.totalFollowings}
            selfIntro={info.introduction}
            coverImage={info.coverImage}
            avatar={info.avatar}
          ></UserInfoArea>
          <UserMenuTab UserId={UserId.UserId} />
          {tweetList}
        </CenterContainer>
        <RightContainer>
          <PopularUserList/>
        </RightContainer>
      </MainStyle>
    </Container>
  );
}

export default ProfileTweets;
