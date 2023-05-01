import React, { Component } from "react";
import "../../Components/Navbar/Navbar.css";
import {
  Wrapper,
  Container,
  UL,
  Logo,
  LogoText,
  NavbarLeft,
  NavbarCenter,
  NavbarCartBtn,
  NavbarMenu,
  NavbarRight,
  Cart,
  Input,
  InputWrapper,
} from "./Navbar.js";

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <UL>
            <NavbarLeft>
              <LogoText>Ugmonk</LogoText>
              <Logo>Logo</Logo>
            </NavbarLeft>
            <NavbarCenter>
              <a style={{ textDecoration: "none" }} href="#">
                Man
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                Woman
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                Objects
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                Analog
              </a>
            </NavbarCenter>
            <NavbarRight>
              <a
                style={{ textDecoration: "none", borderRight: "12px" }}
                href="#"
              >
                <h4
                  style={{
                    borderRight: "1px solid black",
                    paddingRight: "12px",
                  }}
                >
                  Journal
                </h4>
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                Search
              </a>
              <a style={{ textDecoration: "none" }} href="#">
                Login
              </a>
              <NavbarCartBtn>
                <Cart />
              </NavbarCartBtn>
            </NavbarRight>
          </UL>
          <InputWrapper>
            <Input type="text" placeholder="search" />
          </InputWrapper>
        </Container>
      </Wrapper>
    );
  }
}
export default Navbar;
