import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { CloseOrangeIcon } from "../assets/icons";
import { MdOutlineCameraEnhance } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import AuthInput from "../components/AccountForm/AuthInput";
import { AuthInputContainer } from "../components/common/auth.styled";
import IntroductionInput from "../components/common/IntroductionInput";

const CardStyle = styled.div`
  position: relative;
  .background {
    width: 100%;
    height: 200px;
    filter: opacity(80%);
  }
  .avatar {
    position: absolute;
    top: 130px;
    left: 1rem;
    height: 140px;
    width: 140px;
    border-radius: 100px;
    border: 4px solid var(--white-color);
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
`;

// 包住authInput的區塊
const InputContainer = styled.div`
  width: 639px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelfEditModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="self-edit-modal"
        variant="primary"
        onClick={handleShow}
      >
        Launch self edit modal
      </Button>

      <Modal className="modal-lg" show={show} onHide={handleClose}>
        <Modal.Header style={{ padding: "10px" }}>
          <CloseOrangeIcon  style={{ cursor:'pointer' }}/>
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Modal.Title>編輯個人資料</Modal.Title>
            <Button variant="primary">儲存</Button>{" "}
          </div>
        </Modal.Header>

        <Modal.Body style={{ width: "100%", height: "600px" }}>
          <CardStyle>
            <div
              className="user-edit-area"
              style={{
                height: "200px",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                className="background"
                src="https://i.imgur.com/Uongp79.jpg"
                alt="background"
              />
              <img
                className="avatar"
                src="https://i.imgur.com/buZlxFF.jpeg"
                alt="avatar"
              />

              {/* 背景圖上的icon */}
              <MdOutlineCameraEnhance
                style={{
                  width: "25px",
                  height: "25px",
                  color: "#FFFFFF",
                  position: "absolute",
                  left: "12%",
                  bottom: "-6%",
                }}
              />
              <MdOutlineCameraEnhance
                style={{
                  width: "25px",
                  height: "25px",
                  color: "#FFFFFF",
                  position: "absolute",
                  right: "53%",
                }}
              />

              {/* 大頭照上的icon */}
              <IoMdClose
                style={{
                  width: "25px",
                  height: "25px",
                  color: "#FFFFFF",
                  position: "absolute",
                  right: "43%",
                }}
              />
            </div>

            {/* 控制表格欄位內的置中 */}
            <InputContainer>
              {/* 輸入名稱的欄位 */}
              <AuthInputContainer
                style={{ width: "95%", marginTop: "100px" }}
              >
                <AuthInput
                  label="名稱"
                  placeholder="請輸入名稱"
                  value="John Doe"
                />

                {/* 計算姓名字數區塊 */}
                <div
                  className="name-letter-amount"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "5px",
                  }}
                >
                  <div style={{ fontSize: "12px", color: "#696974" }}>8/50</div>
                </div>
              </AuthInputContainer>

              <AuthInputContainer style={{ width: "95%" }}>
                {/* 輸入自我介紹的欄位 */}
                <IntroductionInput
                  label="自我介紹"
                  placeholder="請輸入自我介紹"
                  value="John Doe"
                />

                {/* 計算自我介紹字數區塊 */}
                <div
                  className="name-letter-amount"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "5px",
                  }}
                >
                  <div style={{ fontSize: "12px", color: "#696974" }}>
                    0/160
                  </div>
                </div>
              </AuthInputContainer>
            </InputContainer>
          </CardStyle>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SelfEditModal;
