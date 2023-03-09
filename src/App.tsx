import ProductCard from "./Components/ProductCard";
import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductPage";

import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path = '/cart' element = {<CartPage/>}/>
        <Route path = '/product' element = {<ProductPage/>}/>
      </Routes>
      </BrowserRouter>
      {/* <LoginPage/> */}
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
