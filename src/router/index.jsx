import { lazy } from "react";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { Outlet, useRoutes } from "react-router-dom";

const About = lazy(() => import("../pages/About"));
const Posts = lazy(() => import("../pages/Posts"));
const PostsId = lazy(() => import("../pages/PostId"));

const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/posts", element: <Posts /> },
      { path: "/posts/:id", element: <PostsId /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export const AppRouter = () => {
  const elements = useRoutes(routes);

  return elements;
};
