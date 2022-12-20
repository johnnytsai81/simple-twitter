// 引入圖片
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-solid.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/person-solid.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";

// 引入方法
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const PageListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: auto;
`;

const PageLinkStyle = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 1rem;
  border-radius: 30px;
  cursor: pointer;
  h5 {
    ${(props) =>
      props.active === true ? "color: #FF6600;" : "color: #44444F;"};
  }
  &:hover {
    background: #f3f3f3;
  }
`;

const IconStyle = styled.div`
  display: contents;
  flex: 0 0 24px;
  ${(props) =>
    props.active === true
      ? "fill: #FF6600; stroke: #FF6600;"
      : "fill: #ffffff; stroke: #44444F;"};
`;

function PageLink(props) {
  let text = props.text;
  let active = props.active;
  let name = props.name;
  return (
    <PageLinkStyle active={active} name={name}>
      {name === "tweetlist" && (
        <IconStyle active={active} name={name}>
          <HomeIcon />
        </IconStyle>
      )}
      {name === "userslist" && (
        <IconStyle active={active} name={name}>
          <PersonIcon />
        </IconStyle>
      )}
      {name === "logout" && (
        <IconStyle active={active} name={name}>
          <LogoutIcon />
        </IconStyle>
      )}
      <h5 className="mb-0">{text}</h5>
    </PageLinkStyle>
  );
}

function AdminSideBar(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("authToken");
    navigate("/admin_login");
  };
  return (
    <>
      <Logo className="d-block check-icon ms-4 mb-4" />
      <PageListStyle>
        {/* active狀態會變色 */}
        <NavLink to={`/admin_main`}>
          {({ isActive }) =>
            isActive ? (
              <PageLink active={true} text={"推文清單"} name={"tweetlist"} />
            ) : (
              <PageLink active={false} text={"推文清單"} name={"tweetlist"} />
            )
          }
        </NavLink>
        <NavLink to={`/admin_users`}>
          {({ isActive }) =>
            isActive ? (
              <PageLink active={true} text={"使用者列表"} name={"userslist"} />
            ) : (
              <PageLink active={false} text={"使用者列表"} name={"userslist"} />
            )
          }
        </NavLink>
      </PageListStyle>
      <button onClick={handleClick} style={{ background: 'none' }}>
        <PageLink text={"登出"} name={"logout"} onClick={handleClick} />
      </button>
    </>
  );
}

export default AdminSideBar;
