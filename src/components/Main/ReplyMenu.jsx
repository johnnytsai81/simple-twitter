// 引入方法
import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// 引入圖片
import { ReactComponent as LikeIcon } from "../../assets/icons/like-solid.svg";
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icons/reply.svg";

// 引入元件
import ReplyModal from "./ReplyModal";
import creatTime from "../../utilities/creatTime";
import { likeTweet , dislikeTweet } from "../../API/tweets";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 0.5rem;
  border-bottom: 1px solid var(--border-color);
  .avatar {
    width: 50px;
    height: 50px;
    flex: 0 0 50px;
    img {
      border-radius: 50px;
    }
  }
  .text {
    margin-bottom: 0;
    text-align: start;
    font-size: 1.5rem;
    letter-spacing: 0.03em;
  }
  .time {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--secondary-color);
  }
  .card-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    .card-header {
      display: flex;
    }
    .name {
      font-size: 1rem;
      font-weight: 600;
      margin-right: 0.5rem;
    }
    .account {
      font-size: 0.875rem;
      color: var(--secondary-color);
    }
    .card-header {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .card-footer {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .icon-wrap {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      color: var(--secondary-color);
    }
  }
  .card-footer {
    position: relative;
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    &:before {
      content: "";
      position: absolute;
      height: 1px;
      left: 0;
      width: 100%;
      top: 0;
      background-color: var(--border-color);
    }
    &:after {
      content: "";
      position: absolute;
      height: 1px;
      left: 0;
      width: 100%;
      bottom: 0;
      background-color: var(--border-color);
    }
    .wrap {
      color: var(--secondary-color);
      span {
        font-weight: 600;
        color: var(--dark-color);
        padding-right: 4px;
      }
    }
  }
  .card-icon {
    display: flex;
    gap: 4rem;
    padding-top: 0.5rem;
    .like {
      width: 2rem;
      height: 2rem;
      fill: var(--white-color);
      stroke: var(--secondary-color);
      stroke-width: 2px;
      cursor: pointer;
      &.active {
        fill: var(--error-color);
        stroke: var(--error-color);
      }
    }
    .reply {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }
  }
`;

function ReplyMenu(props) {
  let description = props.description;
  let createdAt = props.createdAt;
  let totalLikes = props.totalLikes;
  let isLiked = props.isLiked;
  let UserId = props.UserId;
  let TweetId = props.TweetId;
  let totalReplies = props.totalReplies;
  let account = props.account;
  let username = props.username;
  let avatar = props.avatar;
  const [showLike, setShowLike] = useState(isLiked);
  const [countLike, setCountLike] = useState(totalLikes);
  const [show, setShow] = useState(false);

  // 開啟跟關閉modal
  const handleShow = () => setShow(true);

  // 上傳愛心狀態
  async function handleLikeClick(type) {
    if (type === "increment") {
      setCountLike(countLike + 1);
      try {
        await likeTweet(TweetId);
      } catch (error) {
        console.error(error);
      }
    }else if (type === "decrement"){
      setCountLike(countLike - 1);
      try {
        await dislikeTweet(TweetId);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // 愛心狀態
  function handleShowLike() {
    setShowLike(!showLike);
  }

  return (
    <CardStyle>
      <div className="card-content">
        <NavLink className="avatar" to={`/user/${UserId}/tweet`}>
          {avatar === null ? <NoImage /> : <img src={avatar} alt="avatar" />}
        </NavLink>
        <div className="card-header">
          <h3 className="name mb-0">{username}</h3>
          <p className="account mb-0">@{account}</p>
        </div>
      </div>
      <p className="text">{description}</p>
      <div className="time">{creatTime(createdAt)}</div>
      <div className="card-footer">
        <div className="wrap">
          <span className="en-font-family">{totalReplies}</span>回覆
        </div>
        <div className="wrap">
          <span className="en-font-family">{countLike}</span>喜歡次數
        </div>
      </div>
      <div className="card-icon">
        <ReplyIcon className="reply" onClick={handleShow} />
        {showLike ? (
          <LikeIcon
            className="like active"
            onClick={() => {
              handleShowLike();
              handleLikeClick("decrement");
            }}
          />
        ) : (
          <LikeIcon
            className="like"
            onClick={() => {
              handleShowLike();
              handleLikeClick("increment");
            }}
          />
        )}
      </div>
      <ReplyModal
        show={show}
        setShow={setShow}
        avatar={avatar}
        username={username}
        account={account}
        createdAt={createdAt}
        description={description}
        TweetId={TweetId}
      />
    </CardStyle>
  );
}

export default ReplyMenu;
