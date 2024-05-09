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
  const { data, status } = useQuery("users", fetchUserData); //worked that means the previous is not needed
  return (
    <>
      <div>
        <Navbar />
        <div className="parent-user">
          {
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
