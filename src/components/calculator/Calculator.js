import { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import "./Calculator.css";

export default function Calculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPerc1] = useState(0);
  const [percentage2, setPerc2] = useState(0);
  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function onReset() {
    setBill("");
    setPerc1(0);
    setPerc2(0);
  }

  return (
    <div className="list">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPerc1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPerc2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill && (
        <>
          <Output bill={bill} tip={tip} />
          <ResetBtn onReset={onReset} />{" "}
        </>
      )}
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}
function ResetBtn({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
