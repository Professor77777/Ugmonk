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

const Card = ({ image, title }) => {
  return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage src={image} alt={title} loading="lazy" />
        <ItemTitle>
          Analog Starter Kit <ItemSpan>(Walnut)</ItemSpan>
        </ItemTitle>
        <ItemPrice>
          $103.00 <ItemSale>$89.00</ItemSale>
        </ItemPrice>
      </CardImageWrapper>
      <CardImageWrapper>
        <CardImage src={image} alt={title} loading="lazy" />
        <ItemTitle>
          Analog Starter Kit <ItemSpan>(Walnut)</ItemSpan>
        </ItemTitle>
        <ItemPrice>
          $103.00 <ItemSale>$89.00</ItemSale>
        </ItemPrice>
      </CardImageWrapper>
      <CardImageWrapper>
        <CardImage src={image} alt={title} loading="lazy" />
        <ItemTitle>
          Analog Starter Kit <ItemSpan>(Walnut)</ItemSpan>
        </ItemTitle>
        <ItemPrice>
          $103.00 <ItemSale>$89.00</ItemSale>
        </ItemPrice>
      </CardImageWrapper>
      <CardImageWrapper>
        <CardImage src={image} alt={title} loading="lazy" />
        <ItemTitle>
          Analog Starter Kit <ItemSpan>(Walnut)</ItemSpan>
        </ItemTitle>
        <ItemPrice>
          $103.00 <ItemSale>$89.00</ItemSale>
        </ItemPrice>
      </CardImageWrapper>
    </CardWrapper>
  );
};
export default Card;
