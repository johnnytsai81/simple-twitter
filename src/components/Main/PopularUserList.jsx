// 引入方法
import styled from "styled-components";
import PopularUserItem from "./PopularUserItem";
import { getTop10Users } from "../../API/user";
import { useState, useEffect } from "react";

// 引入圖片

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  background-color: var(--light-color);
  border-radius: 8px;
  > h3 {
    position: relative;
    margin-bottom: 0;
    &::before {
      content: "";
      position: absolute;
      left: -1rem;
      bottom: -1rem;
      width: calc(100% + 2rem);
      height: 1px;
      background: var(--border-color);
    }
  }
`;

function PopularUserList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function getData() {
      const { success, data, message } = await getTop10Users();
      if (success) {
        // update data
        setTweets(data.data.topUsers);
      } else {
        // handle error
        console.error(message);
      }
    }
    getData();
    // eslint-disable-next-line
  }, []);

  const tweetList = tweets.map((tweet) => {
    return (
      <PopularUserItem
        key={tweet.id}
        username={tweet.name}
        account={tweet.account}
        UserId={tweet.id}
        avatar={tweet.avatar}
        isFollowed={tweet.isFollowed}
        updatedAt={tweet.updatedAt}
        createdAt={tweet.createdAt}
      />
    );
  });

  return (
    <CardStyle>
      <h3>推薦跟隨</h3>
      {tweetList}
    </CardStyle>
  );
}

export default PopularUserList;
