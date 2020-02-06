import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";

import {
  BoardPosts,
  CardImage,
  CardStyled,
  ButtonStyled,
  ButtonsPage
} from "./styles";

export default class Posts extends Component {
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

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loudProducts(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loudProducts(pageNumber);
  };

  render() {
    const { products, page, productInfo } = this.state;
    return (
      <>
        <BoardPosts>
          <h2>Posts</h2>
          {products.map(product => (
            <CardStyled key={product._id}>
              <CardImage
                variant="top"
                src="https://miro.medium.com/max/2560/1*Utjl1nN32BNX9yXYCT2Omg.png"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>
                  {product.title}
                </Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Link to={`/post/${product._id}`}>
                  <ButtonStyled variant="primary">Leia mais...</ButtonStyled>
                </Link>
              </Card.Body>
            </CardStyled>
          ))}
        </BoardPosts>
        <ButtonsPage>
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>
            Próxima
          </button>
        </ButtonsPage>
      </>
    );
  }
}
