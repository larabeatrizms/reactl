import styled from "styled-components";

import { Card, Button } from "react-bootstrap";

export const BoardPosts = styled.div`
  margin: 10px;
  /* background-color: #f5f5f5; */
  border-radius: 5px;
  h2 {
    color: #1d4653;
    font-family: "Roboto", sans-serif;
    padding: 10px;
    font-weight: bold;
  }
  p {
    font-family: "Roboto", sans-serif;
    padding: 3px 0;
  }
`;

export const CardStyled = styled(Card)`
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ecf1f8;

  -webkit-box-shadow: 3px 3px 24px -2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 3px 3px 24px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 3px 3px 24px -2px rgba(0, 0, 0, 0.15);
`;

export const CardImage = styled(Card.Img)`
  /* width: 864px;
  height: 432px;
  background-size: auto; */
`;

export const ButtonStyled = styled(Button)`
  border: 0;
  border-radius: 2px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  background: #50a7c2;
  color: #fff;
  cursor: pointer;

  :hover {
    background: #398aa3;
  }
`;

export const ButtonsPage = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;

  button {
    border: 0;
    border-radius: 2px;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
    background: #50a7c2;
    color: #fff;
    cursor: pointer;

    :hover {
      background: #398aa3;
    }
  }
  button[disabled] {
    background: #8ac4d6;
    cursor: default;
  }
  button [disabled]:hover {
    background: #8ac4d6;

    cursor: default;
  }
`;
