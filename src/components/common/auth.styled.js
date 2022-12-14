import styled from 'styled-components';

const StyedContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const StyledAuthInputContainer = styled.div`
  width: 50%;
  margin-top: 30px;
`;

const StyledButton = styled.button`
  border-radius: 50px;
  background-color: #FF6600;
  border: none;

  margin: 40px 0 30px 0;

  color: white;
  width: 356px;
  height: 46px;

  padding: 8px 24px;
  font-weight: 400;

  &.hover {
   cursor: pointer;
  }
`;

const StyledLinkText = styled.div`
  color: #0062ff;
  font-size: 16px;
  font-weight: 400;
  text-decoration-line: underline;
`;

const StyledAuthLinkTextGroup = styled.div`
  width: 160px;
  height: 36px;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  left: 805px;
  top: 448px;
`

export {
  StyedContainer as AuthContainer,
  StyledAuthInputContainer as AuthInputContainer,
  StyledButton as AuthButton,
  StyledLinkText as AuthLinkText,
  StyledAuthLinkTextGroup as AuthLinkTextGroup,
};