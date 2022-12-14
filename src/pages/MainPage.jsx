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
  gap: 2rem;
`

// sidebar區塊
const LeftContainer = styled.div`
  flex: 5 1 0;
  padding: 1rem;
  min-height: 100vh;
  border: 1px solid var(--border-color);
  display: flex;
  flex-flow: column;
`

// twitter區塊
const CenterContainer = styled.div`
  flex: 14 1 0;
  border: 1px solid var(--border-color);
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
`

// popular區塊
const RightContainer = styled.div`
  flex: 6 1 0;
  padding: 3rem;
  border: 1px solid var(--border-color);
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
          {/* back為返回記號 */}
          <Breadcrumb title={'首頁'} back={false} />
          <TextArea/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
        </CenterContainer>
        <RightContainer>
          <div className="inner">
            <h3>推薦跟隨</h3>
            <PopularUserItem follow={false}/>
            <PopularUserItem follow={true}/>
            <PopularUserItem follow={true}/>
            <PopularUserItem follow={true}/>
            <PopularUserItem follow={false}/>
          </div>
        </RightContainer>
      </MainStyle>
    </Container>
  );
}

export default Main;
