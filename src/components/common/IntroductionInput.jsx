import styled from "styled-components";
import clsx from "clsx";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #f5f8fa;
  width: 100%;
  height: 147px;
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
  border-bottom: 2px solid #657786;
  &:focus {
    border-bottom: 2px solid #50b5ff;
  }
  &:hover {
    border-bottom: 2px solid #50b5ff;
  }
  &.active {
    border-bottom: 2px solid #fc5a5a;
  }
`;

const IntroductionInput = ({ type, label, value, placeholder, onChange}) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        className={clsx("", { active: value.length > 160 })}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </StyledContainer>
  );
};

export default IntroductionInput;
