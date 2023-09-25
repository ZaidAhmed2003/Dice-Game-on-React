import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: #000000;
  padding: 10px 18px;
  outline: none;
  border: 2px solid black;
  border-radius: 0.5rem;
  min-width: 225px;
  font-size: 24px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 2px solid black;
    transition: all 0.3s ease;
  }

  &:active {
    background-color: #000000;
    color: white;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 2px solid black;
  color: #000000;
  &:hover {
    background-color: black;
    color: white;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }
`;

export default Button;
