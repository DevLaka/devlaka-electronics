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
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  display: flex;
  flex-wrap: true;
  align-items: center;
  justify-content: center;

  .cardElement {
    border-radius: 6px;
    border: 1px solid black;
    height: 36px;
    width: 100%;
    padding: 12px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: 20px;
`;
