import SideBar from "../components/SideBar";
import ReplyItem from "../components/Main/ReplyItem";
import UserInfoArea from "../components/Main/UserInfoArea";
import Breadcrumb from "../components/Main/Breadcrumb";
import PopularUserList from "../components/Main/PopularUserList";
import UserMenuTab from "../components/Main/UserMenuTab";
import { getUser, getUserReplied } from "../API/user";

// 載入方法
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
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

function ProfileReply() {
  const [replied, setReplied] = useState([]);
  const { currentUser } = useAuth();
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const UserId = useParams();
  const { isUserInfoUpdate, setIsUserInfoUpdate } = useTweetStatus();
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const { success, data, message } = await getUserReplied(UserId.UserId);
      if (success) {
        // update data
        setReplied(data);
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

  const replyList = replied.map((reply) => {
    return (
      <ReplyItem
        userAccount={reply.Tweet.User.ownerAccount}
        name={info.name}
        UserId={reply.UserId}
        TweetId={reply.TweetId}
        replyAccount={reply.User.account}
        replyName={reply.User.name}
        ReplyId={reply.Tweet.User.id}
        avatar={reply.User.avatar}
        comment={reply.comment}
        createdAt={reply.createdAt}
      />
    );
  });
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
              <SideBar lightUp={true} />
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
            {replyList}
          </CenterContainer>
          <RightContainer>
            <PopularUserList />
          </RightContainer>
        </MainStyle>
      )}
    </Container>
  );
}

export default ProfileReply;
