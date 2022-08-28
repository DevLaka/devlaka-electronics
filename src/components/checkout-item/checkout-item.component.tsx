import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemToCart,
} from "../../store/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpanName,
  BaseSpanPrice,
  BaseSpanQuantity,
  Arrow,
  Value,
  RemoveButton,
  CheckoutOptionContainer,
  DecrementCircle,
  IncrementCircle,
} from "./checkout-item.styles";
import { CartItem } from "../../store/cart/cart.types";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemToCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

      <CheckoutOptionContainer>
        <BaseSpanName>{name}</BaseSpanName>
        <BaseSpanQuantity>
          <DecrementCircle onClick={removeItemHandler}>-</DecrementCircle>
          <Value>{quantity}</Value>
          <IncrementCircle onClick={addItemHandler}>+</IncrementCircle>
        </BaseSpanQuantity>
        <BaseSpanPrice>{price}</BaseSpanPrice>
      </CheckoutOptionContainer>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
