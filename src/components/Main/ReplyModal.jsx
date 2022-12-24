// 引入方法
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useMemo } from "react";
import Swal from "sweetalert2";
import { replyTweet } from "../../API/tweets";
import { useAuth } from "../../contexts/AuthContext";
import relativeTime from "../../utilities/relativeTime";
import { useTweetStatus } from "../../contexts/TweetStatusContext";

// 引入圖片
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";

const ModalStyle = styled.div`
  .btn-close {
    position: relative;
    display: block;
    width: 1rem;
    height: 1rem;
    background-size: 1rem 1rem;
    opacity: 1;
    margin: 0;
    padding: 0;
    &:hover {
      opacity: 0.5;
    }
  }
  .first-people {
    position: relative;
    display: flex;
    gap: 1rem;
    &:before {
      content: "";
      position: absolute;
      top: 58px;
      left: 24px;
      width: 2px;
      height: calc(100% - 58px);
      background-color: var(--border-color);
    }
    .avatar {
      width: 50px;
      height: 50px;
      flex: 0 0 50px;
      border-radius: 50px;
    }
    .content {
      flex: 1 1 0;
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      .name {
        font-size: 1rem;
        font-weight: 600;
        margin-right: 0.5rem;
      }
      .account {
        font-size: 0.875rem;
        color: var(--secondary-color);
      }
      .reply {
        font-size: 0.875rem;
        color: var(--secondary-color);
        span {
          color: var(--main-color);
          margin-left: 0.25rem;
        }
      }
    }
  }
  .reply-people {
    position: relative;
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    .avatar {
      width: 50px;
      height: 50px;
      flex: 0 0 50px;
      border-radius: 50px;
    }
  }
  .modal-footer {
    border-top: none;
  }
`;

const InputStyle = styled.textarea`
  margin-top: 0.75rem;
  padding: 0;
  outline: none;
  border: none;
  background-color: var(--white-color);
  border-radius: 0px;
  width: 100%;
  min-height: 100px;
  resize: none;
`;

function ReplyModal(props) {
  let show = props.show;
  let setShow = props.setShow;
  let username = props.username;
  let account = props.account;
  let createdAt = props.createdAt;
  let description = props.description;
  let avatar = props.avatar;
  let TweetId = props.TweetId;
  const [tweet, setTweet] = useState("");
  const [tweetCount, setTweetCount] = useState(0);
  const { setIsReplyTweetUpdate } = useTweetStatus();
  const { currentUser } = useAuth();
  const handleClose = () => setShow(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (tweet.length === 0) {
      return;
    }

    try {
      const postStatus = await replyTweet(TweetId, tweet.trim());
      if (postStatus.data) {
        setTweet("");
        setIsReplyTweetUpdate(false);
        setShow(false);
        Swal.fire({
          position: "top",
          title: "發送成功",
          timer: 1000,
          icon: "success",
          showConfirmButton: false,
        });
      } else {
        setTweet("");
        setShow(false);
        Swal.fire({
          position: "top",
          title: "發送失敗",
          timer: 1000,
          icon: "error",
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "top",
        title: "發送錯誤",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      setTweet("");
      setShow(false);
    }
  };

  // 表單限制
  const isValid = useMemo(() => {
    if (!tweet || tweet.length > 140) {
      return false;
    }

    return true;
  }, [tweet]);

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <ModalStyle>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="first-people">
            {avatar === null ? (
              <NoImage />
            ) : (
              <img className="avatar" src={avatar} alt="avatar" />
            )}
            <div className="content">
              <div className="d-flex align-items-center">
                <h3 className="name mb-0">{username}</h3>
                <p className="account mb-0">
                  @{account}・
                  <span className="time">{relativeTime(createdAt)}</span>
                </p>
              </div>
              <div className="tweet">{description}</div>
              <div className="reply">
                回覆給<span>@{account}</span>
              </div>
            </div>
          </div>
          <div className="reply-people">
            {avatar === null ? (
              <NoImage />
            ) : (
              <img className="avatar" src={currentUser?.avatar} alt="avatar" />
            )}
            <InputStyle
              placeholder={"推你的回覆"}
              value={tweet}
              onChange={(e) => {
                setTweet(e.target.value);
                setTweetCount(e.target.value.length || "");
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {tweetCount > 140 ? (
            <div className="d-flex w-100 justify-content-end align-items-center">
              <label
                className="alert-text"
                style={{
                  color: "red",
                  fontSize: "0.75rem",
                  marginRight: "1rem",
                }}
              >
                字數不可超過140字
              </label>
              <Button
                variant="primary"
                size="sm"
                onClick={handleClick}
                disabled={!isValid}
              >
                回覆
              </Button>
            </div>
          ) : (
            <div className="d-flex w-100 justify-content-end align-items-center">
              <label
                className="alert-text"
                style={{
                  color: "red",
                  fontSize: "0.75rem",
                  marginRight: "1rem",
                  visibility: tweetCount > 0 && "hidden",
                }}
              >
                內容不可空白
              </label>
              <Button
                variant="primary"
                size="sm"
                onClick={handleClick}
                disabled={!isValid}
              >
                回覆
              </Button>
            </div>
          )}
        </Modal.Footer>
      </ModalStyle>
    </Modal>
  );
}
export default ReplyModal;
