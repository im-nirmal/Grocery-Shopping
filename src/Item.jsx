import React, { useContext, useState } from "react";
import { userError } from "./user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "./Context";

const Item = ({ ele: { id, task } }) => {
  // console.log(props);

  const { setData} = useContext(AppContext);
  const [check, setCheck] = useState(false);

  const handleClick = () => {
    setData((prev) => {
      return prev.filter((ele) => {
        return ele.id !== id;
      });
    });

    userError("Deleted Succesfully");
  };

  const handleCheck = (e) => {
    return setCheck(e.target.checked);
  };

  return (
    <div className="items">
      <div className="single-item">
        <input type="checkbox" onChange={handleCheck} checked={check} />
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: check ? "line-through" : "none",
          }}
        >
          {task}
        </p>
        <button onClick={handleClick} type="button" className="btn-remove-btn">
          Delete
        </button>
      </div>

      {/* <ToastContainer
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
/> */}
    </div>
  );
};

export default Item;
