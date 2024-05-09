import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Router, Routes } from "react-router";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import About from "./Pages/About";
import AdminDetailed from "./Pages/AdminDetailed";
import Contact from "./Pages/Contact";
import Detailed from "./Pages/Detailed";
import Home from "./Pages/Home";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detailed/:userId" element={<Detailed />} />
            <Route path="/admin_detailed" element={<AdminDetailed />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </>
  );
};

export default App;
