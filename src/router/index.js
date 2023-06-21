import {About} from "../components/pages/About";
import {Posts} from "../components/pages/Posts";
import {PostPage} from "../components/pages/PostPage";
import React from "react";

export const routes = [
  {path: '/', component: <Posts/>, exact: false},
  {path: '/about', component: <About/>, exact: false},
  {path: '/posts', component: <Posts/>, exact: true},
  {path: '/posts/:id', component: <PostPage/>, exact: true}
];