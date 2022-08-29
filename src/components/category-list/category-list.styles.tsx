import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  column-gap: 20px;
  row-gap: 20px;

  > * {
    grid-column: span 2;
  }

  & :nth-child(4) {
    grid-column: span 3;
  }
  & :nth-child(5) {
    grid-column: span 3;
  }

  @media screen and (max-width: 576px) {
    > * {
      grid-column: span 6;
    }

    & :nth-child(4) {
      grid-column: span 6;
    }

    & :nth-child(5) {
      grid-column: span 6;
    }
  }
`;
