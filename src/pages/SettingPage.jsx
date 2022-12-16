import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import SideBar from '../components/SideBar';
import AuthInput from '../components/AccountForm/AuthInput';
import { AuthInputContainer } from '../components/common/auth.styled';
import { Button } from 'react-bootstrap';


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

// 帳戶設定區塊
const CenterContainer = styled.div`
  border-right: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  flex: 16 1 0;
  height: 1200px;
  display: flex;
  flex-direction: column;
`

// 空的區塊
const RightContainer = styled.div`
  flex: 7 1 0;
`

// 帳戶設定下方的border-line
const BorderLine = styled.div`
  width: 100%;
  border-top: 1px solid #E6ECF0;
`

// 包住authInput的區塊
const InputContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`


const SettingPage = () => {

  return (
    <Container>
      <MainStyle>
        
        {/* 左邊區塊 */}
        <LeftContainer>
          <SideBar location={'home'}/>
        </LeftContainer>

        {/* 中間-右邊區塊 */}
        <CenterContainer>
          <h3 style={{margin: '20px', }}>帳戶設定</h3>
          <BorderLine/>

          {/* 控制表格欄位內的置中 */}
          <InputContainer>

            <AuthInputContainer style={{width:'90%'}}>
              <AuthInput
                label="帳號"
                placeholder="請輸入帳號"
                // value=''
              />
            </AuthInputContainer>


            <AuthInputContainer style={{width:'90%'}}>
              <AuthInput
                label="名稱"
                placeholder="請輸入名稱"
                // value=''
              />
            </AuthInputContainer>
          

            <AuthInputContainer style={{width:'90%'}}>
              <AuthInput
                label="Email"
                placeholder="請輸入Email"
                // value=''
              />
            </AuthInputContainer>

            <AuthInputContainer style={{width:'90%'}}>
              <AuthInput
                type="password"
                label="密碼"
                placeholder="請輸入密碼"
                // value=''
              />
            </AuthInputContainer>


            <AuthInputContainer style={{width:'90%'}}>
              <AuthInput
                type="password"
                label="密碼再確認"
                placeholder="請再次輸入密碼"
                // value=''
              />
            </AuthInputContainer>
          </InputContainer>

          {/* 按鈕 */}
          <div style={{ display:'flex',justifyContent:'flex-end'}}>
          <Button variant="primary" style={{margin:'3rem 2.5rem 0 0'}}>儲存</Button>{' '}
          </div>
        </CenterContainer>
        <RightContainer>

        </RightContainer>

      </MainStyle>
    </Container>
  )
}

export default SettingPage