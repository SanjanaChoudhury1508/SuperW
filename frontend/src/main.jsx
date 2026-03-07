import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { InterestsProvider } from "./context/InterestsContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <InterestsProvider>
        
          <App />
        
      </InterestsProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);
