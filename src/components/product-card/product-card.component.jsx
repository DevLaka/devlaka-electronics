import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { useDispatch } from "react-redux/es/exports";
import { addItemToCart } from "../../store/cart/cart.action";
import { useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cart-selector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to Cart
        </Button>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductCard;
