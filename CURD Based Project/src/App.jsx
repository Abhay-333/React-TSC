import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details"

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-full bg-zinc-800 text-white flex">
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
