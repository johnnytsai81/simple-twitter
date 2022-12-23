import SideBar from "../components/SideBar";
import ReplyItem from "../components/Main/ReplyItem";
import UserInfoArea from "../components/Main/UserInfoArea";
import Breadcrumb from "../components/Main/Breadcrumb";
import PopularUserList from "../components/Main/PopularUserList";
import UserMenuTab from "../components/Main/UserMenuTab";
import { useAuth } from "../contexts/AuthContext";
import { getUser, getUserReplied } from "../API/user";

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

function ProfileReply() {
  const [replied, setReplied] = useState([]);
  const [info, setInfo] = useState([]);
  const { currentUser } = useAuth();
  const UserId = useParams();
  useEffect(() => {
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
        setInfo(data);
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
  const replyList = replied.map((reply) => {
    return (
      <ReplyItem
        userAccount={info.account}
        name={info.name}
        UserId={reply.UserId}
        TweetId={reply.TweetId}
        replyAccount={reply.User.account}
        replyName={reply.User.name}
        ReplyId={1}
        // time={"10分鐘"}
        avatar={reply.User.avatar}
        comment={reply.comment}
        createdAt={reply.createdAt}
        // }
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
          <Breadcrumb title={info.name} number={info.Tweets} back={true} />
          <UserInfoArea
            username={info.name}
            account={info.account}
            UserId={info.UserId}
            totalFollowers={info.totalFollowers}
            totalFollowings={info.totalFollowings}
            selfIntro={info.introduction}
            coverImage={info.coverImage}
            avatar={info.avatar}
          ></UserInfoArea>
          <UserMenuTab UserId={UserId.UserId} />
          {replyList}
        </CenterContainer>
        <RightContainer>
          <PopularUserList />
        </RightContainer>
      </MainStyle>
    </Container>
  );
}

export default ProfileReply;
