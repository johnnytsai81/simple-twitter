// 引入方法
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

// 引入圖片
import {ReactComponent as NoImage} from '../../assets/icons/no-image.svg';

const CardStyle = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  gap: 1rem;
  border-bottom: 1px solid var(--border-color);
  .avatar{
    width:50px;
    height:50px;
    flex: 0 0 50px;
  }
  .card-content{
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap: 0.5rem;
    .card-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .name{
      font-size: 1rem;
      font-weight: 600;
      margin-right: 0.5rem;
    }
  }
`

function FollowItem(props) {
  let selfIntro = props.selfIntro
  let name = props.name
  let follower = props.follower
  return (
    <CardStyle>
      <NoImage className="avatar" />
      <div className="card-content">
        <div className="card-header">
          <h3 className="name mb-0">{name}</h3>
          {follower === true ? <Button variant="primary" size="sm">正在跟隨</Button> : <Button variant="outline-primary" size="sm">跟隨</Button>}
        </div>
        <p className="text-start mb-0">{selfIntro}</p>
      </div>
    </CardStyle>
  );
}

export default FollowItem;