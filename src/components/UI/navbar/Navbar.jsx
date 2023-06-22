import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {MyButton} from "../button/MyButton";
import {AuthContext} from "../../../context";

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  return (
    <div className="navbar">
      <MyButton onClick={() => setIsAuth(false)}>Sign Out</MyButton>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};