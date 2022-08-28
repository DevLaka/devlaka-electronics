import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  img {
    border-radius: 8px;
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0 10px;
  font-weight: bolder;
  span {
    font-size: 16px;
  }
  .quantity {
    font-weight: normal;
  }
`;
