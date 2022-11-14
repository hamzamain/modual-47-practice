import React, { useEffect, useState } from "react";
import Tablet from "../Tablet/Tablet";
import Watch from "../Watch/Watch";

const Device = (props) => {
  const [steps, setSteps] = useState(0);
  const ChangeSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
    // console.log(steps);
  };
  useEffect(() => console.log(steps), [steps]);
  return (
    <div>
      <h2>my Device : {props.name}</h2>
      <p>so far steps: {steps}</p>
      <button onClick={ChangeSteps}>de dor......</button>
      <Watch steps={steps}></Watch>
      <Tablet></Tablet>
    </div>
  );
};

export default Device;
