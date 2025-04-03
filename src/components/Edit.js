import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ({ mobile, setmobile }) => {
  const [editProduct, seteditProduct] = useState(null);
  const [isLoading , setisLoading] = useState(true);
  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    if(mobile.length>0){
        setisLoading(true)
        const Product = mobile.find((items) => items.id == params.id);
         if(Product){
            seteditProduct({...Product});
            setisLoading(false)
         }
    }
  }, [mobile, params.id]);
   console.log(editProduct) 
   console.log(mobile)

   const handleChange = (e)=>{
     seteditProduct({...editProduct , [e.target.name]:e.target.value})
   }

   const handleSave = (e)=>{
    e.preventDefault();
     const updateMobile = mobile.map((items)=>items.id==params.id ? editProduct :items)
     setmobile(updateMobile)
   }
   console.log(mobile)

   const deleteHandle = (e)=>{
    e.preventDefault()
    const deleteMobile = mobile.filter((items)=>items.id!=params.id)
    setmobile(deleteMobile)
    navigate('/admin')
   }

  return (
    <div style={{  width: "50%", margin: "0 auto" }}>
         {
            isLoading ? (<h1>Loading.....</h1>):(
                <div key={editProduct.id}
                style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              >
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <label style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Title
                  </label>
                  <input name="name" value={editProduct.name} style={{ padding: "1rem" }}
                   onChange={handleChange} />
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <label style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Description
                  </label>
                  <textarea style={{ padding: "1rem",height: "100px", resize: "none" }}
                   onChange={handleChange}
                    name="description"
                    value={editProduct.description}/>
                </div>
                <div
                  style={{ display: "flex", flexDirection:'column', gap: "1rem" }}
                >
                  <label style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    image
                  </label>
                  <div style={{display:'flex', justifyContent:'start',gap:'2rem', alignItems:'center'}}>
                  <input value={editProduct.image}
                   name="image"
                    style={{ padding: "1rem", width:'70%' }}
                    onChange={handleChange}
                  />
                  <img src={editProduct.image} alt={editProduct.name} width={50} height={50}/>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ width: "100%" }}>
                      <label
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                          marginRight: "1rem",
                          display: "block",
                          marginBottom: "1rem",
                        }}
                      >
                        Price
                      </label>
                      <input
                         value={editProduct.price}
                         name='price'
                        style={{
                          width: "20%",
                          padding: "0.5rem",
                          marginRight: "1.5rem",
                        }}
                        onChange={handleChange}
                      />
                      <button
                        style={{
                          paddingInline: "1rem",
                          paddingBlock: "0.4rem",
                          marginRight: "1rem",
                          cursor: "pointer",
                          backgroundColor: "black",
                          color: "white",
                        }}
                        onClick={deleteHandle}
                      >
                        Delete
                      </button>
                      <button
                        style={{
                          paddingInline: "1rem",
                          paddingBlock: "0.4rem",
                          cursor: "pointer",
                          backgroundColor: "black",
                          color: "white",
                        }}
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
         }

    </div>
  );
};

export default Edit;
