import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "./counterSlice";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255,105,135,0.3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    fontSize: "24px",
  },
});
export function Counter() {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const styled = { margin: "0 20px", color: "red", fontSize: "40px" };

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter Number</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button className={classes.root} onClick={handleDecrease}>
          Decrease
        </Button>

        <span style={styled}>{count}</span>
        <Button className={classes.root} onClick={handleIncrease}>
          Increase
        </Button>
      </div>
    </div>
  );
}
