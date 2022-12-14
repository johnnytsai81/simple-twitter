import SideBar from '../components/SideBar';
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
  border: 1px solid #E6ECF0;
  display: flex;
  flex-flow: column;
`

// twitter區塊
const CenterContainer = styled.div`
  flex: 14 1 0;
  border: 1px solid #E6ECF0;
`

// popular區塊
const RightContainer = styled.div`
  flex: 6 1 0;
  padding: 3rem;
  border: 1px solid #E6ECF0;
`

function Main() {
  return (
    <Container>
      <MainStyle>
        <LeftContainer>
          <SideBar/>
        </LeftContainer>
        <CenterContainer>

        </CenterContainer>
        <RightContainer>

        </RightContainer>
        
      </MainStyle>
    </Container>
  );
}

export default Main;
