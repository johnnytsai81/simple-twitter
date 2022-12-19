import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #f5f8fa;
  width: 100%;
  height: 147px;
  border-bottom: 2px solid black;
`;
const StyledLabel = styled.label`
  font-size: 14px;
  color: '#696974';
  text-align: start;
`;

const StyledInput = styled.textarea`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background-color: unset;
  border-radius: 0px;
  resize: none;
`;

const IntroductionInput = ({ type, label, value, placeholder, onChange}) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </StyledContainer>
  );
};

export default IntroductionInput;
