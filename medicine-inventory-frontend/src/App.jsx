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
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Protected Medicine route */}
        <Route
          path="/medicines"
          element={
            <ProtectedRoute>
              <Medicine />
            </ProtectedRoute>
          }
        />

        {/* Protected Add Medicine route */}
        <Route
          path="/add-medicine"
          element={
            <ProtectedRoute>
              <AddMedicine />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;