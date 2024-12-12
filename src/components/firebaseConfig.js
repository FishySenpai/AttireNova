// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_X_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_X_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_X_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_X_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_X_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_X_FIREBASE_APP_ID,
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
