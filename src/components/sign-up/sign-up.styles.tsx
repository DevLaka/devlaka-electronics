import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    padding: 0 10px;
    margin: 40px 0 10px 0;
  }
`;
