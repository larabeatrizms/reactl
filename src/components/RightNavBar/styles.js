import styled from "styled-components";

import { Image } from "react-bootstrap";

export const Container = styled.div`
  margin-top: 20px;
  justify-content: flex-start;
  h2 {
    color: #1d4653;
    font-family: "Roboto", sans-serif;
    padding: 10px;
    font-weight: bold;
  }
`;

export const CardStyled = styled.div`
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ecf1f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  -webkit-box-shadow: 3px 3px 24px -2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 3px 3px 24px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 3px 3px 24px -2px rgba(0, 0, 0, 0.15);

  p {
    flex-shrink: 2;
    font-family: "Roboto", sans-serif;
    padding: 10px;
  }
`;

export const CardConteudosStyled = styled.div`
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ecf1f8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  -webkit-box-shadow: 3px 3px 24px -2px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 3px 3px 24px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 3px 3px 24px -2px rgba(0, 0, 0, 0.15);
`;

export const ImageStyled = styled(Image)`
  width: 100px;
  height: 100px;
`;
