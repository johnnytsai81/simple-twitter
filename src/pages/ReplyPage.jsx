import SideBar from '../components/SideBar';
import ReplyItem from '../components/Main/ReplyItem';
import Breadcrumb from '../components/Main/Breadcrumb';
import PopularUserItem from '../components/Main/PopularUserItem';
import ReplyMenu from '../components/Main/ReplyMenu';

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

function ReplyPage() {
  return (
    <Container>
      <MainStyle>
        <LeftContainer>
          <SideBar/>
        </LeftContainer>
        <CenterContainer>
          {/* back為返回記號 number為推文數 */}
          <Breadcrumb title={'推文'} number={''} back={true} />
          <ReplyMenu username={'John Doe'} userAccount={'devon_lane'} time={'上午 10:05・2021年11月10日'} reply={'38'} like={'747'} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. '}/>
          <ReplyItem userAccount={'devon_lane'} replyname={'JJJJJ'} replyAccount={'jjjjj'} time={'3小時'} reply={'12'} like={'7'} likeActive={true} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <ReplyItem userAccount={'devon_lane'} replyname={'GGGG'} replyAccount={'gggg'} time={'2小時'} reply={'2'} like={'7'} likeActive={false} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <ReplyItem userAccount={'devon_lane'} replyname={'GG'} replyAccount={'gg'} time={'7小時'} reply={'12'} like={'37'} likeActive={true} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <ReplyItem userAccount={'devon_lane'} replyname={'DDDDD'} replyAccount={'ddddd'} time={'4天'} reply={'1'} like={'7'} likeActive={false} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <ReplyItem userAccount={'devon_lane'} replyname={'SSSSS'} replyAccount={'sssss'} time={'1分鐘'} reply={'12'} like={'0'} likeActive={false} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <ReplyItem userAccount={'devon_lane'} replyname={'ZZZZ'} replyAccount={'zzzz'} time={'10分鐘'} reply={'33'} like={'7'} likeActive={false} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
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

export default ReplyPage;
