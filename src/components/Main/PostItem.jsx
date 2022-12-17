// 引入方法
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// 引入圖片
import { ReactComponent as LikeIcon } from "../../assets/icons/like-solid.svg";
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icons/reply.svg";

const CardStyle = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  gap: 1rem;
  border-bottom: 1px solid var(--border-color);
  .avatar {
    width: 50px;
    height: 50px;
    flex: 0 0 50px;
    img{
      border-radius: 50px;
    }
  }
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
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
    .like {
      width: 1rem;
      height: 1rem;
      fill: var(--white-color);
      stroke: var(--secondary-color);
      stroke-width: 2px;
      &[data-active="true"] {
        fill: var(--error-color);
        stroke: var(--error-color);
      }
    }
    .reply {
      width: 1rem;
      height: 1rem;
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
`;

function PostItem(props) {
  let tweet = props.tweet;
  let time = props.time;
  let name = props.name;
  let like = props.like;
  let likeActive = props.likeActive;
  let reply = props.reply;
  let account = props.account;
  let TweetId = props.TweetId;
  let profileImage = props.profileImage;
  let UserId = props.UserId;
  return (
    <CardStyle>
      <NavLink className="avatar" to={`/user/${UserId}/tweet`}>
        {profileImage === '' ? (<NoImage/>) : (<img src={profileImage} alt="avatar"/>)}
      </NavLink>
      <div className="card-content">
        <NavLink to={`/user/${UserId}/tweet`}>
          <div className="card-header">
            <h3 className="name mb-0">{name}</h3>
            <p className="account mb-0">
              @{account}・<span className="time">{time}</span>
            </p>
          </div>
        </NavLink>
        <NavLink to={`/tweet/${TweetId}/replies`}>
          <p className="text-start mb-0">{tweet}</p>
        </NavLink>
        <div className="card-footer">
          <div className="icon-wrap">
            <ReplyIcon className="reply" />
            <span className="en-font-family">{reply}</span>
          </div>
          <div className="icon-wrap">
            <LikeIcon className="like" data-active={likeActive} />
            <span className="en-font-family">{like}</span>
          </div>
        </div>
      </div>
    </CardStyle>
  );
}

export default PostItem;
