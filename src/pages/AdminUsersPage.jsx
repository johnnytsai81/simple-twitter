import AdminSideBar from "../components/SideBar/AdminSideBar";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import AdminUserItem from "../components/Main/AdminUserItem";
import { useEffect, useState } from "react";
import { getAllUsers2 } from "../API/user";

// main區塊
const MainStyle = styled.div`
  display: flex;
`;
// sidebar區塊
const LeftContainer = styled.div`
  flex: 5 1 0;
  padding: 1rem;
  min-height: 100vh;
  border-right: 1px solid #e6ecf0;
  display: flex;
  flex-flow: column;
`;

// 使用者列表區塊
const UserContainer = styled.div`
  border-right: 1px solid #e6ecf0;
  width: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: start;
`;

// 使用者列表下方的border-line
const BorderLine = styled.div`
  width: 100%;
  border-top: 1px solid #e6ecf0;
`;

const CardArea = styled.div`
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  flex-direction: row;
  flex-wrap: wrap;
`;



const AdminUsersPage = () => {
  const [ userItems, setUserItems ] = useState([])

  useEffect(() => {
    const getAllUsersAsync = async () => {
      try {
        const userItems = await getAllUsers2()
        setUserItems(
          userItems.map((userItem) => ({
          ...userItem,
        })),
        )
      } catch (error) {
        console.error(error);
      }
    }
    getAllUsersAsync()
  },[])

  const UsersList = ({ userItems }) => {
    return (
      userItems.map((userItem) => {
        return (
          <AdminUserItem
            key={userItem.id}
            id={userItem.id}
            coverImage={userItem.coverImage}
            avatar={userItem.avatar}
            username={userItem.name}
            account={userItem.account}
            totalTweets={userItem.totalTweets}
            totalLikes={userItem.totalLikes}
            followings={userItem.followingCount}
            followers={userItem.followerCount}
          />
        );
      })
    )
  }

  return (
    <Container>
      <MainStyle>
        {/* 左側sidebar */}
        <LeftContainer>
          <AdminSideBar />
        </LeftContainer>

        {/* 中間-右側的使用者列表 */}
        <UserContainer>
          <h3 style={{ margin: "20px" }}>使用者列表</h3>
          <BorderLine />
          <CardArea>
            <UsersList userItems={userItems} />
          </CardArea>
        </UserContainer>
      </MainStyle>
    </Container>
  );
};

export default AdminUsersPage;
