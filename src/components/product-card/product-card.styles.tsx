import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    width: 100%;
    opacity: 0.9;
  }
  &:hover {
    img {
      opacity: 0.8;
    }

    @media screen and (max-width: 800px) {
      &:hover {
        img {
          opacity: unset;
        }
        button {
          opacity: unset;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    height: 250px;
    grid-column: span 6;
  }
`;

export const Footer = styled.div`
  width: 100%;
  justify-content: space-between;
  font-size: 18px;
  position: absolute;
  bottom: 0;
  background-color: black;
  padding: 8px 10px;
  opacity: 0.8;
`;

export const Name = styled.div`
  width: 100%;
  margin-bottom: 4px;
  color: white;
`;

export const Price = styled.div`
  width: 100%;
  color: white;
  margin-bottom: 16px;
`;
