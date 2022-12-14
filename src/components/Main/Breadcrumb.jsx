// 引入方法
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

// 引入圖片
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";

const CardStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    font-size: 1.125rem;
  }
  .number {
    color: var(--secondary-color);
    font-size: 0.875rem;
  }
`;

const IconStyle = styled.div`
  cursor: pointer;
`;

function Breadcrumb(props) {
  let back = props.back;
  let title = props.title;
  let number = props.number;
  let link = props.link;
  const UserId = useParams();
  const navigate = useNavigate();
  return (
    <CardStyle>
      {back === true && (
        <IconStyle>
          <BackIcon onClick={() => link === true ? navigate("/user/"+ UserId.UserId +"/tweet") : navigate("/main")} />
        </IconStyle>
      )}
      {number === "" ? (
        <h3 className="mb-0">{title}</h3>
      ) : (
        <TitleStyle>
          <h3 className="title mb-0">{title}</h3>
          <p className="number mb-0">{number} 推文</p>
        </TitleStyle>
      )}
    </CardStyle>
  );
}

export default Breadcrumb;
