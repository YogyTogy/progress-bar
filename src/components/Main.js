import React, { useState } from "react";
import "./stepper.css";

const steps = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

const titles = ["IDEALISTIC", "DISIILLUSIONED", "CYNICAL", "HOPEFUL"];

const ques = [
  { p: "I have ambitious aims of making a difference." },
  { p: "My leadership journey has progressed as I anticipated." },
  { p: "I have spent fewer than 4 years in full time service or ministry." },
  { p: "I have ambitious aims of making a difference." },
  { p: "My leadership journey has progressed as I anticipated." },
  { p: "I have spent fewer than 4 years in full time service or ministry." },
];

const Main = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [count, setCount] = useState(1)

function increment() {
  setCount(count + 1)
}
function decrement() {
  setCount(count - 1)
}
  return (
    <div className="bg-[#8FCBD3] h-screen flex justify-center ">
      <div className="bg-white absolute text-center p-3 rounded-lg w-[70%] h-[60%] mt-20">
        <div className="grid grid-flow-col mt-6 space-x-6 ">
          {titles.map((title, index) => (
            <div key={index}>
              <p className="overflow-hidden h-1.5 mb-2 text-xs rounded bg-gray-200 w-full "></p>
              <p className={`${"active"} text-xl font-bold mt-1`}>
                {title}
              </p>
            </div>
          ))}
        </div>

        <p className="text-red-500 mt-8 font-semi-bold text-xl"> 
              {count}/20 </p>

        <div className="mt-6 p-10">
          <p className="text-xl">{ques[currentStep].p}</p>
        </div>

        <div className="flex justify-between mt-20">
          {steps?.map((step, i) => (
            <div key={i} className={`step-item`} onClick={() => {
              setCurrentStep((prev) => prev + 1);
            }}>
              <button className="step"></button>
              <button className=" btn text-lg font-semi-bold text-black-500">{step}</button>
            </div>
          ))}
        </div>
        <div className="flex font-bold justify-between mt-11 p-8 ">
          <button
            className="btn hover:bg-cyan-100  p-1"
            onClick={() => {
              setCurrentStep( (prev) => prev - 1)
              decrement()
            }}
          >
            ← PREV
          </button>
          <button
            className="btn hover:bg-cyan-100  p-1"
            onClick={() => {
              setCurrentStep((prev) => prev + 1)
              increment()
            }}
          >                                                                                                                                                                                                
            NEXT →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
