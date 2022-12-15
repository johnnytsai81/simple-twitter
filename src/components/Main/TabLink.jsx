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
  padding: 0.75rem 1rem;
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

function TabLink(props) {
  let UserId = props.UserId
  return (
    <>
      <PageListStyle>
        {/* active狀態會變色 */}
        <NavLink to={`/user/${UserId}/`} exact="true">
          {({ isActive }) =>
            isActive ? (
              <PageLink
                active={true}
                text={'推文'}
                name={'tweet'}
              />
            ) : (
              <PageLink
                active={false}
                text={'推文'}
                name={'tweet'}
              />
            )
          }
        </NavLink>
        <NavLink to={`/user/${UserId}/replied_tweets`}>
          {({ isActive }) =>
            isActive ? (
              <PageLink
                active={true}
                text={'回覆'}
                name={'reply'}
              />
            ) : (
              <PageLink
                active={false}
                text={'回覆'}
                name={'reply'}
              />
            )
          }
        </NavLink>
        <NavLink to={`/user/${UserId}/likes`}>
          {({ isActive }) =>
            isActive ? (
              <PageLink
                active={true}
                text={'喜歡的內容'}
                name={'like'}
              />
            ) : (
              <PageLink
                active={false}
                text={'喜歡的內容'}
                name={'like'}
              />
            )
          }
        </NavLink>
      </PageListStyle>
    </>
  );
}

export default TabLink;