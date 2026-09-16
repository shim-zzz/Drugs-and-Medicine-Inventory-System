import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Medicine() {
  const medicines = [
    { id: 1, name: "Paracetamol", quantity: 100, price: 5 },
    { id: 2, name: "Amoxicillin", quantity: 50, price: 10 },
    { id: 3, name: "Cetirizine", quantity: 75, price: 8 },
  ];

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h1>Medicine List</h1>

        <Link to="/add-medicine" className="add-button">
          Add Medicine
        </Link>

        <table className="medicine-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.id}</td>
                <td>{medicine.name}</td>
                <td>{medicine.quantity}</td>
                <td>₱{medicine.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Medicine;