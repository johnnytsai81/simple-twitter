import SideBar from '../components/SideBar';
import PostItem from '../components/Main/PostItem';
import TextArea from '../components/Main/TweetList/TextArea';
import Breadcrumb from '../components/Main/Breadcrumb';
import PopularUserItem from '../components/Main/PopularUserItem';

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

function Main() {
  return (
    <Container>
      <MainStyle>
        <LeftContainer>
          <SideBar/>
        </LeftContainer>
        <CenterContainer>
          {/* back為返回記號 number為推文數 */}
          <Breadcrumb title={'首頁'} number={''} back={false} />
          <TextArea src={'https://i.imgur.com/buZlxFF.jpeg'} />
          {/* account為帳號名稱前面有@ name為名字 */}
          <PostItem account={'apple'} TweetId={'1'} UserId={'1'} profileImage={'https://i.imgur.com/Nnf5Vc6.jpg'} name={'kkk'} time={'3小時'} reply={'12'} like={'7'} likeActive={true} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <PostItem account={'apple2'} TweetId={'1'} UserId={'1'} profileImage={'https://i.imgur.com/jt2Gsoe.jpg'} name={'dfdfdfd'} time={'2小時'} reply={'2'} like={'7'} likeActive={false} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <PostItem account={'appl2'} TweetId={'1'} UserId={'1'} profileImage={'https://i.imgur.com/w0BeCel.jpg'} name={'apple'} time={'7小時'} reply={'12'} like={'37'} likeActive={true} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <PostItem account={'apple222'} TweetId={'1'} UserId={'1'} profileImage={'https://imgur.com/8R1V7JG.jpg'} name={'apple'} time={'4天'} reply={'1'} like={'7'} likeActive={false} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <PostItem account={'apple'} TweetId={'1'} UserId={'1'} profileImage={''} name={'apple'} time={'1分鐘'} reply={'12'} like={'0'} likeActive={false} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
          <PostItem account={'apple'} TweetId={'1'} UserId={'1'} profileImage={''} name={'apple'} time={'10分鐘'} reply={'33'} like={'7'} likeActive={false} tweet={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ull amco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'}/>
        </CenterContainer>
        <RightContainer>
          <div className="inner">
            <h3>推薦跟隨</h3>
            <PopularUserItem name={'PizzaHut'} account={'pizzahut'} profileImage={'https://i.imgur.com/w0BeCel.jpg'} follow={false}/>
            <PopularUserItem name={'Mac'} account={'mac'} profileImage={''} follow={true}/>
            <PopularUserItem name={'Pizza Hut'} account={'pizzahut'} profileImage={'https://imgur.com/8R1V7JG.jpg'} follow={true}/>
            <PopularUserItem name={'Pizza Hut xxx xxxx'} account={'pizzahut'} profileImage={''} follow={true}/>
            <PopularUserItem name={'Pizza Hut xxx xxxx'} account={'pizzahut'} profileImage={''} follow={false}/>
          </div>
        </RightContainer>
      </MainStyle>
    </Container>
  );
}

export default Main;
