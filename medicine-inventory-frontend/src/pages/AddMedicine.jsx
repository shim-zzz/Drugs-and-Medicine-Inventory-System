import { useState } from "react";
import Navbar from "../components/Navbar";

function AddMedicine() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove the error for this field while typing
    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Medicine name is required.";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required.";
    }

    if (formData.quantity === "") {
      newErrors.quantity = "Quantity is required.";
    } else if (Number(formData.quantity) < 0) {
      newErrors.quantity = "Quantity cannot be negative.";
    }


    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Medicine:", formData);

    setSuccess("Medicine added successfully!");

    setFormData({
      name: "",
      category: "",
      quantity: "",
    });

    setErrors({});
  };

  return (
    <>
      <Navbar />

      <main className="page-container">
        <div className="form-container">
          <h1>Add Medicine</h1>

          {success && <p className="success">{success}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Medicine Name</label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter medicine name"
              />

              {errors.name && (
                <p className="field-error">{errors.name}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>

              <input
                id="category"
                name="category"
                type="text"
                value={formData.category}
                onChange={handleChange}
                placeholder="Enter category"
              />

              {errors.category && (
                <p className="field-error">{errors.category}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>

              <input
                id="quantity"
                name="quantity"
                type="number"
                min="0"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
              />

              {errors.quantity && (
                <p className="field-error">{errors.quantity}</p>
              )}
            </div>



            <button type="submit">Add Medicine</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddMedicine;