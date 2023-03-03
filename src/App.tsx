import ProductCard from "./Components/ProductCard";
import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import LoginPage from "./Pages/LoginPage";
import Nav from "./Components/Nav";
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
      {/* <LoginPage/> */}
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
