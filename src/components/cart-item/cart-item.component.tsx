import { CartItemContainer, ItemDetails } from "./cart-item.styles";
import { CartItem } from "../../store/cart/cart.types";

const CartItem = (cartItem: CartItem) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
