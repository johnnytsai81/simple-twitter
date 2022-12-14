import styled from 'styled-components';

const StyledUserContainer = styled.div`
border-right: 1px solid #E6ECF0;
border-left: 1px solid #E6ECF0;
width: 937px;
height: 1200px;
margin: 0 auto;

display: flex;
flex-direction: column;
align-items: start;
`

// 每一欄使用者
const StyledUserItem = styled.div`
width: 100%;
height: 120px;
border-top: 1px solid #E6ECF0;
padding: 1.5rem;
position: relative;

display: flex;
flex-direction: row;
align-items: start;
`

const StyledUserItemContainer = styled.div`
display: flex;
flex-direction: column;
width: 95%;
margin: 0 0 0 10px;
`

// 假頭像
const StyledAvatarIcon = styled.div`
width: 50px;
height: 50px;
background-color: #C4C4C4;
border-radius: 50%;
`

// 姓名和帳號列的外層
const StyledLinkGroup = styled.div`
display: flex;
flex-direction: row;
`

// 姓名
const StyledNameLink = styled.div`
  color: #171725;
  font-size: 16px;
  font-weight: 700;
`;

// 帳號和時間顯示
const StyledAccountLink = styled.div`
  color: #6C757D;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 0 10px;
`;

// 貼文內容
const StyledPostLink = styled.div`
  margin: 0.5rem 0 0 0;
  color: #171725;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`;

export { StyledUserContainer as UserContainer,
  StyledUserItem as UserItem,
  StyledAvatarIcon as AvatarIcon,
  StyledNameLink as NameLink,
  StyledAccountLink as AccountLink,
  StyledPostLink as PostLink,
  StyledLinkGroup as LinkGroup,
  StyledUserItemContainer as UserItemContainer 
}