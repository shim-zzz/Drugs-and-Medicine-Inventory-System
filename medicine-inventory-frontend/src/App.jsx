import { BrowserRouter, Routes, Route } from "react-router-dom";

function Login() {
  return <h1>Login Page</h1>;
}

function Medicine() {
  return <h1>Medicine Page</h1>;
}

function AddMedicine() {
  return <h1>Add Medicine Page</h1>;
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