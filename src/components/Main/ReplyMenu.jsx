// 引入方法
import styled from "styled-components";
import { useState } from "react";

// 引入圖片
import { ReactComponent as LikeIcon } from "../../assets/icons/like-solid.svg";
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icons/reply.svg";

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
      &.active {
        fill: var(--error-color);
        stroke: var(--error-color);
      }
    }
    .reply {
      width: 2rem;
      height: 2rem;
    }
  }
`;

function ReplyMenu(props) {
  let tweet = props.tweet;
  let time = props.time;
  let like = props.like;
  let likeActive = props.likeActive;
  let reply = props.reply;
  let username = props.username;
  let userAccount = props.userAccount;
  const [showLike, setShowLike] = useState(likeActive);
  const [countLike, setCountLike] = useState(like);

  // 愛心狀態
  function handleShowLike() {
    setShowLike(!showLike);
  }

  // 愛心數量
  function handleCountLike(type) {
    if (type === "increment") {
      setCountLike(countLike + 1);
    }
    if (type === "decrement") {
      setCountLike(countLike - 1);
    }
  }

  return (
    <CardStyle>
      <div className="card-content">
        <NoImage className="avatar" />
        <div className="card-header">
          <h3 className="name mb-0">{username}</h3>
          <p className="account mb-0">@{userAccount}</p>
        </div>
      </div>
      <p className="text">{tweet}</p>
      <div className="time">{time}</div>
      <div className="card-footer">
        <div className="wrap">
          <span className="en-font-family">{reply}</span>回覆
        </div>
        <div className="wrap">
          <span className="en-font-family">{countLike}</span>喜歡次數
        </div>
      </div>
      <div className="card-icon">
        <ReplyIcon className="reply" />
        {showLike ? (
          <LikeIcon
            className="like active"
            onClick={() => {
              handleShowLike();
              handleCountLike("decrement");
            }}
          />
        ) : (
          <LikeIcon
            className="like"
            onClick={() => {
              handleShowLike();
              handleCountLike("increment");
            }}
          />
        )}
      </div>
    </CardStyle>
  );
}

export default ReplyMenu;
