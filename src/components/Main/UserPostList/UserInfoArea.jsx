// 引入方法
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

// 引入圖片

const CardStyle = styled.div`
  position: relative;
  .background{
    width:100%;
    height:200px;
  }
  .avatar{
    position: absolute;
    top: 130px;
    left: 1rem;
    height: 140px;
    width: 140px;
    border-radius: 100px;
    border: 3px solid var(--white-color);
  }
  .account{
    color: var(--secondary-color);
    font-size: 0.875rem;
  }
  .card-header{
    display: flex;
    width: 100%;
    .btn-primary{
      margin-left: auto;
    }
  }
  .card-body{
    padding: 2rem 1rem 1rem 1rem;
  }
  .card-footer{
    padding: 0 1rem 1rem 1rem;
    .text-wrap{
      display: flex;
      gap: 2rem;
      span{
        color: var(--secondary-color);
      }
    }
  }
`

function UserInfoArea(props) {
  let coverImage = props.coverImage
  let avatar = props.avatar
  let name = props.name
  let account = props.account
  let follower = props.follower
  let followed = props.followed
  let selfIntro = props.selfIntro
  return (
    <CardStyle>
      <img className="background" src={coverImage} alt="background"/>
      <img className="avatar" src={avatar} alt="avatar"/>
      <div className="card-header">
        <Button variant="outline-primary ms-auto mt-4 me-4">編輯個人資料</Button>{' '}
      </div>
      <div className="card-body">
        <h3 className="name mb-0">{name}</h3>
        <p className="account mb-0">@{account}</p>
      </div>
      <div className="card-footer">
        <div className="mb-2">{selfIntro}</div>
        <div className="text-wrap">
          <div className="text">{followed}<span>個跟隨中</span></div>
          <div className="text">{follower}<span>位跟隨者</span></div>
        </div>
      </div>
    </CardStyle>
  );
}

export default UserInfoArea;