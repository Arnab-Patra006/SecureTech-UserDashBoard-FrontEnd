import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchUserData } from "../Apis/apimethods";
import { MyUser } from "../Apis/userInterface";
import Eachuser from "../Components/Eachuser";
import Navbar from "../Components/Navbar";
import useStore from "../STORE/MyStore";
import "../Styles/home.css";

const Home = () => {
  //Let's see wheather apimethods->fetchData is working or not.. yup worked
  // const accessToken = localStorage.getItem("token");
  // const apiUrl = "http://localhost:9090/persons";
  // const setAllUser = useStore((state) => state.setAllUser);

  // const fetchData = async () => {
  //   const resp = await axios.get<MyUser[]>(apiUrl, {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  //   setAllUser(resp.data);
  //   return resp.data;
  // };


  // const { data, status } = useQuery("users", fetchData); 
  const { data, status } = useQuery("users", fetchUserData); //worked that means the previous is not needed
  // console.log("My current all user data "+JSON.stringify(data)); //worked
  return (
    <>
      <div>
        <Navbar />
        <div className="parent-user">
          {status === "success" &&
            data &&
            data.map((eachuser: MyUser) => {
              return <Eachuser key={eachuser.id} {...eachuser} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
