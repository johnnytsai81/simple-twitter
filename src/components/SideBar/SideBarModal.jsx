// 引入方法
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useState, useMemo } from "react";
import Modal from "react-bootstrap/Modal";
import { addTweet } from "../../API/tweets";
import { Toast } from "../../utilities/sweetalert";
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
  .alert-text {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--error-color);
    font-size: 0.75rem;
    margin-bottom: 0;
    text-align: start;
    &::before {
      content: "";
      display: block;
      position: relative;
      width: 1rem;
      height: 1rem;
      mask-size: 1rem;
      mask-repeat: no-repeat;
      background-color: var(--error-color);
      mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E");
    }
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

function SideBarModal(props) {
  let show = props.show;
  let setShow = props.setShow;
  let avatar = props.avatar;
  const [tweet, setTweet] = useState("");
  const [tweetCount, setTweetCount] = useState(0);
  const { setIsGlobalTweetUpdate } = useTweetStatus();
  const handleClose = () => setShow(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (tweet.length === 0) {
      return;
    }

    try {
      const postStatus = await addTweet(tweet.trim());
      if (postStatus.postedTweet) {
        setTweet("");
        setIsGlobalTweetUpdate(false);
        setShow(false);
        Toast.fire({
          title: "推文發送成功",
          icon: "success",
        });
      } else {
        setTweet("");
        setShow(false);
        Toast.fire({
          title: "推文發送失敗",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
      Toast.fire({
        title: "推文發送錯誤",
        icon: "error",
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
          <div className="reply-people">
            {avatar === null ? (
              <NoImage />
            ) : (
              <img className="avatar" src={avatar} alt="avatar" />
            )}
            <InputStyle
              value={tweet}
              placeholder={"有什麼新鮮事？"}
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
              <p className="alert-text me-4">字數不可超過140字</p>
              <Button
                variant="primary"
                size="sm"
                onClick={handleClick}
                disabled={!isValid}
              >
                推文
              </Button>
            </div>
          ) : (
            <div className="d-flex w-100 justify-content-end align-items-center">
              <p className="alert-text me-4" style={{visibility: tweetCount > 0 && "hidden"}}>內容不可空白</p>
              <Button
                variant="primary"
                size="sm"
                onClick={handleClick}
                disabled={!isValid}
              >
                推文
              </Button>
            </div>
          )}
        </Modal.Footer>
      </ModalStyle>
    </Modal>
  );
}
export default SideBarModal;
