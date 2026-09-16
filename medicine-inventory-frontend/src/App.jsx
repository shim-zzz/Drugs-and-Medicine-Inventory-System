import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function Medicine() {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <h1>Medicine List</h1>
        <p>Medicine list will appear here.</p>
      </main>
    </>
  );
}


function AddMedicine() {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <h1>Add Medicine</h1>
        <p>Add medicine form will appear here.</p>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/medicines" element={<Medicine />} />
        <Route path="/add-medicine" element={<AddMedicine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;