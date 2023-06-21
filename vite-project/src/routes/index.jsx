import { useRoutes } from 'react-router-dom';
import TodoFeature from '../components/Todo';
import Product from '../components/Product';
import Home from '../layout/home';
import Category from '../components/Category/category';

export default function Router() {
  const routing = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/todo',
          element: <TodoFeature />,
        },
        { path: '/product', element: <Product /> },
        { path: '/category', element: <Category /> },
      ],
    },
  ]);
  return routing;
}