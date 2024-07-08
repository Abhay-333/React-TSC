import { useState } from "react";
import {
  BrowserRouter,
  useLocation,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";

function App() {
  const { search, pathname } = useLocation();

  return (
    <div className="h-screen w-full bg-zinc-800 text-white flex">
      {(pathname != "/" || search.length > 0) && (
        <Link
          className="absolute top-[7%] right-[3%] font-bold bg-blue-500 px-5 py-3 rounded-lg"
          to="/"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
