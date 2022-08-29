import styled from "styled-components";
import { Link } from "react-router-dom";

// Styling a html element
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  padding: 8px;
  font-size: 1.2rem;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

// Styling a component provided by React
export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: fit-content;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const LogoText = styled.div`
  padding-left: 8px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 0px 15px;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;
