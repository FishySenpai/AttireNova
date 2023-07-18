// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmgSCq8UcNwOl_lnkfTiXqEG3oLnol-Gk",
  authDomain: "ecommerce-360f0.firebaseapp.com",
  projectId: "ecommerce-360f0",
  storageBucket: "ecommerce-360f0.appspot.com",
  messagingSenderId: "230413125751",
  appId: "1:230413125751:web:cfc3e923d31bb2b8df9e72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      window.location.pathname = "/";
    })
    .catch((error) => {
      console.log(error);
    });
};
