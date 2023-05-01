import React from "react";
import { CardImage, CardImageWrapper, CardWrapper } from "./Card";

const Card = ({ image, title }) => {
  return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage src={image} alt={title} loading="lazy" />
      </CardImageWrapper>
      <CardImageWrapper>
        <CardImage src={image} alt={title} loading="lazy" />
      </CardImageWrapper>
      <CardImageWrapper>
        <CardImage src={image} alt={title} loading="lazy" />
      </CardImageWrapper>
      <CardImageWrapper>
        <CardImage src={image} alt={title} loading="lazy" />
      </CardImageWrapper>
    </CardWrapper>
  );
};
export default Card;
