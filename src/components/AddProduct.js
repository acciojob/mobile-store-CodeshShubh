import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ mobile, setmobile }) => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    // Ensure ID is unique (e.g., incrementing the highest existing ID)
    const newId = mobile.length > 0 ? Math.max(...mobile.map((item) => item.id)) + 1 : 1;

    // Create new product object
    const addedProduct = { ...newProduct, id: newId };

    // Update state with new product
    setmobile([...mobile, addedProduct]);

    // Redirect to Admin page after adding
    navigate("/admin");
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h2>Add New Product</h2>
      <form
        onSubmit={handleAddProduct}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", width: "100%", height: "80px" }}
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "0.5rem",
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
