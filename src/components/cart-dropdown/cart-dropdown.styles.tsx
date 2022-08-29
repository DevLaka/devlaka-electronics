import styled from "styled-components";
import {
  BaseButton,
  GoogleSingInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 325px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSingInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  @media screen and (max-width: 576px) {
    height: 80vh;
    width: 90%;
    right: 0px;
    margin: 0 10px;
  }
`;

export const CartItems = styled.div`
  height: 325px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media screen and (max-width: 576px) {
    height: 80vh;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
