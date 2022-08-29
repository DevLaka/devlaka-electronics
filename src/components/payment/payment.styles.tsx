import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentContainer = styled.div`
  height: 300px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-bottom: 28px;
  }

  @media screen and (max-width: 576px) {
    h2 {
      margin-bottom: 10px;
    }
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .cardElement {
    border-radius: 6px;
    border: 1px solid black;
    height: 36px;
    width: 100%;
    padding: 12px;
  }

  @media screen and (max-width: 576px) {
    min-width: 350px;
    width: 100%;
  }

  @media screen and (max-width: 576px) {
    button {
      width: 70%;
    }
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: 20px;
`;
