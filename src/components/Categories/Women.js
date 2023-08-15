import React, { useState, useEffect } from "react";
import Products from "../Products";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
const Women = () => {
  const [user, setUser] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  }, [user]);
  useEffect(() => {
    if (user?.uid) {
      const menCollectionRef = doc(
        db,
        "categories/women/products",
        id.toString()
      );

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
        <div className="w-12 md:w-44  bg-gray-300 h-4 shadow ml-52 mt-20"></div>
        <div className=" items-center mx-auto container justify-between">
          <div className="sm:p-6 pt-12 items-center container justify-between">
            <div className="flex flex-wrap">
              {[...Array(10)].map((_, index) => (
                <li
                  className="mr-4 md:mr-8 pb-6 rounded animate-pulse list-none"
                  key={index}
                >
                  <div className="w-[180px] h-[239px] sm:w-[265px] sm:h-[339px]  bg-gray-300 mb-2"></div>
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
      <div className="">        
        <Products products={data.products} name={data.name}/>
      </div>
    );
  }
};

export default Women;
