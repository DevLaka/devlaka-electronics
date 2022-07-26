import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

// Styling the SVG
// Method 1
export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

/*
// Styling the SVG
// Method 2 (targeting the nested svg)
export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
`;
*/

export const ItemCount = styled.span`
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  top: 8px;
  position: absolute;
`;
