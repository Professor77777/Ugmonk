import React from "react";
import {
  CardImage,
  CardImageWrapper,
  CardWrapper,
  ItemSpan,
  ItemTitle,
  ItemPrice,
  ItemSale,
} from "./Card";

const Card = ({ image, title, price }) => {
  return (
    <CardImageWrapper>
      <CardImage src={image} alt={title} loading="lazy" />
      <ItemTitle>
        {title} <ItemSpan>(Walnut)</ItemSpan>
      </ItemTitle>
      <ItemPrice>
        ${price} <ItemSale>$89.00</ItemSale>
      </ItemPrice>
    </CardImageWrapper>
  );
};
export default Card;
