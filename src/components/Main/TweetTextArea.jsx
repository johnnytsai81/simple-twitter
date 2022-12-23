// 引入方法
import styled from "styled-components";
import Button from "react-bootstrap/Button";

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
  let value = props.value;
  let onChange = props.onChange;
  let avatar = props.avatar;
  return (
    <CardStyle>
      {avatar === "" ? (
        <NoImage className="avatar" />
      ) : (
        <img className="avatar" src={avatar} alt="avatar" />
      )}
      <div className="card-content">
        <StyledInput
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={"有什麼新鮮事？"}
        />
        <Button
          variant="primary"
          size="sm"
        >
          推文
        </Button>
      </div>
    </CardStyle>
  );
}

export default TextArea;
