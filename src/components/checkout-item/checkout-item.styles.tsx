import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 180px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const CheckoutOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-evenly;
  width: 90%;

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

export const BaseSpanName = styled.div`
  width: 100%;
  font-weight: bolder;
`;

// export const Quantity = styled(BaseSpan)`
//   display: flex;
// `;

export const BaseSpanPrice = styled.div`
  width: 100%;
`;

export const BaseSpanQuantity = styled.div`
  display: flex;
  width: 100%;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const IncrementCircle = styled.div`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 100%;
  padding: 0 8px;
  font-weight: bolder;
  color: white;
  background-color: black;
`;

export const DecrementCircle = styled.div`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 100%;
  padding: 0 8px;
  font-weight: bolder;
  color: white;
  background-color: black;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
