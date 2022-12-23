import SideBar from "../components/SideBar";
import PostItem from "../components/Main/PostItem";
import TextArea from "../components/Main/TweetTextArea";
import Breadcrumb from "../components/Main/Breadcrumb";
import PopularUserList from "../components/Main/PopularUserList";
import { useAuth } from "../contexts/AuthContext";
import { getAllTweets } from "../API/tweets";

// 引入方法
import { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom'

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

function Main() {
  const [tweets, setTweets] = useState([]);
  const { currentUser } = useAuth();

  // 等做好再加
  // const navigate = useNavigate()
  // const { logout, currentUser, isAuthenticated } = useAuth()

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate('/login')
  //   }
  // }, [])

  useEffect(() => {
    async function getData() {
      const { success, data, message } = await getAllTweets();
      if (success) {
        // update data
        setTweets(data);
      } else {
        // handle error
        console.error(message);
      }
    }
    getData();
    // refresh when add new tweet or reply
  }, []);
  
  const tweetList = tweets.map((tweet) => {
    return (
      <PostItem
        key={tweet.id}
        TweetId={tweet.id}
        UserId={tweet.UserId}
        username={tweet.User.name}
        account={tweet.User.account}
        avatar={tweet.User.avatar}
        description={tweet.description}
        totalLikes={tweet.Likes.totalLikes}
        isLiked={tweet.isLiked}
        totalReplies={tweet.Replies.totalReplies}
        updatedAt={tweet.updatedAt}
        createdAt={tweet.createdAt}
      />
    );
  });

  return (
    <Container>
      <MainStyle>
        <LeftContainer>
          <SideBar/>
        </LeftContainer>
        <CenterContainer>
          {/* back為返回記號 number為推文數 */}
          <Breadcrumb title={"首頁"} number={""} back={false} />
          <TextArea
            currentUserId={currentUser?.id}
            avatar={currentUser?.avatar}
          />
          {tweetList}
        </CenterContainer>
        <RightContainer>
          <PopularUserList />
        </RightContainer>
      </MainStyle>
    </Container>
  );
}

export default Main;
