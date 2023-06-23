import { useRoutes } from "react-router-dom";
import Category from "../components/Category/category";
import { Counter } from "../components/Counter/counter";
import Product from "../components/Product";
import TodoFeature from "../components/Todo";
import Home from "../layout/home";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/todo",
          element: <TodoFeature />,
        },
        { path: "/product", element: <Product /> },
        { path: "/category", element: <Category /> },
        { path: "/counter", element: <Counter /> },
      ],
    },
  ]);
  return routing;
}
