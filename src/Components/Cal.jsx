import Input from "postcss/lib/input";
import React, { useEffect, useState } from "react";

const Cal = (props) => {
  const [InputA, setInputA] = useState("");
  const [InputB, setInputB] = useState("");

  const handleInputA = (e) => {
    setInputA(e.target.value);
    console.log(e.target.value);
  };

  const handleInputB = (e) => {
    setInputB(e.target.value);
    console.log(e.target.value);
  };

  const handleAddition = (e) => {
    e.preventDefault();

    let c = parseInt(InputA) + parseInt(InputB);
    props.handleAdditionData(c);
  };

  const handleSubtraction = (e) => {
    e.preventDefault();

    let c = InputA - InputB;
    props.handleSubtractionData(c);
  };

  const handleMultiplication = (e) => {
    e.preventDefault();

    let c = InputA * InputB;

    props.handleMultiplicationData(c);
  };

  const handleDivision = (e) => {
    e.preventDefault();

    let c = InputA / InputB;
    props.handleDivisionData(c);
  };

  const handleClear = (e) => {
    setInputA("");
    setInputB("");
    console.log(e.target.value);
  };

  const handleEqual = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {}, [InputA, InputB]);

  return (
    <div className="bg-gray-300  w-full h-full">
      <h1 className="text-5xl font-bold w-1/2 my-5 flex items-center justify-center">
        Calculator
      </h1>
      <div className="bg-gray-400 mx-10 shadow-lg rounded-md h-[700px] w-1/2 ">
        <div className=" flex justify-center items-center ">
          <input
            name="InputA"
            value={InputA}
            onChange={handleInputA}
            type="text"
            className="custom-placeholder m-5 w-full h-40 border border-black p-2 bg-yellow-200 shadow-lg rounded-md"
            placeholder=""
          />
          <input
            name="InputB"
            value={InputB}
            onChange={handleInputB}
            type="text"
            className="custom-placeholder m-5 w-full h-40 border border-black p-2 bg-yellow-200 shadow-lg rounded-md"
            placeholder=""
          />
        </div>
        <div className="grid  justify-center items-center">
          <button
            onClick={(e) => handleAddition(e)}
            className="text-4xl m-2 w-20 h-20 bg-orange-400 rounded-lg shadow-md"
          >
            +
          </button>
          <button
            onClick={(e) => handleSubtraction(e)}
            className="text-4xl m-2 w-20 h-20 bg-orange-400 rounded-lg shadow-md"
          >
            -
          </button>
          <button
            onClick={(e) => handleMultiplication(e)}
            className="text-4xl m-2 w-20 h-20 bg-orange-400 rounded-lg shadow-md"
          >
            *
          </button>
          <button
            onClick={(e) => handleDivision(e)}
            className="text-4xl m-2 w-20 h-20 bg-orange-400 rounded-lg shadow-md"
          >
            /
          </button>
          <button
            type="submit"
            onClick={(e) => handleClear(e)}
            className="text-4xl m-2 w-20 h-20 bg-orange-400 rounded-lg shadow-md"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cal;
