import './App.css';
import Login from './login/Login';
import LightContactB from './login/LightContactB';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Join from './login/Join';
import Logout from './login/Logout';
import Home from './component/Home';
import CenterDetail from './component/CenterDetail';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/join" element={<Join/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route path='/main' element={<LightContactB/>}></Route>
      <Route path='/api/center' element={<CenterDetail/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}
//<Route path='/main' element={<LightContactB/>}></Route>
export default App;

//<img className="w-full h-full" src="img/banner.jpg" alt="banner"/>