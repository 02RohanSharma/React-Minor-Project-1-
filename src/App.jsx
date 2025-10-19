import Home from "./Components/Home";
import Details from "./Components/Details";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Create from "./Components/Create";

function App() {

  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;