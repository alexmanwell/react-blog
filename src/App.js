import React from 'react';
import './styles/App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import About from "./components/pages/About";
import {Posts} from "./components/pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;