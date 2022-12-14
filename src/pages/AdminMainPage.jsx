import { UserContainer, UserItem, AvatarIcon,NameLink,AccountLink,PostLink,LinkGroup,UserItemContainer } from '../components/Main/AdminPostItem';
import SideBar from '../components/SideBar';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import {ReactComponent as CloseIcon} from '../assets/icons/close.svg';


// main區塊
const MainStyle = styled.div`
  display: flex;
  gap: 2rem;
`
// sidebar區塊
const LeftContainer = styled.div`
  flex: 5 1 0;
  padding: 1rem;
  min-height: 100vh;
  border: 1px solid #E6ECF0;
  display: flex;
  flex-flow: column;
  `

const AdminMain = () => {
  return (
    
    <Container>
      <MainStyle>
        <LeftContainer>
          <SideBar/>
        </LeftContainer>
    
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

export default AdminMain