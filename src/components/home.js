import React, {useState, useEffect} from 'react'
import Products from './Products';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "./firebaseConfig";
import { auth } from "./firebaseConfig";
import {
  doc,
  getDoc
} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import MenSale from './Men/MenSale';
import MenPopular from './Men/MenPopular';
import MenCategories from './Men/MenCategories';
const Home = () => {
const [user, setUser] = useState();
const [data, setData] = useState();
const [loading, setLoading] = useState(true);
const id = 27110;
const navigate = useNavigate();

useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(user);
  });
}, [user]);


return (
  <div>
    <MenSale/>
    <MenPopular/>
    <MenCategories />
  </div>
);
}

export default Home