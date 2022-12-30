import SideBar from "../components/SideBar";
import ReplyItem from "../components/Main/ReplyItem";
import Breadcrumb from "../components/Main/Breadcrumb";
import PopularUserList from "../components/Main/PopularUserList";
import ReplyMenu from "../components/Main/ReplyMenu";
import { getAllReplies, getAllTweets } from "../API/tweets";
import { useTweetStatus } from "../contexts/TweetStatusContext";

// 引入方法
import styled from "styled-components";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

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

function ReplyPage() {
  const [replies, setReplies] = useState([]);
  const [menu, setMenu] = useState([]);
  const TweetId = useParams();
  const { isReplyTweetUpdate, setIsReplyTweetUpdate } = useTweetStatus();
  useEffect(() => {
    async function getData() {
      const { success, data, message } = await getAllReplies(TweetId.TweetId);
      if (success) {
        // update data
        setReplies(data);
        setIsReplyTweetUpdate(true)
      } else {
        // handle error
        console.error(message);
      }
    }
    async function getMenu() {
      const { success, data, message } = await getAllTweets();
      if (success) {
        // update data
        setMenu(data.tweets);
      } else {
        // handle error
        console.error(message);
      }
    }
    async function startOrder(){
      await getMenu();
      getData();
    }
    startOrder()
    // eslint-disable-next-line
  }, [isReplyTweetUpdate]);

  const replyList = replies.map((reply) => {
    const filter = menu.filter(item => item.id === Number(TweetId.TweetId))
    return (
      <ReplyItem
        key={reply.id}
        avatar={reply.User.avatar}
        name={reply.User.name}
        UserId={reply.UserId}
        replyAccount={reply.User.account}
        userAccount={filter[0].User.account}
        ReplyId={filter[0].User.id}
        comment={reply.comment}
        updatedAt={reply.updatedAt}
        createdAt={reply.createdAt}
      />
    );
  });

  // 只要此貼文的資料
  const filter = menu.filter(item => item.id === Number(TweetId.TweetId))

  const replyMenu = filter.map((item) => {
    return (
      <ReplyMenu
        key={filter[0].id}
        username={filter[0].User.name}
        UserId={filter[0].User.id}
        account={filter[0].User.account}
        avatar={filter[0].User.avatar}
        totalReplies={filter[0].totalReplies}
        totalLikes={filter[0].totalLikes}
        isLiked={filter[0].isLiked}
        description={filter[0].description}
        createdAt={filter[0].createdAt}
        TweetId={TweetId.TweetId}
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
          <Breadcrumb title={"推文"} number={""} back={true} />
          {replyMenu}
          {replyList}
        </CenterContainer>
        <RightContainer>
          <PopularUserList />
        </RightContainer>
      </MainStyle>
    </Container>
  );
}

export default ReplyPage;
