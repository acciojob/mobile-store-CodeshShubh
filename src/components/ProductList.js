import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({mobile}) => {
  const [productList, setproductList] = useState([])
  const [isLoading, setisLoading] = useState(true)
  
  useEffect(() => {
  if(!mobile || mobile.length==0){
     return setisLoading(true)
  }else{
     setproductList(mobile)
     setisLoading(false)
  }

  }, [mobile])
  

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap:'5rem',
      
      }}
    >
      {isLoading ? (
        <h1 style={{ textAlign: "center" }}>Loading.....</h1>
      ) : (
        productList.map((items) => {
          return (
            <div style={{ display: "flex", justifyContent:'space-evenly'  , border:'1px solid black' , width:'400px', margin:'0 auto'}}>
              <div>
                <img
                  src={items.image}
                  width={300}
                  height={200}
                  alt={items.name}
                />
              </div>
              <div>
                <div>
                  <p>{items.name}</p>
                </div>
                <div>
                  <p style={{ display: "inline-block", margin: "1rem" }}>
                    {items.price} $
                  </p>
                  <Link to={`/product/${items.id}`} style={{ paddingInline: "1rem" , paddingBlock:'0.5rem', backgroundColor:'black' }}>Buy</Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProductList;
