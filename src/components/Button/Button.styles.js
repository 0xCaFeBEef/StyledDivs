import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s all ease-out;
  border-radius: 10px;

  &:hover {
    background-color: #205a00;
  }
`;
