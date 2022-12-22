// 引入方法
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// 引入圖片
import { ReactComponent as LikeIcon } from "../../assets/icons/like-solid.svg";
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icons/reply.svg";

// 引入元件
import ReplyModal from "./ReplyModal";
import relativeTime from "../../utilities/relativeTime";

const CardStyle = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  gap: 1rem;
  border-bottom: 1px solid var(--border-color);
  .avatar {
    width: 50px;
    height: 50px;
    flex: 0 0 50px;
    img {
      border-radius: 50px;
    }
  }
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
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
    .card-footer {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }
`;

const ReplyIconStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--secondary-color);
  cursor: pointer;
  .reply {
    width: 1rem;
    height: 1rem;
  }
`;

const LikeIconStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--secondary-color);
  cursor: pointer;
  .like {
    width: 1rem;
    height: 1rem;
    fill: var(--white-color);
    stroke: var(--secondary-color);
    stroke-width: 2px;
    &.active {
      fill: var(--error-color);
      stroke: var(--error-color);
    }
  }
`;

function PostItem(props) {
  let description = props.description;
  let createdAt = props.createdAt;
  let updatedAt = props.updatedAt;
  let username = props.username;
  let totalLikes = props.totalLikes;
  let totalReplies = props.totalReplies;
  let isLiked = props.isLiked;
  let account = props.account;
  let TweetId = props.TweetId;
  let avatar = props.avatar;
  let UserId = props.UserId;
  const [showLike, setShowLike] = useState(isLiked);
  const [countLike, setCountLike] = useState(totalLikes);
  const [show, setShow] = useState(false);

  // 開啟跟關閉modal
  const handleShow = () => setShow(true);

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
      <NavLink className="avatar" to={`/user/${UserId}/tweet`}>
        {avatar === "" ? <NoImage /> : <img src={avatar} alt="avatar" />}
      </NavLink>
      <div className="card-content">
        <NavLink to={`/user/${UserId}/tweet`}>
          <div className="card-header">
            <h3 className="name mb-0">{username}</h3>
            <p className="account mb-0">
              @{account}・
              <span className="time">{relativeTime(createdAt)}</span>
            </p>
          </div>
        </NavLink>
        <NavLink
          to={{ pathname: `/tweet/${TweetId}/replies` }}
          state={{
            avatar,
            description,
            username,
            account,
            isLiked,
            TweetId,
            updatedAt,
            totalReplies,
            totalLikes,
          }}
        >
          <p className="text-start mb-0">{description}</p>
        </NavLink>
        <div className="card-footer">
          <ReplyIconStyle onClick={handleShow}>
            <ReplyIcon className="reply" />
            <span className="en-font-family">{totalReplies}</span>
          </ReplyIconStyle>
          {showLike ? (
            <LikeIconStyle
              onClick={() => {
                handleShowLike();
                handleCountLike("decrement");
              }}
            >
              <LikeIcon className="like active" />
              <span className="en-font-family">{countLike}</span>
            </LikeIconStyle>
          ) : (
            <LikeIconStyle
              onClick={() => {
                handleShowLike();
                handleCountLike("increment");
              }}
            >
              <LikeIcon className="like" />
              <span className="en-font-family">{countLike}</span>
            </LikeIconStyle>
          )}
        </div>
      </div>
      <ReplyModal
        show={show}
        setShow={setShow}
        avatar={avatar}
        username={username}
        account={account}
        createdAt={createdAt}
        description={description}
      />
    </CardStyle>
  );
}

export default PostItem;
