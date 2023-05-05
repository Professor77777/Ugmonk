import React, { Component } from "react";
import { BodyTitle, ButtonBody, Container } from "./Body";
import Card from "./Card.jsx";
import { CardWrapper } from "./Card";
import img from "../../Assets/Images/card1.png";
import img2 from "../../Assets/Images/card2.png";
import img3 from "../../Assets/Images/card3.png";
import img4 from "../../Assets/Images/card4.png";
import img5 from "../../Assets/Images/card5.png";
import img6 from "../../Assets/Images/card6.png";
import img7 from "../../Assets/Images/card7.png";
import img8 from "../../Assets/Images/card8.png";
import img9 from "../../Assets/Images/card9.png";
import img10 from "../../Assets/Images/card10.png";
import img11 from "../../Assets/Images/card11.png";
import img12 from "../../Assets/Images/card12.png";
import img13 from "../../Assets/Images/card13.png";
import img14 from "../../Assets/Images/card14.png";
import img15 from "../../Assets/Images/card15.png";
import img16 from "../../Assets/Images/card16.png";
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
        <CardWrapper>
          <Card image={img} title=" Analog Starter Kit" />
          <Card image={img2} title="jkhdsskjdbckj" price="93722326" />
          <Card image={img3} title="Image" price="93726" />
          <Card image={img4} title="Image" />
          <Card image={img5} title="Image" />
          <Card image={img6} title="Image" />
          <Card image={img7} title="Image" />
          <Card image={img8} title="Image" />
        </CardWrapper>
      </Container>
    );
  }
}
export default Body;
