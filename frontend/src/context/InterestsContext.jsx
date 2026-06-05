// src/context/InterestsContext.jsx
import { createContext, useContext, useState } from "react";

const InterestsContext = createContext();

export const InterestsProvider = ({ children }) => {
  const [interests, setInterests] = useState([]);

  return (
    <InterestsContext.Provider value={{ interests, setInterests}}>
      {children}
    </InterestsContext.Provider>
  );
};

export const useInterests = () => useContext(InterestsContext);
