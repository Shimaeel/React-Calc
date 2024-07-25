// import Table from './Components/Table.jsx';
// import Form from './Components/Form.jsx';
import { useState } from 'react';
import Cal from './Components/Cal.jsx';
import Output from './Components/Output.jsx';
import Practice from './Components/Practice.jsx';
import Temp from './Components/temp.js';

function App() {
  const [Addition, setAddition] = useState();
  const [Subtraction, setSubtraction] = useState();
  const [Multiplication, setMultiplication] = useState();
  const [Division, setDivision] = useState();

  const [arr, setArr] = useState([]);
  const handleFormData = (data) => {
    console.log(data);
    setArr([...arr, data]);
  }

  const handleAdditionData = (data) => {
    setAddition(data);
    console.log(data)

  }

  const handleSubtractionData = (data) => {
    setSubtraction(data);
    console.log(data)

  }
  const handleMultiplicationData = (data) => {
    setMultiplication(data);
    console.log(data)

  }

  const handleDivisionData = (data) => {
    setDivision(data);
    console.log(data)

  }



  return (
    <div className="bg-gray-300  w-full h-full flex">

      {/* <Form handleFormData={handleFormData} />
      <Table arr={arr} /> */}
      <Cal handleAdditionData={handleAdditionData}
        handleSubtractionData={handleSubtractionData}
        handleMultiplicationData={handleMultiplicationData}
        handleDivisionData={handleDivisionData} />
      <Output />
      {/* <Temp /> */}
      {/* <Practice /> */}
    </div>
  );
}

export default App;
