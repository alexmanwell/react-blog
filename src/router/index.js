import {About} from "../components/pages/About";
import {Posts} from "../components/pages/Posts";
import {PostPage} from "../components/pages/PostPage";
import React from "react";
import {Login} from "../components/pages/Login";

export const privateRoutes = [
  {path: '/', component: <Posts/>, exact: false},
  {path: '/about', component: <About/>, exact: false},
  {path: '/posts', component: <Posts/>, exact: true},
  {path: '/posts/:id', component: <PostPage/>, exact: true}
];

export const publicRoutes = [
  {path: '/login', component: <Login/>, exact: true}
];