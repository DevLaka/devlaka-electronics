// Step 9
// Import useContext hook
import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils.js/firebase.utils";
// Step 10
// Import the userContext we created.
import { UserContext } from "../../contexts/user.context";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignInContainer, ButtonsContainer } from './sign-in.styles';

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // Step 11
  // Accessing the UserContext.
  // This returns the object passed to the value property in UserProvider.
  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // Step 12, Commenting this on Step 23
      // setCurrentUser(user);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect password or email");
          break;
        case "auth/user-not-found":
          alert("No user found to this email");
          break;
        default:
          alert("Error Sign In");
      }
    }
  };

  const signInWithGoogle = async () => {
    // Step 16
    // Problem: Hard to manage the user sign in and sign out state.
    // In fact i missed to set currentUser when user login with google.
    // const { user } = await signInWithGooglePopup();
    // Step 17, Commenting this on Step 23
    // setCurrentUser(user);
    // await createUserDocumentFromAuth(user);

    // Step 24
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          {/* Button type set to button to prevent submitting the form */}
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
