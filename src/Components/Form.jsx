import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("Shimail");
  const [lastName, setLastName] = useState("Qureshi");
  const [email, setEmail] = useState("abc@gmail.com");
  const [contact, setContact] = useState("+91-123456789");

  const handleFirst = (e) => {
    setFirstName(e.target.value);
    console.log(e.target.value);
  };

  const handleLast = (e) => {
    setLastName(e.target.value);
    console.log(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      fname: firstName,
    };
    props.handleFormData(data);
    console.log(data);
    alert("Form has been sudmitted");
  };

  return (
    <form className="bg-gray-400 grid p-5 h-[700px] w-1/3 border rounded-md shadow-md items-center justify-center">
      <h1 className="text-5xl font-bold text-center">Sign-Up</h1>
      <input
        name="firstName"
        value={firstName}
        onChange={(e) => handleFirst(e)}
        type="text"
        className="p-5 w-44 h-10 rounded-md shadow-md"
        placeholder="First Name"
      />
      <input
        name="lastName"
        value={lastName}
        onChange={(e) => handleLast(e)}
        type="text"
        className="p-5 w-44 h-10 rounded-md shadow-md"
        placeholder="Last Name "
      />
      <input
        name="Email"
        value={email}
        onChange={(e) => handleEmail(e)}
        type="text"
        className="p-5 w-44 h-10 rounded-md shadow-md"
        placeholder="Email Address"
      />
      <input
        name="contactNumber"
        value={contact}
        onChange={(e) => handleContact(e)}
        type="text"
        className="p-5 w-44 h-10 rounded-md shadow-md"
        placeholder="Contact Number"
      />
      <input
        name="dateofBirth"
        value=""
        type="date"
        className="p-5 w-44 h-10 rounded-md shadow-md"
        placeholder="Date of Birth"
      />
      <input
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className="w-44 h-10 text-white rounded-md shadow-md bg-black"
      />
    </form>
  );
};

export default Form;
