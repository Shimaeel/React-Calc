import React from "react";

const Table = (props) => {
  return (
    <div className="p-4">
      <table className=" bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-200 text-left">ID</th>
            <th className="py-3 px-6 bg-gray-200 text-left">Name</th>
            <th className="py-3 px-6 bg-gray-200 text-left">Age</th>
            <th className="py-3 px-6 bg-gray-200 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.arr.map((items) => (
            <tr className="border-b">
              <td className="py-4 px-6">{items.fname}</td>
              {/* <td className="py-4 px-6">{items.lastName}</td>
              <td className="py-4 px-6">{}</td>
              <td className="py-4 px-6">abcd@example.com</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
