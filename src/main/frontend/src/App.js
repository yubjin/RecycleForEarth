import './App.css';
import Login from './login/Login';
import LightContactB from './login/LightContactB';
import recycleForEarth from './component/recycleForEarth';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<LightContactB/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
