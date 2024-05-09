import React, { useState } from "react";
import axios from "axios";
import { MyContact } from "./contactInterface";
import { MyLogin, MySignUp } from "./signupInterface";
import useStore from "../STORE/MyStore";

//working
export const fetchUserData = async () => {
  // const url = `http://localhost:9090/persons`;
  const url = `http://localhost:9091/person/all`;
  const token = useStore.getState().currToken;
  return await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      useStore.getState().setAllUser(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

//working actively used by LogIn
export const fetchUserDataById = async (id: number) => {
  const url = `http://localhost:9091/person/${id}`;
  const token = useStore.getState().currToken; //working
  // console.log("My Token " + token); //working
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("Login Called by User data ->" +JSON.stringify( response.data.firstName)); //working
    if (response.data) {
      console.log("response data"+response.data);
      useStore.getState().setCurrentUser(response.data);
    }
    // console.log("Login of my current user :"+useStore.getState().currentUser?.firstName); //worked
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

//working
export const LogIn = async (values: MyLogin) => {
  await axios
    .post("http://localhost:9091/user/login", values)
    .then((res: any) => {
      console.log(res.data.id);
      localStorage.setItem("currId", res.data.id);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      //I can set it to my current useStore state too.
      // useStore.getState().setCurrToken(res.data.token);
      // useStore.getState().setCurrRole(res.data.role);
      // console.log(localStorage.getItem("role"));
      // this res only have this Object->currId,token,role.
      // console.log(res.data);
      //here i know Id token and role , so from here i have to set the currentUser for a particuler user and then =>NavBar name change
      useStore.getState().setCurrentUser(res.data);
      useStore.getState().setCurrRole(res.data.role);
      useStore.getState().setCurrToken(res.data.token);

      if (useStore.getState().currRole === "USER") {
        // console.log(res.data);
        fetchUserDataById(res.data.id);
      }
    })
    .catch((err) => {
      console.error(err.message);
    });
};

//working
export const postContact = async (values: MyContact) => {
  try {
    const response = await axios.post("http://localhost:9091/contact", values);
    console.log("postContact got called");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

//working
export const signUp = async (values: MySignUp) => {
  try {
    const response = await axios.post("http://localhost:9091/user", values);
    console.log("Signup called");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
