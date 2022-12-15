// 引入圖片
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import {ReactComponent as HomeIcon} from '../../assets/icons/home-solid.svg';
import {ReactComponent as PersonIcon} from '../../assets/icons/person-solid.svg';
import {ReactComponent as SettingIcon} from '../../assets/icons/setting-solid.svg';
import {ReactComponent as LogoutIcon} from '../../assets/icons/logout.svg';
import Button from 'react-bootstrap/Button';

// 引入方法
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const PageListStyle = styled.div`
  display:flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: auto;
`

const PageLinkStyle = styled.div`
  display:flex;
  padding:0.5rem 1rem;
  align-items:center;
  gap:1rem;
  border-radius: 30px;
  cursor: pointer;
  h5{
    ${props => (props.active === true ? 'color: #FF6600;' : 'color: #44444F;')}; 
  }
  &:hover{
    background: #f3f3f3;
  }
`

const IconStyle = styled.div`
  display: contents;
  flex: 0 0 24px;
  ${props => (props.active === true ? 'fill: #FF6600; stroke: #FF6600;' : 'fill: #ffffff; stroke: #44444F;')};
`

function PageLink(props) {
  let text = props.text
  let active = props.active
  let name = props.name
  return (
    <PageLinkStyle active={active} name={name}>
      {name === 'home' && <IconStyle active={active} name={name}><HomeIcon/></IconStyle>}
      {name === 'person' && <IconStyle active={active} name={name}><PersonIcon/></IconStyle>}
      {name === 'setting' && <IconStyle active={active} name={name}><SettingIcon/></IconStyle>}
      {name === 'logout' && <IconStyle active={active} name={name}><LogoutIcon/></IconStyle>}
      <h5 className="mb-0">{text}</h5>
    </PageLinkStyle>
  );
}

function SideBar(props) {
  let location = props.location
  return (
    <>
      <Logo className="d-block check-icon ms-4 mb-4" />
      <PageListStyle>
        {/* active狀態會變色 */}
        <NavLink to={`/main`}>
          {({ isActive }) =>
            isActive ? (
              <PageLink
                active={true}
                text={'首頁'}
                name={'home'}
              />
            ) : (
              <PageLink
                active={false}
                text={'首頁'}
                name={'home'}
              />
            )
          }
        </NavLink>
        <NavLink to={`/user/self/`}>
          {({ isActive }) =>
            isActive ? (
              <PageLink
                active={true}
                text={'個人資料'}
                name={'person'}
              />
            ) : (
              <PageLink
                active={false}
                text={'個人資料'}
                name={'person'}
              />
            )
          }
        </NavLink>
        <NavLink to={`/user/setting`}>
          {({ isActive }) =>
            isActive ? (
              <PageLink
                active={true}
                text={'設定'}
                name={'setting'}
              />
            ) : (
              <PageLink
                active={false}
                text={'設定'}
                name={'setting'}
              />
            )
          }
        </NavLink>
        <Button variant="primary">推文</Button>{' '}
      </PageListStyle>
      <PageLink location={location} text={'登出'} name={'logout'}/>
    </>
  );
}

export default SideBar;