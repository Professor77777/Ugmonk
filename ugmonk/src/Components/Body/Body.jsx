import React, { Component } from "react";
import { BodyTitle, ButtonBody, Container } from "./Body";
import Card from "./Card.jsx";
import img from "../../Assets/Images/card1.png";
class Body extends Component {
  render() {
    return (
      <Container>
        <div>
          <BodyTitle>
            <ButtonBody>New Arrivals</ButtonBody>
            <ButtonBody>Analog</ButtonBody>
            <ButtonBody>Final Stock</ButtonBody>
            <ButtonBody>Best Sellers</ButtonBody>
            <ButtonBody>Clothing</ButtonBody>
            <ButtonBody>Objects</ButtonBody>
          </BodyTitle>
        </div>
        <div>
          <Card image={img} title="Image" />
        </div>
      </Container>
    );
  }
}
export default Body;
