import React from 'react';
import About from "./pages/About";
import {Posts} from "./pages/Posts";
import {Routes, Route, Navigate} from "react-router-dom";
import {Error} from "./pages/Error";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route
        path="*"
        element={<Navigate to="/error"/>}
      />
    </Routes>
  );
};