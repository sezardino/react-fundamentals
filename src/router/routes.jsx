import { lazy } from "react";
import { Outlet } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";

import Home from "../pages/index/Home";
import NotFound from "../pages/index/NotFound";

const About = lazy(() => import("../pages/index/About"));
const Auth = lazy(() => import("../pages/index/Auth"));
const Posts = lazy(() => import("../pages/index/Posts"));
const PostsId = lazy(() => import("../pages/index/PostId"));
const Redux = lazy(() => import("../pages/redux/Redux"));
const Bank = lazy(() => import("../pages/redux/Bank"));
const Customers = lazy(() => import("../pages/redux/Customers"));
const ReduxTS = lazy(() => import("../pages/redux-ts/Index"));
const Users = lazy(() => import("../pages/redux-ts/Users"));

export const routes = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      { path: "/posts", element: <Posts /> },
      { path: "/posts/:id", element: <PostsId /> },
    ],
  },
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/auth", element: <Auth /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/redux",
    element: <Redux />,
    children: [
      { path: "bank", element: <Bank /> },
      { path: "customers", element: <Customers /> },
    ],
  },
  {
    path: "/redux-ts",
    element: <ReduxTS />,
    children: [{ path: "users", element: <Users /> }],
  },
];
