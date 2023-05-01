import styled from "styled-components";

export const BodyWrapper = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 20px 40px;
  border: 1px solid #111;
  margin: auto;
`;
export const BodyTitle = styled.ul`
  margin: auto;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
export const ButtonBody = styled.button`
  border: none;
  background: none;
  /* padding: 0; */
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 27px;
  color: #1a1a1a;

  :hover {
    border-bottom: 2px solid grey;
  }
  :active {
    color: green;
    transform: scale(1.2);
  }
`;
