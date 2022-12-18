// 引入方法
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

// 引入圖片
import { CloseOrangeIcon } from "../../../assets/icons";
import { MdOutlineCameraEnhance } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { ReactComponent as NoImage } from "../../../assets/icons/no-image.svg";

// 引入元件
import AuthInput from "../../../components/AccountForm/AuthInput";
import { AuthInputContainer } from "../../../components/common/auth.styled";
import IntroductionInput from "../../../components/common/IntroductionInput";

const ModalStyle = styled.div`
  .modal-header {
    gap: 2rem;
    .title-wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .modal-body {
    padding: 0;
    .user-edit-area {
      position: relative;
    }
    .background {
      position: absolute;
      width: 100%;
      height: 200px;
      filter: opacity(80%);
    }
    .background-icon-wrap {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      height: 200px;
      .background-icon {
        width: 25px;
        height: 25px;
        color: var(--white-color);
      }
    }
    .avatar-wrap {
      position: absolute;
      top: 130px;
      left: 1rem;
      &::before {
        content: "";
        position: absolute;
        height: 140px;
        width: 140px;
        border: 4px solid var(--white-color);
        border-radius: 100px;
        z-index: 2;
      }
      .avatar {
        height: 140px;
        width: 140px;
        border-radius: 100px;

        filter: brightness(70%);
      }
      .avatar-icon {
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        width: 25px;
        height: 25px;
        color: var(--white-color);
      }
    }
    .account {
      color: var(--secondary-color);
      font-size: 0.875rem;
    }
    .card-header {
      display: flex;
      width: 100%;
      .btn-primary {
        margin-left: auto;
      }
    }
    .card-body {
      padding: 1.5rem 1rem 0.75rem 1rem;
    }
    .card-footer {
      padding: 0 1rem 1rem 1rem;
      .text-wrap {
        display: flex;
        gap: 2rem;
        a {
          color: var(--secondary-color) !important;
        }
      }
    }
  }
`;

// 包住authInput的區塊
const InputContainer = styled.div`
  width: 100%;
  margin: 50px 0 0 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .input {
    width: 100%;
  }
  .caption {
    font-size: 0.75rem;
    color: var(--secondary-color);
    margin-top: 0.5rem;
    text-align: end;
  }
`;

const ProfileEditModal = (props) => {
  let show = props.show;
  let setShow = props.setShow;
  let selfImage = props.selfImage;
  let coverImage = props.coverImage;
  const handleClose = () => setShow(false);

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <ModalStyle>
        <Modal.Header>
          <CloseOrangeIcon style={{ cursor: "pointer" }} />
          <div className="title-wrap">
            <Modal.Title>編輯個人資料</Modal.Title>
            <Button variant="primary" size="sm" onClick={handleClose}>
              儲存
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="user-edit-area">
            <img className="background" src={coverImage} alt="background" />
            <div className="background-icon-wrap">
              {/* 相機icon */}
              <MdOutlineCameraEnhance className="background-icon" />
              {/* 叉叉icon */}
              <IoMdClose className="background-icon" />
            </div>
            <div className="avatar-wrap">
              {selfImage === "" ? (
                <NoImage />
              ) : (
                <img className="avatar" src={selfImage} alt="avatar" />
              )}
              {/* 相機icon */}
              <MdOutlineCameraEnhance className="avatar-icon" />
            </div>
          </div>

          <InputContainer>
            <AuthInputContainer className="input">
              <AuthInput
                label="名稱"
                placeholder="請輸入名稱"
                value="John Doe"
              />
              <div className="caption">8/50</div>
            </AuthInputContainer>
            <AuthInputContainer className="input">
              <IntroductionInput
                label="自我介紹"
                placeholder="請輸入自我介紹"
                value="John Doe"
              />
              <div className="caption">0/160</div>
            </AuthInputContainer>
          </InputContainer>
        </Modal.Body>
      </ModalStyle>
    </Modal>
  );
};

export default ProfileEditModal;
