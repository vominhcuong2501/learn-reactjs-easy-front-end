import { NavLink, Outlet } from 'react-router-dom';
import './home.scss';

export default function Home() {
  return (
    <>
      <div className="nav-bloc">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/category">Category</NavLink>
      </div>
      <Outlet />
    </>
  );
}
