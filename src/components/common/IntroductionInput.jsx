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

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: #f5f8fa;
  border-radius: 0px;
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
