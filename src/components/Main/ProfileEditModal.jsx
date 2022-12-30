// 引入方法
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { useState, useRef, useEffect, useMemo } from "react";

// 引入圖片
import { CloseOrangeIcon } from "../../assets/icons";
import { MdOutlineCameraEnhance } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";
import noBg from "../../assets/images/no-bg.jpg";

// 引入元件
import AuthInput from "../AccountForm/AuthInput";
import { AuthInputContainer } from "../common/auth.styled";
import IntroductionInput from "../common/IntroductionInput";
import useUpdateUser from "../../hooks/useUpdateUser";
import { useTweetStatus } from "../../contexts/TweetStatusContext";

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
      position: relative;
      width: 100%;
      height: 200px;
      filter: opacity(80%);
      object-fit: cover;
      cursor: pointer;
    }
    .background-icon-wrap {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      pointer-event: none;
      height: 200px;
      width: 100%;
      top: 0;
      pointer-events: none;

      .background-icon {
        width: 25px;
        height: 25px;
        color: var(--white-color);
        cursor: pointer;
      }
    }
    .avatar-wrap {
      position: absolute;
      top: 130px;
      left: 1rem;
      pointer-event: none;
      &::before {
        content: "";
        position: absolute;
        height: 140px;
        width: 140px;
        border: 4px solid var(--white-color);
        border-radius: 100px;
        pointer-events: none;
        z-index: 2;
      }
      .avatar {
        height: 140px;
        width: 140px;
        border-radius: 100px;
        object-fit: cover;
        cursor: pointer;
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
        cursor: pointer;
        pointer-events: none;
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
  .input {
    width: 100%;
    .caption {
      font-size: 0.75rem;
      color: var(--secondary-color);
      text-align: end;
    }

    &.active .caption {
      color: var(--error-color);
    }
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

const ProfileEditModal = (props) => {
  let show = props.show;
  let setShow = props.setShow;
  let avatarOri = props.avatarOri;
  let coverImageOri = props.coverImageOri;
  const coverRef = useRef();
  const { currentUser } = useAuth();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  // eslint-disable-next-line
  const [nameCount, setNameCount] = useState("");
  // eslint-disable-next-line
  const [introductionCount, setIntroductionCount] = useState("");
  const { setIsUserInfoUpdate } = useTweetStatus();
  const [avatar, setAvatar] = useState(avatarOri);
  const [coverImage, setCoverImage] = useState(coverImageOri);
  const [avatarAddress, setAvatarAddress] = useState(avatar);
  const [coverAddress, setCoverAddress] = useState(coverImage);
  const { isUpdating, updateUser } = useUpdateUser();

  const handleSubmit = async () => {
    await updateUser(
      {
        coverImage,
        avatar,
        name,
        introduction,
      },
      id
    );
    setIsUserInfoUpdate(false);
    handleClose();
  };

  // 表單限制
  const isValid = useMemo(() => {
    if (!name || name.length > 50) {
      return false;
    }

    if (!introduction || introduction.length > 130) {
      return false;
    }

    return true;
  }, [name, introduction]);

  // 匯入user資料
  useEffect(() => {
    if (!currentUser) return;
    setId(currentUser?.user.id);
    setName(currentUser?.user.name);
    setIntroduction(currentUser?.user.introduction);
    setNameCount(!currentUser.user.name ? 0 :  currentUser.user.name.length);
    setIntroductionCount(!currentUser.user.introduction ? 0 : currentUser.user.introduction.length);
  }, [currentUser, show]);

  // 換圖片
  const handleImgChange = (e, type) => {
    if (isUpdating) {
      return;
    }

    const selectedFile = e.target.files[0];
    const objectUrl = URL.createObjectURL(selectedFile);
    console.log(objectUrl);
    // console.log(e.target.files[0]);
    if (type === "cover") {
      setCoverImage(selectedFile);
      setCoverAddress(objectUrl);
    } else if (type === "avatar") {
      setAvatar(selectedFile);
      setAvatarAddress(objectUrl);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <ModalStyle>
        <Modal.Header>
          <CloseOrangeIcon
            style={{ cursor: "pointer" }}
            onClick={handleClose}
          />
          <div className="title-wrap">
            <Modal.Title>編輯個人資料</Modal.Title>
            <Button
              variant="primary"
              size="sm"
              disabled={!isValid}
              onClick={() => {
                handleSubmit();
              }}
            >
              {isUpdating ? "處理中..." : "儲存"}
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="user-edit-area">
            {coverAddress === null ? (
              <label className="w-100" htmlFor={isUpdating ? "" : "cover"}>
                <img className="background" src={noBg} alt="background" />
                <input
                  ref={coverRef}
                  type="file"
                  id="cover"
                  onChange={(e) => handleImgChange(e, "cover")}
                  style={{
                    display: "none",
                  }}
                />
              </label>
            ) : (
              <label className="w-100" htmlFor={isUpdating ? "" : "cover"}>
                <img
                  className="background"
                  src={coverAddress}
                  alt="background"
                />
                <input
                  ref={coverRef}
                  type="file"
                  id="cover"
                  onChange={(e) => handleImgChange(e, "cover")}
                  style={{
                    display: "none",
                  }}
                />
              </label>
            )}

            <div className="background-icon-wrap">
              {/* 相機icon */}
              <MdOutlineCameraEnhance className="background-icon" />
              {/* 叉叉icon */}
              <IoMdClose
                className="background-icon"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="avatar-wrap">
              {avatarAddress === null ? (
                <label htmlFor={isUpdating ? "" : "avatar"}>
                  <NoImage className="avatar" />
                  <input
                    ref={coverRef}
                    type="file"
                    id="avatar"
                    onChange={(e) => handleImgChange(e, "avatar")}
                    style={{
                      display: "none",
                    }}
                  />
                </label>
              ) : (
                <label htmlFor={isUpdating ? "" : "avatar"}>
                  <img className="avatar" src={avatarAddress} alt="" />
                  <input
                    ref={coverRef}
                    type="file"
                    id="avatar"
                    onChange={(e) => handleImgChange(e, "avatar")}
                    style={{
                      display: "none",
                    }}
                  />
                </label>
              )}
              {/* 相機icon */}
              <MdOutlineCameraEnhance className="avatar-icon" />
            </div>
          </div>

          <InputContainer>
            {nameCount > 50 ? (
              <AuthInputContainer
                className="input active"
                style={{ borderBottom: "unset" }}
              >
                <AuthInput
                  label="名稱"
                  placeholder="請輸入名稱"
                  value={name || ""}
                  onChange={(e) => {
                    setName(e);
                    setNameCount(e.length || "");
                  }}
                />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className="alert-text">名稱不能多於 50 個字</p>
                  <div className="caption">{nameCount}/50</div>
                </div>
              </AuthInputContainer>
            ) : (
              <AuthInputContainer
                className="input"
                style={{ borderBottom: "unset" }}
              >
                <AuthInput
                  label="名稱"
                  placeholder="請輸入名稱"
                  value={name || ""}
                  onChange={(e) => {
                    setName(e);
                    setNameCount(e.length || "");
                  }}
                />
                <div className="caption mt-2">{!nameCount ? 0 : nameCount}/50</div>
              </AuthInputContainer>
            )}
          </InputContainer>
          <InputContainer style={{ marginTop: "0" }}>
            {introductionCount > 160 ? (
              <AuthInputContainer
                className="input active"
                style={{ marginTop: "0", borderBottom: "unset" }}
              >
                <IntroductionInput
                  label="自我介紹"
                  placeholder="請輸入自我介紹"
                  value={introduction || ""}
                  onChange={(e) => {
                    setIntroduction(e);
                    setIntroductionCount(e.length || "");
                  }}
                />
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className="alert-text">自我介紹不能多於 160 個字</p>
                  <div className="caption">{introductionCount}/160</div>
                </div>
              </AuthInputContainer>
            ) : (
              <AuthInputContainer className="input" style={{ marginTop: "0" }}>
                <IntroductionInput
                  label="自我介紹"
                  placeholder="請輸入自我介紹"
                  value={introduction || ""}
                  onChange={(e) => {
                    setIntroduction(e);
                    setIntroductionCount(e.length || "");
                  }}
                />
                <div className="caption">{!introductionCount ? 0 :introductionCount}/160</div>
              </AuthInputContainer>
            )}
          </InputContainer>
        </Modal.Body>
      </ModalStyle>
    </Modal>
  );
};

export default ProfileEditModal;
