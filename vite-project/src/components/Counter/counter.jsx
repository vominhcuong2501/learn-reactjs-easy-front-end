import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const styled = { margin: "0 20px", color: "red", fontSize: "30px" };

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter Number</h1>
      <button onClick={handleDecrease} style={styled}>
        -
      </button>
      <span style={styled}>{count}</span>
      <button onClick={handleIncrease} style={styled}>
        +
      </button>
    </div>
  );
}
