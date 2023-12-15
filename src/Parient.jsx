import React from "react";
import { useState } from "react";
import ChildCompoennt from "./ChildCompoennt";
import { useCallback } from "react";


function Parient() {
  const [parientCounter, setParientCounter] = useState(0);
  const [childCounter, setChildCounter] = useState([]);

  const increament = () => {
    setParientCounter(parientCounter+1)
    console.log("parient called");
  }

  const xtraFun=useCallback(()=>{
  },childCounter)
  return (
    <div>
      <h1>Parient Component</h1>
      <div>
        {parientCounter}
        <button onClick={increament}>Count + </button>
      </div>
 <div className="mt-5" >
 <ChildCompoennt  childCounter={childCounter} onClick={xtraFun} />
 </div>
    </div>
  );
}

export default Parient;

// due to useCallback there is no rendring extra in child component so thats why we used a useCallback in this
