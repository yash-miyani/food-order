import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import AllFood from "../Pages/AllFood";
import FoodDetail from "../Pages/FoodDetail";
import Cart from "../Pages/Cart";
import CheakOut from "../Pages/CheakOut";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Contact from "../Pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFood />} />
      <Route path="/foods/:id" element={<FoodDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheakOut />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
