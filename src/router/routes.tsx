import { lazy } from "react";
import { Outlet } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const About = lazy(() => import("../pages/About"));
const Auth = lazy(() => import("../pages/Auth"));
const Posts = lazy(() => import("../pages/Posts"));
const PostsId = lazy(() => import("../pages/PostId"));

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
];
