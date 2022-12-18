// 引入方法
import styled from "styled-components";
import PopularUserItem from "./PopularUserItem";

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
  return (
    <CardStyle>
      <h3>推薦跟隨</h3>
      <PopularUserItem
        name={"PizzaHut"}
        account={"pizzahut"}
        UserId={1}
        profileImage={"https://i.imgur.com/w0BeCel.jpg"}
        isFollowed={false}
      />
      <PopularUserItem
        name={"Mac"}
        account={"mac"}
        UserId={1}
        profileImage={""}
        isFollowed={false}
      />
      <PopularUserItem
        name={"Pizza Hut"}
        account={"pizzahut"}
        UserId={1}
        profileImage={"https://imgur.com/8R1V7JG.jpg"}
        isFollowed={false}
      />
      <PopularUserItem
        name={"Pizza Hut xxx xxxx"}
        account={"pizzahut"}
        UserId={1}
        profileImage={""}
        isFollowed={false}
      />
      <PopularUserItem
        name={"Pizza Hut xxx xxxx"}
        account={"pizzahut"}
        UserId={1}
        profileImage={""}
        isFollowed={false}
      />
    </CardStyle>
  );
}

export default PopularUserList;
