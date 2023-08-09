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
useEffect(() => {
  if (user?.uid) {
    const menCollectionRef = doc(db, "categories/men/products", id.toString());

    const fetchData = async () => {
      try {
        const docSnapshot = await getDoc(menCollectionRef);
        if (docSnapshot.exists()) {
          setData(docSnapshot.data());
          console.log(data);
          setLoading(false);
        } else {
          console.log("Document not found.");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }
}, [user?.uid, id]);

if (loading) {
  return (
    <div>
      <div className="flex text-left ml-52 font-mono text-2xl text-gray-600">
        Men's New
      </div>
      <div className=" items-center mx-auto container justify-between">
        <div className="sm:p-6 pt-12 items-center container justify-between">
          <div className="flex flex-wrap">
            {[...Array(10)].map((_, index) => (
              <li
                className="mr-4 md:mr-8 pb-6 rounded animate-pulse list-none"
                key={index}
              >
                <div className="w-[265px] h-[339px] bg-gray-300 mb-2"></div>
                <div className="mt-2">
                  <div className="w-12 md:w-40  bg-gray-300 h-4 shadow"></div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} else {
  return (
    <div>
      <div className="flex text-left pt-5 ml-4 sm:ml-52 font-mono text-2xl text-gray-600">
        {data.name}
      </div>
      <Products products={data.products} />
    </div>
  );
}
}

export default Home