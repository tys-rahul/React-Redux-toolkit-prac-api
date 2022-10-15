import React from "react";
import { Counter } from "./features/counter/Counter";
import { GridExample } from "./features/counter/GridExample";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./features/pages/User";
import UserDetail from './features/pages/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes starts here */}
        <Route path='/' element={<Counter />} />
        <Route path='user' element={<User />} />
        <Route path='userDetails/:id' element={<UserDetail />} />
        {/* Routes ends here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
