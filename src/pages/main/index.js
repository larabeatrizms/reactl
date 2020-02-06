import React, { Component } from "react";

import RightNavBar from "../../components/RightNavBar";
import Posts from "../../components/Posts";

import { Row, Col } from "react-bootstrap";

import { Container } from "./styles";

export default class main extends Component {
  render() {
    return (
      <>
        <Container>
          <Row style={{ marginRight: 0 }}>
            <Col xs={12} md={8}>
              <Posts />
            </Col>
            <Col xs={12} md={4}>
              <RightNavBar />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
