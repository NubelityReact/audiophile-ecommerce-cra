import { useMemo, useState } from "react";

const calculateFactorial = (num: number): number => {
  console.log("calculating factorial...");
  return num <= 0 ? 1 : num * calculateFactorial(num - 1);
};

const FactorialCalculator = () => {
  const [number, setNumber] = useState(1);

  const [counter, setCounter] = useState(0);

  const factorial = useMemo(() => calculateFactorial(number), [number]);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />

      <p>Factorial: {factorial}</p>

      <button onClick={handleClick}>increment counter</button>
      <p>counter: {counter}</p>
    </div>
  );
};

export default FactorialCalculator;
