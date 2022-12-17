import SideBar from '../components/SideBar';
import ReplyItem from '../components/Main/ReplyItem';
import UserInfoArea from '../components/Main/UserPostList/UserInfoArea';
import Breadcrumb from '../components/Main/Breadcrumb';
import PopularUserItem from '../components/Main/PopularUserItem';
import UserMenuTab from '../components/Main/UserMenuTab';

// 載入方法
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

// main區塊
const MainStyle = styled.div`
  display: flex;
  gap: 1rem;
`

// sidebar區塊
const LeftContainer = styled.div`
  flex: 5 1 0;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`

// twitter區塊
const CenterContainer = styled.div`
  flex: 16 1 0;
  border: 1px solid var(--border-color);
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
`

// popular區塊
const RightContainer = styled.div`
  flex: 7 1 0;
  padding: 1rem 0 1rem 0;
  .inner{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    background-color: var(--light-color);
    border-radius: 8px;
    >h3{
      position: relative;
      margin-bottom: 0;
      &::before{
        content:'';
        position: absolute;
        left: -1rem;
        bottom: -1rem;
        width: calc(100% + 2rem);
        height: 1px;
        background: var(--border-color);
      }
    }
  }
`

function ProfileReply() {
  return (
    <Container>
      <MainStyle>
        <LeftContainer>
          <SideBar/>
        </LeftContainer>
        <CenterContainer>
          {/* back為返回記號 number為推文數 */}
          <Breadcrumb title={'John Doe'} number={'25'} back={true} />
          <UserInfoArea name={'John Doe'} account={'heyjohn'}  UserId={'self'} follower={'24'} followed={'11'} selfIntro={"Hi I'm Kobe"} coverImage={'https://i.imgur.com/Uongp79.jpg'} avatar={'https://i.imgur.com/buZlxFF.jpeg'}></UserInfoArea>
          <UserMenuTab UserId={'self'}/>
          <ReplyItem userAccount={'apple'} replyAccount={'heyjohn'} replyname={'John Doe'} time={'3小時'} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <ReplyItem userAccount={'apple2'} replyAccount={'heyjohn'} replyname={'John Doe'} time={'2小時'} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <ReplyItem userAccount={'apple3'} replyAccount={'heyjohn'} replyname={'John Doe'} time={'7小時'} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <ReplyItem userAccount={'apple4'} replyAccount={'heyjohn'} replyname={'John Doe'} time={'4天'} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <ReplyItem userAccount={'apple56'} replyAccount={'heyjohn'} replyname={'John Doe'} time={'1分鐘'} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <ReplyItem userAccount={'apple7789'} replyAccount={'heyjohn'} replyname={'John Doe'} time={'10分鐘'} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
        </CenterContainer>
        <RightContainer>
          <div className="inner">
            <h3>推薦跟隨</h3>
            <PopularUserItem name={'PizzaHut'} account={'pizzahut'} follow={false}/>
            <PopularUserItem name={'Mac'} account={'mac'} follow={true}/>
            <PopularUserItem name={'Pizza Hut'} account={'pizzahut'} follow={true}/>
            <PopularUserItem name={'Pizza Hut xxx xxxx'} account={'pizzahut'} follow={true}/>
            <PopularUserItem name={'Pizza Hut xxx xxxx'} account={'pizzahut'} follow={false}/>
          </div>
        </RightContainer>
      </MainStyle>
    </Container>
  );
}

export default ProfileReply;
