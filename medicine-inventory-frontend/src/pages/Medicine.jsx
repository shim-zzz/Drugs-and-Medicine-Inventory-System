import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Medicine() {
  const medicines = [
    { id: 1, name: "Paracetamol", category: "Pain Relief", quantity: 100 },
    { id: 2, name: "Amoxicillin", category: "Antibiotic", quantity: 50, },
    { id: 3, name: "Cetirizine", category: "Antihistamine", quantity: 75, },
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
              <th>Category</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.id}</td>
                <td>{medicine.name}</td>
                <td>{medicine.category}</td>
                <td>{medicine.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Medicine;