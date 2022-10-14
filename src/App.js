import React from "react";
import { Counter } from "./features/counter/Counter";
import { GridExample } from "./features/counter/GridExample";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./features/pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes starts here */}
        <Route path='/' element={<Counter />} />
        <Route path='user' element={<User />} />
        {/* Routes ends here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
