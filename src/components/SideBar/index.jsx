// 引入圖片
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import {ReactComponent as HomeIcon} from '../../assets/icons/home-solid.svg';
import {ReactComponent as PersonIcon} from '../../assets/icons/person-solid.svg';
import {ReactComponent as SettingIcon} from '../../assets/icons/setting-solid.svg';
import {ReactComponent as LogoutIcon} from '../../assets/icons/logout.svg';
import Button from 'react-bootstrap/Button';

// 引入方法
import styled from 'styled-components';

const PageListStyle = styled.div`
  display:flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  margin-bottom: auto;
`

const PageLinkStyle = styled.div`
  display:flex;
  padding:0.5rem 1rem;
  align-items:center;
  gap:1rem;
  border-radius: 30px;
  h5[data-active="true"]{
    color: #FF6600;
  }
  &:hover{
    background: #f3f3f3;
  }
`

const IconStyle = styled.div`
  display: contents;
  flex: 0 0 24px;
  fill: #ffffff;
  stroke: #44444F;
  &[data-active="true"]{
    fill: #FF6600;
    stroke: #FF6600;;
  }
`

function PageLink(props) {
  let text = props.text
  let active = props.active
  let name = props.name
  return (
    <PageLinkStyle>
      {name === 'home' && <IconStyle data-active={active}><HomeIcon/></IconStyle>}
      {name === 'person' && <IconStyle data-active={active}><PersonIcon/></IconStyle>}
      {name === 'setting' && <IconStyle data-active={active}><SettingIcon/></IconStyle>}
      {name === 'logout' && <IconStyle><LogoutIcon/></IconStyle>}
      <h5 className="mb-0" data-active={active}>{text}</h5>
    </PageLinkStyle>
  );
}

function SideBar() {
  return (
    <>
      <Logo className="d-block check-icon ms-4 mb-4" />
      <PageListStyle>
        {/* active狀態會變色 */}
        <PageLink active={true} text={'首頁'} name={'home'}/>
        <PageLink active={false} text={'個人資料'} name={'person'}/>
        <PageLink active={false} text={'設定'} name={'setting'}/>
        <Button variant="primary">推文</Button>{' '}
      </PageListStyle>
      <PageLink active={false} text={'登出'} name={'logout'}/>
    </>
  );
}

export default SideBar;