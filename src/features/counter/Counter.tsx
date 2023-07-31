import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { RootState } from "../../app/store";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value);

    if (!isNaN(parsedValue)) {
      setIncrementAmount(parsedValue);
    } else {
      setIncrementAmount(0);
    }
  };

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={resetAll}>Reset</button>
      </div>

      <input type="text" value={incrementAmount} onChange={handleInputChange} />
      <button onClick={() => dispatch(incrementByAmount(addValue))}>
        Zwiększ liczbę
      </button>
    </section>
  );
};

export default Counter;
