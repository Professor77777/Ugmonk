import styled from "styled-components";
import { ReactComponent as logo } from "../../Assets/Icons/logo.svg";
import { ReactComponent as cart } from "../../Assets/Icons/cart.svg";

export const Wrapper = styled.div`
  width: 100%;
  /* border: 1px solid black; */
`;
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  border: 1px solid green;
  margin: auto;
  padding: 20px 40px;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
`;
export const UL = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const NavbarLeft = styled.div`
  width: 250px;
  /* border: 1px solid black; */
  display: flex;
  gap: 21px;
`;
export const Logo = styled(logo)`
  /* margin: auto; */
`;
export const LogoText = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 37px;
  line-height: 21px;
  text-align: left;
  color: rgba(26, 26, 26, 0.71);
`;
export const NavbarCenter = styled.div`
  display: flex;
  gap: 32px;
  /* margin: auto; */
  list-style-type: none;
`;
export const NavbarRight = styled.div`
  display: flex;
  gap: 12px;
  list-style-type: none;
  /* margin: auto 0; */
  /* border: 1px solid black; */
  /* padding: 0px 10px; */
`;
export const Cart = styled(cart)`
  border-right: 1px solid black;
  border-left: 1px solid black;
  padding: 0 12px;
`;
export const NavbarCartBtn = styled.button`
  background: none;
  height: 18px;
  border: none;
  /* margin: auto; */
  :active {
    transform: scale(1.2);
  }
`;

export const Input = styled.input`
  padding: 5px 10px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 0px;
`;
export const InputWrapper = styled.div`
  display: flex;
  justify-content: end;
  /* border: 1px solid grey; */
  padding: 5px 7px;
`;
