// 引入方法
import styled from 'styled-components';
import {ReactComponent as BackIcon} from '../../assets/icons/back.svg';

// 引入圖片

const CardStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 1rem;
  border-bottom: 1px solid var(--border-color)
`

function Breadcrumb(props) {
  let back = props.back
  let title = props.title
  return (
    <CardStyle>
      {back === true && <BackIcon />}
      <h3 className="mb-0">{title}</h3>
    </CardStyle>
  );
}

export default Breadcrumb;