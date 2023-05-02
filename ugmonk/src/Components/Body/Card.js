import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 55px auto;
  /* border: 1px solid red; */
  justify-content: center;
  align-items: center;
`;
export const CardImageWrapper = styled.div`
  width: 305px;
  height: 361px;
  overflow: hidden;
  border: 1px solid black;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 301px;
  border: 1px solid green;
`;
export const ItemTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #1a1a1a;
  margin-bottom: 6px;
`;
export const ItemSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #a8a8a8;
`;
export const ItemPrice = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  color: #808080;
`;
export const ItemSale = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  color: #ff3451;
`;
