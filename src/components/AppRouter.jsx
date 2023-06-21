import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {Error} from "./pages/Error";
import {routes} from "../router";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route =>
        <Route
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      )}
      <Route path="/error" element={<Error/>}/>
      <Route
        path="*"
        element={<Navigate to="/error"/>}
      />
    </Routes>
  );
};