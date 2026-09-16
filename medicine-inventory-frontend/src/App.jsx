import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Medicine from "./pages/Medicine";
import AddMedicine from "./pages/AddMedicine";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

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