import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  onTextChange: Dispatch<SetStateAction<number>>;
}

const FromChildToParent: React.FC<IProps> = (props) => {
  const { onTextChange } = props;
  const TriggerSignal = () => {
    onTextChange(2);
  };

  return (
    <div>
      <h2>Children component</h2>
      {/* <input type="text" onInput={e => onTextChange(e.target.value)} /> */}

      <button onClick={TriggerSignal}>Communicate info to parent</button>
    </div>
  );
};

export default FromChildToParent;
