// 引入圖片

// 引入方法
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const PageListStyle = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px solid var(--border-color);
  >*{
    flex: 0 0 130px;
  }
`

const PageItemStyle = styled.div`
  position: relative;
  padding: 1rem 1rem;
  color: var(--iron-color);
  cursor: pointer;
  &:hover{
    background: var(--light-color);
  }
  &[data-active="true"]{
    border-bottom: 2px solid var(--main-color);
  }
  h5{
    text-align: center;
    font-size: 0.875rem;
    &[data-active="true"]{
      color: var(--main-color);
    }
  }
`

function PageLink(props) {
  let text = props.text
  let active = props.active
  return (
    <PageItemStyle data-active={active}>
      <h5 className="mb-0" data-active={active}>{text}</h5>
    </PageItemStyle>
  );
}

function UserMenuTab(props) {
  let UserId = props.UserId
  return (
    <>
      <PageListStyle>
        {/* active狀態會變色 */}
        <NavLink to={`/user/${UserId}/following`}>
          {({ isActive }) =>
            isActive ? (
              <PageLink
                active={true}
                text={'追隨者'}
              />
            ) : (
              <PageLink
                active={false}
                text={'追隨者'}
              />
            )
          }
        </NavLink>
        <NavLink to={`/user/${UserId}/followers`}>
          {({ isActive }) =>
            isActive ? (
              <PageLink
                active={true}
                text={'正在追隨'}
              />
            ) : (
              <PageLink
                active={false}
                text={'正在追隨'}
              />
            )
          }
        </NavLink>
      </PageListStyle>
    </>
  );
}

export default UserMenuTab;