import React, { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

const Context = ({ children }) => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
 

  return (
    <AppContext.Provider
      value={{ name, setName, data, setData}}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
