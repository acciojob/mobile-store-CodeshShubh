import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = ({ mobile }) => {
  const [filterMobile, setfilterMobile] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    if (!mobile || mobile.length === 0)
      return console.log("data not received form the parent");
    setisLoading(true);
    const filter = mobile.filter((items) => items.id == params.id);
    setfilterMobile(filter);
    setisLoading(false);
  }, [params.id, mobile]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "88vh",
          border: "1px solid red",
        }}
      >
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          filterMobile.map((items) => {
            return (
              <div key={items.id} style={{ display: "flex" }}>
                <div>
                  <img
                    src={items.image}
                    width={300}
                    height={200}
                    alt={items.name}
                  />
                </div>
                <div>
                  <p>{items.name}</p>
                  <h3>{items.price}</h3>
                  <p>{items.description}</p>
                </div>
              </div>
            );
          })
        )}
         <Link to={"/"} style={{paddingInline:'1rem', paddingBlock:'0.5rem', marginLeft:'1rem', backgroundColor:'black', color:'white' , textDecoration:'none'}}>Other Products</Link>
      </div>

     
    </>
  );
};

export default ProductDetails;
