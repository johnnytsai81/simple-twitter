// 引入方法
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
  let name = props.name;
  let account = props.account;
  let time = props.time;
  let tweet = props.tweet;
  let selfImage = props.selfImage;
  let profileImage = props.profileImage;
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <ModalStyle>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="first-people">
            {profileImage === "" ? (
              <NoImage />
            ) : (
              <img className="avatar" src={profileImage} alt="avatar" />
            )}
            <div className="content">
              <div className="d-flex align-items-center">
                <h3 className="name mb-0">{name}</h3>
                <p className="account mb-0">
                  @{account}・<span className="time">{time}</span>
                </p>
              </div>
              <div className="tweet">{tweet}</div>
              <div className="reply">
                回覆給<span>@{account}</span>
              </div>
            </div>
          </div>
          <div className="reply-people">
            {profileImage === "" ? (
              <NoImage />
            ) : (
              <img className="avatar" src={selfImage} alt="avatar" />
            )}
            <InputStyle placeholder={"推你的回覆"} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="sm" onClick={handleClose}>
            回覆
          </Button>
        </Modal.Footer>
      </ModalStyle>
    </Modal>
  );
}
export default ReplyModal;
