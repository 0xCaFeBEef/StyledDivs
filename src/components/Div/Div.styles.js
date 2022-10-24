import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  width: 50px;
  height: 50px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 1s all ease-out;

  /* &:hover {
    background-color: #205a00;
  } */
`;
