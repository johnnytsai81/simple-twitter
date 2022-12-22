// 引入方法
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// 引入圖片
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";

// 引入元件
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
    .reply-account span {
      color: var(--main-color);
    }
  }
`;

function ReplyItem(props) {
  let comment = props.comment;
  let createdAt = props.createdAt;
  let name = props.name;
  let userAccount = props.userAccount;
  let replyAccount = props.replyAccount;
  let avatar = props.avatar;
  let UserId = props.UserId;
  let TweetId = props.TweetId;
  let ReplyId = props.ReplyId;
  return (
    <CardStyle>
      <NavLink className="avatar" to={`/user/${UserId}/tweet`}>
        {avatar === "" ? <NoImage /> : <img src={avatar} alt="avatar" />}
      </NavLink>
      <div className="card-content">
        <NavLink to={`/user/${UserId}/tweet`}>
          <div className="card-header">
            <h3 className="name mb-0">{name}</h3>
            <p className="account mb-0">
              @{replyAccount}・
              <span className="time">{relativeTime(createdAt)}</span>
            </p>
          </div>
        </NavLink>
        <NavLink to={`/user/${ReplyId}/tweet`}>
          <p className="reply-account mb-0">
            回覆<span>@{userAccount}</span>
          </p>
        </NavLink>
        <NavLink to={`/tweet/${TweetId}/replies`}>
          <p className="text-start mb-0">{comment}</p>
        </NavLink>
      </div>
    </CardStyle>
  );
}

export default ReplyItem;
