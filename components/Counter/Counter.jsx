import { useDispatch, useSelector } from "react-redux";
import {
  counterActions,
  sendCount,
} from "../../store/counterSlice/counterSlice.js";

import styles from "./counter.module.scss";

export default function Counter() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);
  return (
    <div className={styles.counterContainer}>
      <h1>Count: {count}</h1>

      <div className={styles.btnWrapper}>
        <button
          onClick={() => {
            dispatch(counterActions.increment());
          }}
        >
          Increase
        </button>

        <button
          onClick={() => {
            dispatch(counterActions.decrement());
          }}
        >
          Decrease
        </button>

        <button
          onClick={() => {
            dispatch(counterActions.incrementByAmount(5));
          }}
        >
          Increase by 5
        </button>

        <button
          onClick={() => {
            dispatch(counterActions.incrementByAmount(-5));
          }}
        >
          Decrease by 5
        </button>

        <button
          onClick={() => {
            dispatch(sendCount(69));
          }}
        >
          API Call
        </button>
      </div>
    </div>
  );
}
