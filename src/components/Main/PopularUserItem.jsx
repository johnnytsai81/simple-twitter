// 引入方法
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

// 引入圖片
import {ReactComponent as NoImage} from '../../assets/icons/no-image.svg';

const CardStyle = styled.div`
  display: flex;
  gap: 1rem;
  .avatar{
    width:50px;
    height:50px;
    flex: 0 0 50px;
  }
  .card-content{
    display: flex;
    align-items:center;
    gap: 0.5rem;
    width: 100%;
    .card-header{
      flex: 0 0 calc(100% - 98px);
      display: flex;
      flex-direction: column;
    }
    .name{
      font-size: 1rem;
      font-weight: 600;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      line-height: 1.5em;
      -webkit-line-clamp: 1;
    }
    .account{
      font-size: 0.875rem;
      color: var(--secondary-color);
    }
  }
  button{
    margin-left: auto;
  }
`

function PopularUserItem(props) {
  let follow = props.follow
  let name = props.name
  let account = props.account
  return (
    <CardStyle>
      <NoImage className="avatar" />
      <div className="card-content">
        <div className="card-header">
          <h3 className="name mb-0">{name}</h3>
          <p className="account mb-0">@{account}</p>
        </div>
        {follow === false && <Button variant="primary" size="sm">正在跟隨</Button>}
        {follow === true && <Button variant="outline-primary" size="sm">跟隨</Button>}
      </div>
    </CardStyle>
  );
}

export default PopularUserItem;