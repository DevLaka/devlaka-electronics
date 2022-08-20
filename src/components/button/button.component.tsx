import { MouseEvent } from "react";
import {
  BaseButton,
  ButtonSpinner,
  GoogleSingInButton,
  InvertedButton,
} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSingInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

interface IButton {
  children: React.ReactNode;
  isLoading?: boolean;
  buttonType?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

const Button = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}: IButton) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
