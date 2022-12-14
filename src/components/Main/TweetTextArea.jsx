// 引入方法
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useState, useMemo } from "react";
import { addTweet } from "../../API/tweets";
import { Toast } from "../../utilities/sweetalert";
import { useTweetStatus } from "../../contexts/TweetStatusContext";

// 引入圖片
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";

const CardStyle = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  gap: 1rem;
  border-bottom: 10px solid var(--border-color);
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    flex: 0 0 50px;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    padding-top: 0.75rem;
    input {
    }
    .btn-primary {
      width: fit-content;
      margin-left: auto;
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
  }
`;

const StyledInput = styled.textarea`
  outline: none;
  border: none;
  background-color: var(--white-color);
  border-radius: 0px;
  resize: none;
`;

function TextArea(props) {
  const [tweet, setTweet] = useState("");
  const [tweetCount, setTweetCount] = useState(0);
  const { setIsGlobalTweetUpdate } = useTweetStatus();
  let avatar = props.avatar;
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
        Toast.fire({
          title: "推文發送成功",
          icon: "success",
        });
      } else {
        setTweet("");
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
    <CardStyle>
      {avatar === null ? (
        <NoImage className="avatar" />
      ) : (
        <img className="avatar" src={avatar} alt="avatar" />
      )}
      <div className="card-content">
        <StyledInput
          value={tweet}
          placeholder={"有什麼新鮮事？"}
          onChange={(e) => {
            setTweet(e.target.value);
            setTweetCount(e.target.value.length || "");
          }}
        />
        {tweetCount > 140 ? (
          <div className="d-flex justify-content-between align-items-center">
            <p className="alert-text">字數不可超過140字</p>
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
          <Button
            variant="primary"
            size="sm"
            onClick={handleClick}
            disabled={!isValid}
          >
            推文
          </Button>
        )}
      </div>
    </CardStyle>
  );
}

export default TextArea;
