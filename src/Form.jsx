import React, { useContext, useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userSuccess } from "./user";
import { AppContext } from "./Context";

const Form = () => {
  const { name, setName, data, setData } = useContext(AppContext);

  const handlechange = (e) => {
    return setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskItem = {
      id: uuidv4(),
      task: name,
    };
    console.log(taskItem);

    setData((prev) => {
      return [...prev, taskItem];
    });

    userSuccess("Added Successfully");

    setName("");
  };

  const handleClear = () => {
    return setData([]);
  };

  return (
    <div className="section-center">
      <form onSubmit={handleSubmit}>
        <h4>Grocery Shopping</h4>

        <button type="button" onClick={handleClear} className="btn">
          Clear All
        </button>
        <br></br>
        <br />

        <div className="form-control">
          <input
            type="text"
            name="form-input"
            onChange={handlechange}
            value={name}
            required
          />
          <button type="submit" className="btn">
            Add Item
          </button>
        </div>

        {data.map((ele) => {
          return <Item ele={ele} key={ele.id} setData={setData} />;
        })}
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Form;
