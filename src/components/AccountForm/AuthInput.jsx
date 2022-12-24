import styled from "styled-components";
import clsx from "clsx";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f8fa;
  width: 100%;
  height: 54px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  color: "#696974";
  text-align: start;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: #f5f8fa;
  border-radius: 0px;
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

const AuthInput = ({ type, label, value, placeholder, onChange, defaultValue }) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        className={clsx("", { active: value.length > 50 })}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        defaultValue={defaultValue}
      />
    </StyledContainer>
  );
};

export default AuthInput;
