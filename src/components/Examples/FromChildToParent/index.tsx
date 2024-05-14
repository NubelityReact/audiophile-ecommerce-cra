import React, { Dispatch, SetStateAction, useState } from "react";

interface IProps {
  onTextChange?: Dispatch<SetStateAction<number>>;

  onCounterIncreased?: (counter: number, metadata: {}) => void;
}

const FromChildToParent: React.FC<IProps> = (props) => {
  const { onTextChange, onCounterIncreased } = props;

  const [counter, setCounter] = useState(0);

  const TriggerSignal = () => {
    onTextChange && onTextChange(2);
  };

  const handleIncrease = () => {
    setCounter(counter + 1);
    onCounterIncreased &&
      onCounterIncreased(counter + 1, { timestamp: new Date() });
  };

  return (
    <div>
      <h2>Children component</h2>
      {/* <input type="text" onInput={e => onTextChange(e.target.value)} /> */}

      <h1 onClick={TriggerSignal}>Communicate info to parent</h1>

      <button onClick={handleIncrease}>+</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default FromChildToParent;
