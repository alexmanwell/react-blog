import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {Error} from "./pages/Error";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import {Login} from "./pages/Login";
import {Loader} from "./UI/loader/Loader";

export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route
            path={route.path}
            element={route.component}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Route path="/error" element={<Error/>}/>
        <Route
          path="*"
          element={<Navigate to="/error"/>}
        />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route
            path={route.path}
            element={route.component}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Route path="/*" element={<Login/>}/>
      </Routes>
  )
};