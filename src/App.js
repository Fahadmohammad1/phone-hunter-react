import "./App.css";
import { createContext } from "react";
import Header from "./components/Header/Header";
import "flowbite";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Phone from "./components/Phone/Phone";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";

export const PhoneContext = createContext();

function App() {
  // const [searchText, setSearchText] = useState("");
  // const [phones, setPhones] = useState([]);

  // const getSearchText = (e) => {
  //   setSearchText(e.target.value);
  // };

  // const searchPhone = () => {
  //   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setPhones(data.data));
  // };
  return (
    <PhoneContext.Provider value={"hello"}>
      <div className="bg-indigo-50">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/shop/:phoneId" element={<Phone></Phone>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </PhoneContext.Provider>
  );
}

export default App;
