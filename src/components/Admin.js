import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admin = ({ mobile }) => {

const [products, setproducts] = useState([])

useEffect(() => {
  if(mobile && mobile.length>0){
      setproducts(mobile)
  }
}, [mobile])


  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      <button
        style={{
          marginLeft:'2.5rem',
          border: "1px solid red",
          paddingInline: "1rem",
          paddingBlock: "0.5rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Add Product
      </button>

      <ul style={{ display:'flex',flexDirection:'column', gap:'1rem'}}>
        {products.map((items) => {
          return (
            <Link to={`/admin/products/${items.id}`} style={{ listStyle: "none", display: "flex", gap: "5px", border:'1px solid black' }}>
              <img
                src={items.image}
                width={50}
                height={50}
              />
              <p>{items.name}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Admin;
