import React, { useEffect, useState } from "react";
import './../styles/App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import ProductList from "./ProductList";
import Admin from "./Admin";
import ProductDetails from "./ProductDetails";
import Header from "./Header";
import Edit from "./Edit";
import AddProduct from "./addProduct";

const App = () => {

  const [mobile, setmobile] = useState([]);
  const [isLoading, setisLoading] = useState(true);


  useEffect(() => {
    setisLoading(true);
    fetch("../../public/mobiles.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setmobile(data);
        setisLoading(false);
      })
      .catch((err) => console.log("Error while Fetching Data:", err));
  }, []);



  return (
    <BrowserRouter>
    <Header/>
     <Routes>
        <Route path="/" element={<ProductList mobile={mobile} isLoading={isLoading} />}/>
        <Route path="/product/:id" element={<ProductDetails mobile={mobile}/>}/>
        <Route path="/admin" element={<Admin mobile={mobile} />}/> 
        <Route path="/admin/products/:id" element={<Edit mobile={mobile} setmobile={setmobile} />}/>
        <Route path="/addproducts" element={<AddProduct mobile={mobile} setmobile={setmobile} />}/>

     </Routes>
    </BrowserRouter>
  )
}

export default App
