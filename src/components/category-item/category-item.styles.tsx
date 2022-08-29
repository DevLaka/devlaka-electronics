import styled from "styled-components";

type BackgroundImageProps = {
  imageUrl?: string;
};

// Styling dynamic css with styled components
export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  width: 100%;

  h3 {
    font-weight: bold;
    margin: 6px 0;
    color: white;
    text-transform: uppercase;
    font-size: 1.2rem;
  }

  p {
    color: white;
    margin: 0px 0px 6px 0px;
  }
`;

export const CategoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  border-radius: 16px;
  position: relative;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 1;
    }
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
`;
