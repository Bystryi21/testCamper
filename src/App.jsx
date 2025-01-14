import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
}

export default App;
