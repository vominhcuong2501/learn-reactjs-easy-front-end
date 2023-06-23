import { NavLink, Outlet } from "react-router-dom";
import "./home.scss";

export default function Home() {
  return (
    <>
      <div className="nav-bloc">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/category">Category</NavLink>
        <NavLink to="/counter">Counter</NavLink>
      </div>
      <div
        style={{
          backdropFilter: "blur(5px)",
          padding: "20px",
          border: "2px solid aqua",
          borderRadius: "20px",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}
