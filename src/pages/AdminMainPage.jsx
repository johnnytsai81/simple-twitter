import styled from "styled-components";
import AdminSideBar from "../components/SideBar/AdminSideBar";
import Container from "react-bootstrap/Container";
import AdminPostItem from "../components/Main/AdminPostItem";
import { useEffect, useState } from "react";
import { deleteTweet2, getAllTweets2 } from "../API/tweets";

// main區塊
const MainStyle = styled.div`
  display: flex;
`;
// sidebar區塊
const LeftContainer = styled.div`
  flex: 5 1 0;
  width: 178px;
  padding: 1rem;
  min-height: 100vh;
  border-right: 1px solid #e6ecf0;
  display: flex;
  flex-flow: column;
`;

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

// 推文清單下方的border-line
const BorderLine = styled.div`
  width: 100%;
  border-top: 1px solid #e6ecf0;
`;

const AdminMainPage = () => {
  const [postItems, setPostItems] = useState([]);

  const handleDeletePostItems = async (id) => {
    try {
      await deleteTweet2(id)
      setPostItems((prePostItems) => {
        return prePostItems.filter((postItem) => postItem.id !== id);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const getUsersPostItemsAsync = async () => {
      try {
        const postItems = await getAllTweets2();
        setPostItems(
          postItems.map((postItem) => ({
            ...postItem,
          })),

        );
      } catch (error) {
        console.error(error);
      }
    };
    getUsersPostItemsAsync();
  }, []);

  const PostList = ({ postItems, onDelete }) => {
    return postItems.map((postItem) => {
      return (
        <AdminPostItem
          key={postItem.id}
          id={postItem.id}
          avatar={postItem.User.avatar}
          account={postItem.User.account}
          username={postItem.User.name}
          description={postItem.description}
          time={postItem.createdAt}
          postItem={postItem}
          onDelete={(id) => onDelete?.(id)}
        />
      );
    });
  };

  return (
    <Container>
      {/* 左側sidebar */}
      <MainStyle>
        <LeftContainer>
          <AdminSideBar />
        </LeftContainer>

        {/* 中間-右側的推文清單 */}
        <UserContainer>
          <h3 style={{ margin: "20px" }}>推文清單</h3>
          <BorderLine />
          <PostList postItems={postItems} onDelete={handleDeletePostItems} />
        </UserContainer>
      </MainStyle>
    </Container>
  );
};

export default AdminMainPage;
