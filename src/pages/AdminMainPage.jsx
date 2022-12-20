import styled from 'styled-components';
import AdminSideBar from '../components/SideBar/AdminSideBar';
import { UserContainer, UserItem, AvatarIcon,NameLink,AccountLink,PostLink,LinkGroup,UserItemContainer } from '../components/Main/AdminPostItem';
import Container from 'react-bootstrap/Container';
import { CloseIcon } from '../assets/icons';
import { useEffect } from 'react';
import { checkPermission } from '../API/auth';
import { useNavigate } from "react-router-dom";

// main區塊
const MainStyle = styled.div`
  display: flex;
`
// sidebar區塊
const LeftContainer = styled.div`
  flex: 5 1 0;
  width: 178px;
  padding: 1rem;
  min-height: 100vh;
  border-right: 1px solid #E6ECF0;
  display: flex;
  flex-flow: column;
  `

const AdminMainPage = () => {

const navigate = useNavigate();
   
   useEffect(() => {
     const checkTokenIsValid = async () => {
       const authToken = localStorage.getItem("authToken");
       if (!authToken) {
         navigate('/admin_login')
       }
       const result = await checkPermission(authToken);
       if (!result) {
         navigate("/admin_login");
       }
     };
     checkTokenIsValid();
   }, [navigate]);


  return (
    
    <Container>

      {/* 左側sidebar */}
      <MainStyle>
        <LeftContainer>
          <AdminSideBar/>
        </LeftContainer>
    
      {/* 中間-右側的推文清單 */}
      <UserContainer>
      <h3 style={{margin: '20px', }}>推文清單</h3>
      
      <UserItem>
        <CloseIcon style={{position:'absolute', 
          top:'15px', 
          right:'10px',
          cursor: 'pointer'}}/>
        <AvatarIcon /> 
        <UserItemContainer>
        <LinkGroup>
        <NameLink>Apple</NameLink>
        <AccountLink>@apple．3小時</AccountLink>
        </LinkGroup>
        <PostLink>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </PostLink>
        </UserItemContainer>
      </UserItem>

      <UserItem>
        <CloseIcon style={{position:'absolute', 
          top:'15px', 
          right:'10px',
          cursor: 'pointer'}}/>
        <AvatarIcon />
        <UserItemContainer>
        <LinkGroup>
        <NameLink>Apple</NameLink>
        <AccountLink>@apple．3小時</AccountLink>
        </LinkGroup>
        <PostLink>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </PostLink>
        </UserItemContainer>
      </UserItem>

      <UserItem>
        <CloseIcon style={{position:'absolute', 
          top:'15px', 
          right:'10px',
          cursor: 'pointer'}}/>
        <AvatarIcon />
        <UserItemContainer>
        <LinkGroup>
        <NameLink>Apple</NameLink>
        <AccountLink>@apple．3小時</AccountLink>
        </LinkGroup>
        <PostLink>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </PostLink>
        </UserItemContainer>
      </UserItem>

      <UserItem>
        <CloseIcon style={{position:'absolute', 
          top:'15px', 
          right:'10px',
          cursor: 'pointer'}}/>
        <AvatarIcon />
        <UserItemContainer>
        <LinkGroup>
        <NameLink>Apple</NameLink>
        <AccountLink>@apple．3小時</AccountLink>
        </LinkGroup>
        <PostLink>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </PostLink>
        </UserItemContainer>
      </UserItem>

      <UserItem>
        <CloseIcon style={{position:'absolute', 
          top:'15px', 
          right:'10px',
          cursor: 'pointer'}}/>
        <AvatarIcon />
        <UserItemContainer>
        <LinkGroup>
        <NameLink>Apple</NameLink>
        <AccountLink>@apple．3小時</AccountLink>
        </LinkGroup>
        <PostLink>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </PostLink>
        </UserItemContainer>
      </UserItem>

      <UserItem>
        <CloseIcon style={{position:'absolute', 
          top:'15px', 
          right:'10px',
          cursor: 'pointer'}}/>
        <AvatarIcon />
        <UserItemContainer>
        <LinkGroup>
        <NameLink>Apple</NameLink>
        <AccountLink>@apple．3小時</AccountLink>
        </LinkGroup>
        <PostLink>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </PostLink>
        </UserItemContainer>
      </UserItem>

      <UserItem>
        <CloseIcon style={{position:'absolute', 
          top:'15px', 
          right:'10px',
          cursor: 'pointer'}}/>
        <AvatarIcon />
        <UserItemContainer>
        <LinkGroup>
        <NameLink>Apple</NameLink>
        <AccountLink>@apple．3小時</AccountLink>
        </LinkGroup>
        <PostLink>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </PostLink>
        </UserItemContainer>
      </UserItem>

      <UserItem>
        <CloseIcon style={{position:'absolute', 
          top:'15px', 
          right:'10px',
          cursor: 'pointer'}}/>
        <AvatarIcon />
        <UserItemContainer>
        <LinkGroup>
        <NameLink>Apple</NameLink>
        <AccountLink>@apple．3小時</AccountLink>
        </LinkGroup>
        <PostLink>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </PostLink>
        </UserItemContainer>
      </UserItem>

      </UserContainer>
      </MainStyle>
   </Container>
 
  )
}

export default AdminMainPage