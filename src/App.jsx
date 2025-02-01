import React from "react";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";
import { Link, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="p-6">
      <nav className="mb-6 bg-gray-800 p-4 rounded-md shadow-md">
        <Link
          to="/tabs"
          className="p-2 text-white hover:text-gray-300 tansition duration-300"
        >
          Tabs
        </Link>
        <Link
          to="/accordion"
          className="p-2 text-white hover:text-gray-300 tansition duration-300 ml-4"
        >
          Accordion
        </Link>
      </nav>
      <Routes>
        <Route path="/tabs" element={<Tabs/>}/>
        <Route path="/accordion" element={<Accordion/>}/>
      </Routes>
    </div>
  );
};

export default App;
