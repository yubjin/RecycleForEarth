import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header"
import LightContactB from "../login/LightContactB"
import Login from "../login/Login"

const recycleForEarth = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<LightContactB/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default recycleForEarth
