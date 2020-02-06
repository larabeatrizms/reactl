import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import {
  Container,
  ImageStyled,
  CardStyled,
  CardConteudosStyled
} from "./styles";

export default class RightNavBar extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1
  };

  componentDidMount() {
    this.loudProducts();
  }

  loudProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;
    console.log(response.data.docs);
    this.setState({ products: docs, productInfo, page });
  };

  render() {
    const { products, page, productInfo } = this.state;

    return (
      <Container>
        <h2>Sobre Mim</h2>
        <CardStyled>
          <ImageStyled
            src="https://pbs.twimg.com/profile_images/1157750833284562944/eB006XBd_400x400.jpg"
            roundedCircle
          />
          <p>
            Meu nome é Lara, adoro desenvolver aplicações React e React Native e
            estudar UI Design.
          </p>
        </CardStyled>
        <h2>Sobre o Blog</h2>
        <CardStyled>
          {/* <ImageStyled
          src="https://pbs.twimg.com/profile_images/1157750833284562944/eB006XBd_400x400.jpg"
          roundedCircle
        /> */}
          <p>
            Blog criado para documentar projetos e estudos sobre React,React
            Native, NodeJs, entre outros.
          </p>
        </CardStyled>
        <h2>Conteúdos</h2>
        <CardConteudosStyled>
          {products.map(product => (
            <Link to={`/post/${product._id}`}>{product.title}</Link>
          ))}
        </CardConteudosStyled>
      </Container>
    );
  }
}
