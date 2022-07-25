import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfH6zI_xLn16fBqgefgci12-wq9AJYG-Q",
  authDomain: "devlaka-electronics.firebaseapp.com",
  projectId: "devlaka-electronics",
  storageBucket: "devlaka-electronics.appspot.com",
  messagingSenderId: "338975640859",
  appId: "1:338975640859:web:0bec597b13121597c097be",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
