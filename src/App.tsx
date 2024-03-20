import React from "react";
import { Route, Routes } from "react-router";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./Pages/About";
import AdminDetailed from "./Pages/AdminDetailed";
import Contact from "./Pages/Contact";
import Detailed from "./Pages/Detailed";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detailed/:userId" element={<Detailed/>}/>
          <Route path='/admin_detailed' element={<AdminDetailed/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
