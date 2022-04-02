import "./App.css";
import { createContext } from "react";
import Header from "./components/Header/Header";
import "flowbite";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";

const PhoneContext = createContext();

function App() {
  return (
    <PhoneContext.Provider value={"abc"}>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
        </Routes>
      </div>
    </PhoneContext.Provider>
  );
}

export default App;
