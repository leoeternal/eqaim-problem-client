import styled from "styled-components";

export const StyledButton = styled.button`
  border-color: ${(props) =>
    props.variant === "enabled" ? "grey" : "lightgrey"};
  padding: 10px 20px;
  font-size: 18px;
  color: black;
  outline: none;
  background-color: white;
  border-radius: 5px;
  color: ${(props) => (props.variant === "enabled" ? "black" : "grey")};
  cursor: ${(props) => (props.variant === "enabled" ? "pointer" : "default")};
`;
