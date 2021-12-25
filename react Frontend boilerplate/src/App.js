import React from "react";
import MainRouter from "./mainRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <MainRouter/>
    </BrowserRouter>
  );
}

export default App;
